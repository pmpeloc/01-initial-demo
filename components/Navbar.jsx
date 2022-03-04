import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map((menu) => (
        <ActiveLink key={menu.text} href={menu.href} text={menu.text} />
      ))}
    </nav>
  );
};

export default Navbar;
