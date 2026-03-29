import React, { useState, useEffect } from 'react';
import styles from './TaskForm.module.css';
import type { Task } from '../interfaces/Task';

interface Props {
  btnText: string;
  taskList: Task[];
  setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>;
  task?: Task | null;
  handleUpdate?: (id: number, title: string, difficulty: number, completed: boolean) => void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
      setCompleted(task.completed);
    }
  }, [task]);

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty, completed);
    } else {
      const id = Math.floor(Math.random() * 1000000);
      const newTask: Task = { id, title, difficulty, completed: false };

      if(setTaskList) {
        setTaskList([...taskList, newTask]);
      }
      setTitle("");
      setDifficulty(0);
    }
  };

  const isFormValid = title.trim().length > 0;

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Título da Tarefa:</label>
        <input 
          type="text" 
          name="title" 
          placeholder="O que você vai fazer?" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title} 
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input 
          type="number" 
          name="difficulty" 
          placeholder="Nível de dificuldade (ex: 1 a 5)" 
          onChange={(e) => setDifficulty(parseInt(e.target.value) || 0)} 
          value={difficulty > 0 ? difficulty : ''} 
          min="0"
        />
      </div>
      <input 
        type="submit" 
        value={btnText} 
        disabled={!isFormValid}
        className={styles.submitButton}
      />
    </form>
  );
};

export default TaskForm;
