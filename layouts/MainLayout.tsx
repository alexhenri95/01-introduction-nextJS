import { FC } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from './Layout.module.css'

type PropsComponent = {
    children: React.ReactNode,
    page: React.ReactNode
}

const MainLayout: FC <PropsComponent> = ({children, page}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Introducción a NextJS | {page}</title>
                <meta name="description" content="Introduccion a nextjs con fernando herrera" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default MainLayout