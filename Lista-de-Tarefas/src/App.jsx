import './App.css'

// react router
import {BrowserRouter, Routes, Route, } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Tarefas from './pages/Tarefas';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/tarefas' element={<Tarefas />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
