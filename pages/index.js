import Link from 'next/link'
import MainLayout from '../layouts/MainLayout'

export default function HomePage() {
  return (
      <MainLayout page="Home">
          <h1 className='text-2xl'>Home Page</h1>

          <h1 className={'title'}>
            Ir a <Link href="/about">About</Link>
          </h1>

          <p className={'description'}>
            Usted se encuentra en{' '}
            <code className={'code'}>pages/index.js</code>
          </p>
      </MainLayout>
  )
}
