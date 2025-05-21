import './App.css'

// components
import Header from "./components/Header";
import Footer from './components/Footer';
import TaksForm from "./components/TaksForm";
import TaksList from "./components/TaksList";
//css
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaksForm btnText='Criar Tarefa'/>
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
