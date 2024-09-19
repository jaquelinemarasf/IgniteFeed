import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';

export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1726121678240-9126d5017990?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
       
        <div className={styles.profile}>
            <Avatar 
             src='https://github.com/jaquelinemarasf.png' />

            <strong>Jaqueline Mara</strong>
            <span>Web Developer</span>
        </div>
       
        <footer>
            <a href='#'>
                <PencilSimpleLine size={20} />
                Editar seu perfil
            </a>
        </footer>

       </aside>
    );
}