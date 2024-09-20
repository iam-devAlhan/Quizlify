import { useState } from "react";
import styles from "../pages/css/dashboard.module.css";

export default function Dashboard() {

    const [isSidebarOn, setIsSidebarOn] = useState(false);
    
    const clickToggleSidebar = function() {
            setIsSidebarOn(prev => !prev);
    }

    return (
        <>
        <div className={styles.container}>
            {/* For Sidebar */}
            <div className={styles.sidebar} style={{width: isSidebarOn ? "230px" : "70px"}}>
                <button id={styles.btn} onClick={clickToggleSidebar}><i className="bi bi-list"></i></button>
                <ul className={styles.menuList} style={{display: isSidebarOn ? "block" : "none"}}>
                    <li className={styles.menuItem}><i className="bi bi-house-fill"></i> Home</li>
                    <li className={styles.menuItem}><i className="bi bi-people-fill"></i> Groups</li>
                    <li className={styles.menuItem}><i className="bi bi-person-workspace"></i> Workspace</li>
                    <li className={styles.menuItem}><i className="bi bi-award-fill"></i> Your Grades</li>   
                </ul>
                <ul className={styles.propList} style={{display: isSidebarOn ? "block" : "none"}}>
                    <li className={styles.propItem}><i className="bi bi-person-circle"></i> <span style={{fontSize: "15px"}}>Profile</span></li>
                    <li className={styles.propItem}><i className="bi bi-chat-square"></i> <span style={{fontSize: "15px"}}>Notifications</span></li>
                    <li className={styles.propItem}><i className="bi bi-box-arrow-left"></i> <span style={{fontSize: "15px"}}>Logout</span></li>
                </ul>
            </div>
              
            {/* For Main Content */}
            <main id={styles.mainContent}>
                <div>
                    <h1>Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem doloremque sint distinctio, totam, quibusdam dignissimos mollitia corporis repellendus voluptatum quis odio illum, veniam aut optio necessitatibus! Aliquid, expedita nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure harum illo consequatur perspiciatis reiciendis animi quos dolores sequi, culpa quae facilis deserunt et ducimus maxime aspernatur eius placeat qui!</p>
                </div>
            </main>
        
        </div>

        
        </>
    )
}