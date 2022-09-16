import ActiveLink from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const Navbar = () => {
    return (
        <nav className={ styles['container-nav'] }>
            {
                menuItems.map(item => (
                    <ActiveLink text={item.text} href={item.href} key={item.href} />
                ))
            }
        </nav>
    )
}

export default Navbar