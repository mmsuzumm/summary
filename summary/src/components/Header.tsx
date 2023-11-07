import { Link } from "react-router-dom"

import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
