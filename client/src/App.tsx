import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css';
import { NewTask } from "./components/NewTask";
import { TaskContent } from "./components/TaskContent";
import { useState } from "react";

interface Task {
  content: string;
  isDone: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(content: string) {
    const task = { content, isDone: false };

    setTasks((tasks) => [...tasks, task]);
  }

  function updateTask(updatedTask: Task) {
    setTasks(tasks.map(task => {
      if (task === updatedTask)
        return { ...updatedTask, isDone: !updatedTask.isDone };
      return task;
    }));
  }

  function deleteTask(taskToBeDeleted: Task) {
    const tasksWithoutDeletedOne = tasks.filter(task => task !== taskToBeDeleted);

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.content}>
        <div className={styles.tasks}>
          <NewTask onAddTask={addTask} />
          <TaskContent tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
        </div>
      </div>
    </div>
  )
}

export default App
