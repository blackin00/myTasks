import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";


const App = () => {
  // const message = "hello world!"
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
       const fetchTasks = async () => {
       const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
       
       setTasks(data)
       }

       fetchTasks()
    }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);

   setTasks(newTasks)
  }

  const handlerTaskAddition = (taskTitle) => {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ];
  
      setTasks(newTasks);
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
  }

return (
    <Router>
      <div className="container">
       <Header /> 
         <Route path="/" exact render={() => (
           <>
              <AddTask handleTaskAddition={handlerTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
           </>
         )} />
         <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
