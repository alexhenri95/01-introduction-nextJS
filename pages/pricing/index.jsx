import Link from 'next/link'
import MainLayout from '../../layouts/MainLayout'

export default function PricingPage() {
    return (
        <MainLayout page="Contact">
            <h1 className='text-2xl'>Pricing Page</h1>

            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Usted se encuentra en{' '}
                <code className={'code'}>pages/pricing/index.js</code>
            </p>
        </MainLayout>
    )
}