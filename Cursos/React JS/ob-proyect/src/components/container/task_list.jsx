import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { levels } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask0 = new Task(
    "Example0",
    "Description 0",
    true,
    levels.URGENTE
  );
  const defaultTask1 = new Task(
    "Example1",
    "Description 1",
    false,
    levels.BLOCKING
  );
  const defaultTask2 = new Task(
    "Example3",
    "Description 3",
    false,
    levels.NORMAL
  );
  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask0,
    defaultTask1,
    defaultTask2,
  ]);
  const [loading, setLoading] = useState(true);
  //Control del ciclo de vida del componente

  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  function completedTask(task) {
    console.log("Complete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }
  function removeTask(task) {
    console.log("Delte this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }
  function addTask(task) {
    console.log("Add this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          <div
            className="card-body"
            style={{ position: "relative", height: "relative" }}
            data-mdb-perfect-scrollbar="true"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* ToDo:Iterar sobre una lista de tareas */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task}
                      complete={completedTask}
                      remove={removeTask}
                    ></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <TaskForm add={addTask}></TaskForm>
        </div>
      </div>
      {/**ToDo: Aplicar un for o un Map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask} ></TaskComponent>
            <TaskComponent task={changeCompleted}></TaskComponent> */}
    </div>
  );
};

TaskListComponent.propTypes = {};

export default TaskListComponent;
