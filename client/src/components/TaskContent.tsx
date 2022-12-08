import { useState } from "react";
import { EmptyTask } from "./EmptyTask";
import styles from './TaskContent.module.css';
import { Tasks } from "./Tasks";

interface Task {
    content: string;
    isDone: boolean;
}

interface TaskProps {
    tasks: Task[];
    onUpdateTask: (task: Task) => void;
    onDeleteTask: (task: Task) => void;
}

export function TaskContent({ tasks, onUpdateTask, onDeleteTask }: TaskProps) {
    return (
        <div className={styles.tasksContent}>
            <div>
                <strong className={styles.createdTaskText}>Tarefas criadas <span>{tasks.length}</span></strong>
                <strong className={styles.taskDoneText}>Concluídas
                    <span>
                        {
                            tasks.length ? `${tasks.reduce((prevValue, curValue) => {
                                if (curValue.isDone)
                                    return prevValue + 1;
                                return prevValue;
                            }, 0)} de ${tasks.length}` : tasks.length
                        }
                    </span>
                </strong>
            </div>
            {
                tasks.length ? <Tasks tasks={tasks} updateTask={onUpdateTask} deleteTask={onDeleteTask} /> : <EmptyTask />
            }
        </div>
    )
}