'use client'
import styles from './page.module.css'
import homestyle from '../styles/home.module.css'
import Movielist from '@/components/movielist'

export default  async function Home() {

  return (
    <main className={styles.main}>
    <nav className={`${homestyle.navbar}`}>
      <h1>
        MovieDB
      </h1>
    </nav>
    <section className='movies_section'>
    <Movielist/>
    </section>
    </main>
  )
}
