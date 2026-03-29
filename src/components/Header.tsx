import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>To-Do List <span>v2.0</span></h1>
    </header>
  );
};

export default Header;
