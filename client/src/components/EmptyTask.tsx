import ClipboardImg from '../assets/clipboard.png';
import styles from './EmptyTask.module.css'

export function EmptyTask() {
    return (
        <div className={styles.content}>
            <img src={ClipboardImg} alt="Clipboard" />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}