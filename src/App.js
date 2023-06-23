import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img
          src="https://res.cloudinary.com/andrebraga7/image/upload/v1687535779/logo_j8yrk1.jpg"
          alt="where to logo"
          className={styles.Logo}
        ></img>
      </header>
    </div>
  );
}

export default App;
