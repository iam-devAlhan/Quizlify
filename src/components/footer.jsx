import styles from '../components/css/footer.module.css';



const Footer = () => {
    return (
        <>
            <footer>
                <ul id={styles.ul}>
                    <li id={styles.li}> <i className="bi bi-question-circle-fill"></i> Donate Us</li>
                    <li id={styles.li}> <i className="bi bi-bug-fill"></i> Report a Bug!</li>
                    <li id={styles.li}> <i className="bi bi-github"></i> Contribute your own</li>
                </ul>
                <h1>LOGO</h1>
                <div>All Copyrights &copy; by Logo 2024</div>
            </footer>
        </>
    )

}

export default Footer;