import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

import styles from "./Layout.module.scss"

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
