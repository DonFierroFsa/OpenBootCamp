import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask= new Task("Example","Default Description",false,levels.NORMAL); 

    const changeState = (id)=>{
        console.log ("ToDo: Cambiar estado de una tarea")
    }

    return (
        <div>
            <div>
                <h1>Your TASK:</h1>
            </div>
            {/**ToDo: Aplicar un for o un Map para renderizar una lista */}
            <TaskComponent task={defaultTask} ></TaskComponent>
            <TaskComponent task={changeState}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
