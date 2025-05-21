import React from 'react'

//css
import styles from "./TaksForm.module.css";

interface Props {
    btnText: string
}

const TaksForm = ({btnText}: Props) => {
    return <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título</label>
            <input type="text" name='title' placeholder='Título da Tarefa'/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" name='difficulty' placeholder='Dificudade da tarefa'/>
        </div>
        <input type="submit" value={btnText}/>
    </form>
};

export default TaksForm;