import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx';


export default function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>      
          <Post 
            author='Jaqueline Mara'
            content='Alguma coisa aleatória'
          />
          <Post
            author="Otávio Henrique"
            content="Mais uma coisa aleatória"
          />
      </main>
      </div>

    </div>
  )
}

