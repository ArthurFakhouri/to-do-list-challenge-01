import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './NewTask.module.css';

interface NewTaskProps {
    onAddTask: (task: string) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {

    const [tarefa, setTarefa] = useState('');

    function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
        setTarefa(event.target.value);
    }

    function handleClickAddTask() {
        if (tarefa.length) {
            onAddTask(tarefa);
            setTarefa('');
        }
    }

    const isNewTaskEmpty = tarefa.length === 0;

    return (
        <div className={styles.newTask}>
            <input type="text" className={styles.input}
                placeholder="Adicione uma nova tarefa" value={tarefa}
                onChange={handleChangeTaskText} />
            <button className={styles.button} disabled={isNewTaskEmpty} onClick={handleClickAddTask}>
                Criar <PlusCircle size={20} />
            </button>
        </div>
    )
}