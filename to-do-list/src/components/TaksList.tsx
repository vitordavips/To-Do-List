import React from 'react'

// interfaces
import type { ITaks } from '../interfaces/Taks';

//css
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITaks[];
};

const TaksList = ({taskList}: Props) => {
  return (
    <>
      {TaksList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default TaksList;