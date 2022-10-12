import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guidantas28.png',
      name: 'Guilherme Dantas',
      role: 'Student'

    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/guidantas28.png',
      name: 'Guilherme Dantas',
      role: 'Student'

    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-04-10 20:00:00')
  },
];



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
             return (
              <Post key={post}
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


// key = informação única do que está sendo recebido