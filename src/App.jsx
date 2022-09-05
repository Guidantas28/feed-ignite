import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Dantas"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quam fuga magnam pariatur culpa, aut ipsam eos nostrum ex a, repudiandae reiciendis nam. Nisi commodi mollitia iusto nihil maxime itaque."
          />
          <Post
            author="Guilherme Dantas"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quam fuga magnam pariatur culpa, aut ipsam eos nostrum ex a, repudiandae reiciendis nam. Nisi commodi mollitia iusto nihil maxime itaque."
          />
        </main>
      </div>
    </div>
    
  )
}


