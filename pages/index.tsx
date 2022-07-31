import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import BackgroundHome from "../resources/background-home.jpg"
import Title from "../resources/title.png"
import {Box, Button} from "@mui/material"
import {useRouter} from "next/router"

const Home: NextPage = () => {
    const router = useRouter()

  return (
    <div className="container">
      <Head>
        <title>Reborn</title>
        <meta name="description" content="Reborn.io" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
          <div style={{}}>
              <Image src={BackgroundHome} layout="responsive"/>
              <div style={{
                  position: "absolute",
                  left: "33%",
                  width: "27%",
                  top: "3%"
              }}>
                  <Image src={Title}/>
              </div>
          </div>
          <Box textAlign="center">
              <Button variant="text" onClick={() => router.push('/game')}>Play Game!</Button>
          </Box>
      </main>

      <footer>
        <a href="https://github.com/parallel-reborn" target="_blank" rel="noopener noreferrer">
          Powered by Reborn.io
        </a>
      </footer>
    </div>
  )
}

export default Home
