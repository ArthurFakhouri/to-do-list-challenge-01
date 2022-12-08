import styles from './Tasks.module.css';
import { Trash } from 'phosphor-react'

interface Task {
    content: string;
    isDone: boolean;
}

interface TaskProps {
    tasks: Task[];
    updateTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
}

export function Tasks({ tasks, updateTask, deleteTask }: TaskProps) {

    function handleChangeStateTask(task: Task) {
        updateTask(task);
    }

    function handleDeleteTask(task: Task) {
        deleteTask(task);
    }

    return (
        <div className={styles.tasks}>
            {tasks.map((task, index) =>
                <div className={styles.task} key={task.content + index}>
                    <label className={styles.container}
                    >
                        {task.content}
                        <input type="checkbox" checked={task.isDone} onChange={() => handleChangeStateTask(task)} />
                        <span className={styles.checkmark}></span>
                    </label>
                    <button onClick={() => handleDeleteTask(task)}>
                        <Trash size={18} />
                    </button>
                </div>
            )}
        </div>
    )
}