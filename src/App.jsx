import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx';


//'👉 <a href=''>jane.design/doctorcare</a>',
//'<a href=''>#novoprojeto</a> <a href=''>#nlw</a> <a href=''>#rocketseat</a>'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jaquelinemarasf.png',
      name: 'Jaqueline Mara',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-09-19 19:36:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pacnnunes.png',
      name: 'Pedro Nunes',
      role: 'QA Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-09-20 17:36:00'),
  }

]


export default function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>      
          {posts.map(post => {
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })} 
      </main>
      </div>

    </div>
  )
}

