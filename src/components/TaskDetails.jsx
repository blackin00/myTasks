import React from "react";
import "./TaskDetails.css";
import Button from "./Button";
import { useHistory, useParams } from "react-router-dom";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem impsum, dolor sit amet consectetur at minima eius magnam culpa
          sequi explicabo.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
