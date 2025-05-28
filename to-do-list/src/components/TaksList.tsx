import React from 'react'

// interfaces
import type { ITaks } from '../interfaces/Taks';

//css
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITaks[];
  handleDelete(id: number): void
};

const TaksList = ({taskList, handleDelete}: Props) => {
  return (
    <>
      {TaksList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil'></i>
              <i 
                className='bi bi-trash' 
                onClick={() => {handleDelete(task.id)}}
              ></i>
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