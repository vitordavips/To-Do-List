import React, {useState} from "react";

import './App.css'

// components
import Header from "./components/Header";
import Footer from './components/Footer';
import TaksForm from "./components/TaksForm";
import TaksList from "./components/TaksList";
import Modal from "./components/Modal";

//css
import styles from './App.module.css';

// Interface
import type { ITaks } from "./interfaces/Taks";


function App() {
  const [taksList, setTaksList] = useState< ITaks[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITaks | null>(null);

  const deleteTask = (id: number) => {
    setTaksList(
      taksList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if(display){
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITaks): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  return (
    <div>
      <Modal 
        children={<TaksForm 
          btnText="Editar Tarefa" 
          taskList={taksList}
          task={taskToUpdate}
        />
      }/>
      <Header/>
      <main className={styles.main}>
        
        <div>
          <h2>O que você vai fazer?</h2>
          <TaksForm 
            btnText='Criar Tarefa' 
            taskList={taksList} 
            setTaksList={setTaksList}
          />
        </div>

        <div>
          <h2>suas tarefas:</h2>
          <TaksList 
            taskList={taksList} 
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>

      </main>
      <Footer/>
    </div>
  )
}

export default App;
