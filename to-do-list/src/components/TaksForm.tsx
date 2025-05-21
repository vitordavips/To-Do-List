import React from 'react'

interface Props {
    btnText: string
}

const TaksForm = ({btnText}: Props) => {
    return <form>
        <div>
            <label htmlFor="title">Título</label>
            <input type="text" name='title' placeholder='Título da Tarefa'/>
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" name='difficulty' placeholder='Dificudade da tarefa'/>
        </div>
        <input type="submit" value={btnText}/>
    </form>
};

export default TaksForm;