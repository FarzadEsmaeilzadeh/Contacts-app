import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://react.dev">React</a> | Developed by Farzad with ❤️
      </p>
    </div>
  );
}

export default Header;
