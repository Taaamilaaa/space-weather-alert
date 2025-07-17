import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
