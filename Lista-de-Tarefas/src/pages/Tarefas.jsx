import './Tarefas.css'
import { useState } from "react";

const Tarefas = () => {
  const [titulo, setTitulo] = useState("");
  const [tarefa, setTarefa] = useState("");

  return (
    <div className="tarefas-container">
      <div className="tarefas-output">
        <p>{titulo}</p>
        <p>{tarefa}</p>
      </div>
      <div>
        <form action="">
        <div>
                <label htmlFor="text">Título:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Digite o título: " 
                    onChange={(e) => setTitulo(e.target.value)} 
                />
            </div>

            <div>
              <label htmlFor="message">Tarefa:</label>
                      <textarea
                          name="message"
                          placeholder="Escreva sua tarefa aqui..."
                          onChange={(e) => setTarefa(e.target.value)} // Atualiza o estado quando o conteúdo do textarea muda
                          rows="5" // Define o número de linhas do textarea
                          cols="33" // Define o número de colunas do textarea
                      />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Tarefas