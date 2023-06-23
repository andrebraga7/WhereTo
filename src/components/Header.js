import React from 'react'
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <img
          src="https://res.cloudinary.com/andrebraga7/image/upload/v1687535779/logo_j8yrk1.jpg"
          alt="where to logo"
          className={styles.Logo}
        ></img>
        <h1 className={styles.LogoH1}>WhereTo?</h1>
      </header>
    </div>
  )
}

export default Header