import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment () {
    return (
    <div className={styles.comment}>
        <Avatar src='https://github.com/pacnnunes.png' alt=""/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Pedro Nunes</strong>
                        <time title='19 de setembro às 10:40h' dateTime='19/09/2024 10:40:25'>Cerca de 2h</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={22} />
                    </button>
                </header>

                <p>Muito bom, parabéns!</p>

            </div>

        <footer>
        <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
        </button>
        </footer>

        </div>

    </div>
    )
}