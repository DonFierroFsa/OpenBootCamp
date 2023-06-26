import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { levels } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Tarea Creada");
    return () => {
      console.log(`Task:${task.name} is going to unmount`);
    };
  }, [task]);
/**Function that return a Badge depending on the level of the task */
    function taskLevelBadge(){
      switch (task.level) {
        case levels.NORMAL:
          return(<h6 className="mb-0"><span className="badge bg-primary">{task.level}</span></h6>)
          
        case levels.URGENTE:
          return(<h6 className="mb-0"><span className="badge bg-warning">{task.level} </span></h6>)
          
          case levels.BLOCKING:
          return(<h6 className="mb-0"><span className="badge bg-secondary">{task.level} </span></h6>)
          
      
        default:
          break;
      }
    }

      /**Function para Icon Completed? */
      function taskIconCompleted(){
        if (task.completed){
          return (<i onClick={()=>complete(task)} className="bi-toggle-on task-action" style={{color:"green",fontWeight:"bold"}}>Completed</i>)
        } else{
          return (<i onClick={()=>complete(task)} className="bi-toggle-off task-action" style={{color:"red"}}>Pending.....</i>)
        }
      }
  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">{task.description}</td>
      <td className="align-middle">
        {/*ToDO: Sustituir por un Badge */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
      {/**Sustituiir por un Icono */}
      {taskIconCompleted()}
        <i onClick={()=>remove(task)} className="bi-trash" style={{color:"darkred",fontSize:"1.5rem"}}></i>
      </td>
    </tr>









    // {/* <div>
    //   <h2 class="taskname">Nomre:{task.name}</h2>
    //   <h3>Descripcion: {task.description}</h3>
    //   <h4>Level: {task.level}</h4>
    //   <h5>
    //     This task is:{" "}
    //     {task.completed ? "La tarea se realizo" : "No se completo la tarea"}
    //   </h5>
    // </div> */}
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove:PropTypes.func.isRequired,
};

export default TaskComponent;
