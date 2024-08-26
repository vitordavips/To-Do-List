import './FormLogin.css'
import { useState } from "react"
import { Link } from 'react-router-dom';


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Eviando o formulário");
        console.log("Email:", email);
        console.log("password:", password);
       
    
        // limpar form
        setEmail("");
        setPassword("");
      }
    return (
    <div className='container'> 
        <h1>Login</h1>
        {/* Criando o Form de Login */}
       <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu email: " 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                />
            </div>

            <div>
                <label htmlFor="senha">Senha:</label>
                <input 
                    type="password" 
                    name="senha" 
                    placeholder="Digite a sua senha: " 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <Link to={"/tarefas"}><input type="submit" value="Enviar" /></Link>
            
       </form>
    </div>
  )
}

export default FormLogin