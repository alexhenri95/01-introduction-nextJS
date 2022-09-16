import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from './Layout.module.css'

const MainLayout = ({children, page}) => {
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