import { useState } from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false)
    const showFooterHandle = () => {
        setShowFooter(!showFooter)
    }
    let footerStyle

    showFooter
        ? (footerStyle = styles.footerSmall)
        : (footerStyle = `${styles.footerSmall} ${styles.footerFull}`)

    return (
        <footer className={footerStyle}>
            <div onClick={showFooterHandle}>Test button</div>
        </footer>
    )
}

export default Footer
