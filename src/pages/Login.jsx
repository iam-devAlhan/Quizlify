import styles from "../pages/css/signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = function() {
    let user = {
        name: "admin",
        password: "admin123",
        email: "admin@example.com"
    }
    const [newUser, setNewUser] = useState({
        name: "",
        password: "",
        email: ""
    })
    const navigate = useNavigate();
    const submitHandler = function(event) {
        event.preventDefault();
        if (newUser.name === user.name && newUser.email === user.email && newUser.password === user.password) {
            navigate('/home/your_activity');
        }
        else {
            alert("Wrong Credentials, try again")
        }
        
    }
    return (
        <>
            <div className={styles.containerBg}>
                <div className={styles.container}>
                <h1 id={styles.heading}>Login into your account</h1>
                    <form id={styles.form}>
                        <input id={styles.input} type="text" placeholder="Username" required onChange={(e) => setNewUser((prev) => {
                            return {...prev, name: e.target.value}
                        })}/>
                        <input id={styles.input} type="email" placeholder="username@example.com" required onChange={(e) => setNewUser((prev) => ({...prev, email: e.target.value}))}/>
                        <input id={styles.input} type="password" placeholder="Enter your password" required onChange={(e) => setNewUser((prev) => ({...prev, password: e.target.value}))}/>
                        <button id={styles.button} type="submit" onClick={submitHandler}>Sign In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;