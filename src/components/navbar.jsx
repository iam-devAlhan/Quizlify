import { Link } from 'react-router-dom';
import styles from './css/nav.module.css';
import { useState } from 'react';
import SignUp from '../pages/SignUp';

const Navbar = function () {
    const [navToggle, setNavToggle] = useState({isToggled: true, toggled: ''})
    
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
                            <li id={styles['nav-link']}>FAQ</li>
                            <li id={styles['nav-link']}>Donate Us</li>
                            <Link style={{color: "white", textDecoration: "none"}}to="/login" >
                            <li id={styles['nav-link']}>Login</li>
                            </Link>
                            <Link style={{color: "white", textDecoration: "none"}}to="/signup" >
                            <li id={styles['nav-link']}>Create Account</li>
                            </Link>
                            
                        </ul>
                        
                        <button id={styles.toggleNav} onClick={toggleMobileMenu}>{navToggle.isToggled ? <i className="bi bi-list"></i> : <i className="bi bi-x"></i>}</button>
                    </div>
                    
                    
                    <div className={`${styles.mobileView} ${navToggle.toggled}`}>
                        <ul>
                        <li id={styles['nav-link']}>FAQ</li>
                        <li id={styles['nav-link']}>Donate Us</li>
                        <Link style={{color: "white", textDecoration: "none"}}to="/login" >
                            <li id={styles['nav-link']}>Login</li>
                        </Link>                         
                        <Link style={{textDecoration: "none", color: "white"}}to="/signup" >
                            <li id={styles['nav-link']}>Create Account</li>
                        </Link>    
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )


}



export default Navbar;