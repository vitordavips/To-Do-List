import { useState, useEffect } from "react";
import './App.css'; 

// components
import Header from "./components/Header";
import Footer from './components/Footer';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

//css
import styles from './App.module.css';

// Interface
import type { Task } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem('taskList');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  // Save to local storage whenever taskList changes
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const toggleTaskComplete = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  const editTask = (task: Task): void => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  };

  const updateTask = (id: number, title: string, difficulty: number, completed: boolean) => {
    const updatedTask: Task = { id, title, difficulty, completed };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm 
          btnText="Salvar Alterações" 
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      </Modal>

      <Header/>
      
      <main className={styles.main}>
        <div className={styles.topSection}>
          <h2>Nova Tarefa</h2>
          <p>Adicione um item para não esquecer</p>
          <TaskForm 
            btnText='Criar Tarefa' 
            taskList={taskList} 
            setTaskList={setTaskList}
          />
        </div>

        <div className={styles.bottomSection}>
          <h2>Suas Tarefas</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask}
            handleEdit={editTask}
            handleToggleComplete={toggleTaskComplete}
          />
        </div>
      </main>
      
      <Footer/>
    </>
  )
}

export default App;
