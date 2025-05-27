import React, {useState} from "react";

import './App.css'

// components
import Header from "./components/Header";
import Footer from './components/Footer';
import TaksForm from "./components/TaksForm";
import TaksList from "./components/TaksList";
//css
import styles from './App.module.css';

// Interface
import type { ITaks } from "./interfaces/Taks";


function App() {
  const [taksList, setTaksList] = useState< ITaks[]>([]);

  return (
    <div>
      <Header/>
      <main className={styles.main}>
        
        <div>
          <h2>O que você vai fazer?</h2>
          <TaksForm btnText='Criar Tarefa' taskList={taksList} setTaksList={setTaksList}/>
        </div>

        <div>
          <h2>suas tarefas:</h2>
          <TaksList/>
        </div>

      </main>
      <Footer/>
    </div>
  )
}

export default App;
