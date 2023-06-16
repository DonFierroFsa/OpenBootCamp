import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nomre:{task.name}</h2>
      <h3>Descripcion: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>
        This task is:{" "}
        {task.completed ? "La tarea se realizo" : "No se completo la tarea"}
      </h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
