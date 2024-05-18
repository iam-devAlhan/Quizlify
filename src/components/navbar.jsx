import styles from './css/nav.module.css';


const Navbar = function () {
    return (
        <>
            <header>
                <nav>
                    <div className={styles.container}>
                    <h1>LOGO</h1>
                        <ul>
                            <li><a>FAQ</a></li>
                            <li><a>Donate Us</a></li>
                            <li><a>Sign in</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )


}



export default Navbar;