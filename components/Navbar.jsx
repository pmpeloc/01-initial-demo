import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ActiveLink href='/' text='Home' />
      <ActiveLink href='/about' text='About' />
      <ActiveLink href='/contact' text='Contact' />
    </nav>
  );
};

export default Navbar;
