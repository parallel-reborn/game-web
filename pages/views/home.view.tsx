import type {NextPage} from 'next'
import Image from "next/image"
import BackgroundHome from "../../resources/background-home.jpg"

const HomeView: NextPage = () => {
    return <div>
        <Image src={BackgroundHome} layout="responsive"/>
        <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
    </div>
}

export default HomeView