import { useState } from "react"

const FormLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
    <div>
        <h1>Login</h1>
        {/* Criando o Form de Login */}
       <form action="">
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu email: " 
                    value={email} 
                />
            </div>

            <div>
                <label htmlFor="senha">Senha:</label>
                <input 
                    type="password" 
                    name="senha" 
                    placeholder="Digite a sua senha: " 
                    value={password}
                />
            </div>
       </form>
    </div>
  )
}

export default FormLogin