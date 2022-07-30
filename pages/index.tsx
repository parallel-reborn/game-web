import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeView from "./views/home.view"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reborn</title>
        <meta name="description" content="Reborn.io" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <HomeView/>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/parallel-reborn" target="_blank" rel="noopener noreferrer">
          Powered by Reborn.io
        </a>
      </footer>
    </div>
  )
}

export default Home
