import Link from 'next/link'
import DarkLayout from '../layouts/DarkLayout'
import MainLayout from '../layouts/MainLayout'

export default function AboutPage() {
    return (
        <>
            <h1 className='text-2xl'>About Page</h1>

            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Usted se encuentra en{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </>
    )
}

AboutPage.getLayout = function getLayout(page){
    return (
        <MainLayout page="About">
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}