import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import "../../styles/task.scss"


const TaskListComponent = () => {

    
    const defaultTask= new Task("Example","Default Description",false,levels.NORMAL); 
//Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true );
//Control del ciclo de vida del componente

useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
        console.log("TaskList component is going to unmount...")
    };
}, [tasks]);

    const changeCompleted = (id)=>{
        console.log ("TODO: Cambiar estado de una tarea")
    }

    return (
        <div>
            <div>
                <h1>Your TASK:</h1>
            </div>
            {/**ToDo: Aplicar un for o un Map para renderizar una lista */}
            <TaskComponent task={defaultTask} ></TaskComponent>
            <TaskComponent task={changeCompleted}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
