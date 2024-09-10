import styles from './css/nav.module.css';
import { useState } from 'react';

const Navbar = function () {
    const [navToggle, setNavToggle] = useState({isToggled: false, toggled: ''})
    
    function toggleMobileMenu() {
        setNavToggle((prev) => ({
            isToggled: !prev.isToggled,
            toggled: prev.isToggled ? styles.toggler : ''
        }))
    }

    return (
        <>
            <header>
                <nav>
                    <div className={styles.container}>
                    <h1>ProcPap</h1>
                        <ul>
                            <li id={styles['nav-link']}><a>FAQ</a></li>
                            <li id={styles['nav-link']}><a>Donate Us</a></li>
                            <li id={styles['nav-link']}><a>Sign in</a></li>
                        </ul>
                        
                        <button id={styles.toggleNav} onClick={toggleMobileMenu}>{navToggle.isToggled ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>}</button>
                    </div>
                    
                    
                    <div className={`${styles.mobileView} ${navToggle.toggled}`}>
                        <ul>
                        <li id={styles['nav-link']}><a>FAQ</a></li>
                        <li id={styles['nav-link']}><a>Donate Us</a></li>
                        <li id={styles['nav-link']}><a>Sign in</a></li>                            
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )


}



export default Navbar;