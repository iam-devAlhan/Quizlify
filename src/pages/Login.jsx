import styles from "../pages/css/signup.module.css";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../context/Auth-Context";

const LoadingBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgb(0, 31, 46);
    color: yellow;
`
const ErrorMsg = styled.div`
     display: flex;
    align-item: center;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0px;
    gap: 10px;
    justify-content: center;
    color: red;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-weight: bold;

    &: hover {
        color: white;
        background-color: red;
    }
`
const Login = function() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [signinStatus, setSigninStatus] = useState("Log in")
    const newUser = {
        username: "",
        email: "",
        password: ""
    }
    const [user, setUser] = useState(newUser);
    const [error, setError] = useState(null);
    const onChangeHandler = function(e) {
        const {name, value} = e.target;
        setUser((prev) => {
            return {...prev, [name] : value}
        })
    }
    const loginHandler = async(email, password) => {
      
        
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            if (user && auth.currentUser) {
                navigate("/home/your_activity", {replace: true});
            }
         }
        catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    setError("User not found!!")
                    break;
                case "auth/invalid-password":
                    setError("Invalid password, please try again!")
                    break;
                case "auth/invalid-email":
                    setError("Invalid Email, try again!")
                    break;
                case "auth/uid-already-exists":
                    setError("User already exists!")
                    break;
                case "auth/invalid-credential":
                    setError("Invalid Email and Password!")
                    break;
                default:
                    setError("Internal Error! 400")
                    break;
            }
        }
        
    }
    const submitHandler = function(event) {
        event.preventDefault();
        const userdata = user;
        if (userdata.email.trim() == "" || userdata.username.trim() == "" || userdata.password.trim() == "") {
            setError("Please provide full information!")
        }
        else {
            setSigninStatus("Logging in..")
            setTimeout(() => loginHandler(userdata.email, userdata.password), 3000);
        }
    }
    return (
        <>
            <div className={styles.containerBg}>
                <div className={styles.container}>
                <h1 id={styles.heading}>Login into your account</h1>
                    <form id={styles.form}>
                        <input id={styles.input} type="text" name="username" placeholder="Username" required onChange={(e) => onChangeHandler(e)}/>
                        <input id={styles.input} type="email" name="email" placeholder="username@example.com" required onChange={(e) => onChangeHandler(e)}/>
                        <input id={styles.input} type="password" name="password" placeholder="Enter your password" required onChange={(e) => onChangeHandler(e)}/>
                        <button id={styles.button} type="submit" onClick={submitHandler}>{signinStatus}</button>
                    </form>
                    {error !== "" && (
                        <ErrorMsg>
                            {error}
                        </ErrorMsg>
                    )}
                </div>
            </div>
        </>
    )
}

export default Login;