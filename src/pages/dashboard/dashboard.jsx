import { useState } from "react";
import styles from "../css/dashboard.module.css";
import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {

    const [isSidebarOn, setIsSidebarOn] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setIsDarkTheme(prev => !prev);
    }
    const clickToggleSidebar = function() {
            setIsSidebarOn(prev => !prev);
    }

    return (
        <>
        <div className={styles.container}>
            {/* For Sidebar */}
            <div className={styles.sidebar} style={{width: isSidebarOn ? "230px" : "70px", backgroundColor: isDarkTheme ? "#b3b3b3" : "#121212"}}>
                <button id={styles.btn} onClick={clickToggleSidebar}><i className="bi bi-list"></i></button>
                <ul className={styles.menuList} style={{display: isSidebarOn ? "block" : "none", }}>
                    <Link to="your_activity" style={{color: !isDarkTheme ? "white" : "#171717", textDecoration: "none"}}><li className={styles.menuItem}><i className="bi bi-house-fill"></i> Home</li></Link>
                    <Link style={{color: !isDarkTheme ? "white" : "#171717", textDecoration: "none"}} to="groups"><li className={styles.menuItem}><i className="bi bi-people-fill"></i> Groups</li></Link>
                    <Link style={{color: !isDarkTheme ? "white" : "#171717", textDecoration: "none"}} to="workspace"><li className={styles.menuItem}><i className="bi bi-person-workspace"></i> Workspace</li></Link>
                    <Link style={{color: !isDarkTheme ? "white" : "#171717", textDecoration: "none"}} to="grades"><li className={styles.menuItem}><i className="bi bi-award-fill"></i> Your Grades</li></Link>   
                </ul>
                <ul className={styles.propList} style={{display: isSidebarOn ? "block" : "none", color: !isDarkTheme ? "white" : "#171717"}}>
                    <li className={styles.propItem}><i className="bi bi-person-circle"></i> <span style={{fontSize: "15px"}}>Profile</span></li>
                    <li className={styles.propItem}><i className="bi bi-chat-square"></i> <span style={{fontSize: "15px"}}>Notifications</span></li>
                    <li className={styles.propItem}><i className="bi bi-box-arrow-left"></i> <span style={{fontSize: "15px"}}>Logout</span></li>
                </ul>
            </div>
              
            {/* For Main Content */}
            <main id={styles.mainContent} style={{backgroundColor: isDarkTheme ? "white" : "#171717", color: isDarkTheme ? "#171717" : "white"}}>
                <div style={{padding: "2%", display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "left"}}>
                <button id={styles.themeToggler}  onClick={toggleDarkTheme}><i className={isDarkTheme ? "bi bi-moon-stars-fill" : "bi bi-sun-fill"}></i></button>
                </div>
            
                <Outlet />
            </main>
        
        </div>

        
        </>
    )
}