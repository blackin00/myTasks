import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  const history = useHistory(); 

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button 
        className="see-task-details-button"
        onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDelete(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
