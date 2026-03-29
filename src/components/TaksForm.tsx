import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

//css
import styles from "./TaksForm.module.css";

// Interface
import type { ITaks } from '../interfaces/Taks';


interface Props {
    btnText: string;
    taskList: ITaks[];
    setTaksList?: React.Dispatch<React.SetStateAction<ITaks[]>>;
    task?: ITaks | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaksForm = ({btnText, taskList, setTaksList, task, handleUpdate}: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    useEffect(() => {
        if(task){
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(handleUpdate){
            handleUpdate(id, title, difficulty);
        } else{
            const id = Math.floor(Math.random() * 1000)

            const newTask: ITaks = {id, title, difficulty}
            
            setTaksList!([...taskList, newTask])

            setTitle("");
            setDifficulty(0);
        };

    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            setTitle(e.target.value);
        }else{
            setDifficulty(parseInt(e.target.value))
        }
    };

    const updateTask = (id: number, title: string, difficulty: number): void => {
        const updatedTask: ITaks = {id, title, difficulty};
        const updatedItems = taskList.map((task) => {
            return task.id === id ? updatedTask : task;
        });

        setTaksList(updatedItems);

        hideOrShowModal(false);
    }

    return <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título</label>
            <input 
                type="text" 
                name='title' 
                placeholder='Título da Tarefa' 
                onChange={handleChange}
                value={title}
            />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade: </label>
            <input 
                type="text" 
                name='difficulty' 
                placeholder='Dificuldade da Tarefa' 
                onChange={handleChange}
                value={difficulty}
            />
        </div>
        <input type="submit" value={btnText}/>
    </form>
};

export default TaksForm;