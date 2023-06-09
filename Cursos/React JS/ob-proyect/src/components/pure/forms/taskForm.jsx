import React, { useRef } from "react";
import PropTypes from "prop-types";
import { levels } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(levels.NORMAL);

  function addTasks(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value,
    );
    add(newTask);
  }

  return (
    <form
      onSubmit={addTasks}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder="Task Name"
        ></input>
        <input
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Task Description"
        ></input>
        <label htmlFor="selectLevel" className="sr-only">
          Priority
        </label>
        <select ref={levelRef} defaultValue={levels.NORMAL} id="selectLevel">
          <option value={levels.NORMAL}>NORMAL</option>
          <option value={levels.URGENTE}>URGENTE</option>
          <option value={levels.BLOCKING}>BLOCKING</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-lg ms-2">SubmitTask</button>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
