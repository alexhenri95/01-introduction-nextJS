import Link from 'next/link'
import MainLayout from '../layouts/MainLayout'

export default function ContactPage() {
    return (
        <MainLayout page="Contact">
            <h1 className='text-2xl'>Contact Page</h1>

            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Usted se encuentra en{' '}
                <code className={'code'}>pages/contact.js</code>
            </p>
        </MainLayout>
    )
}