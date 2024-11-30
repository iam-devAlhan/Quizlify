import styles from "../pages/css/signup.module.css";
import styled from "styled-components";
import { auth, db } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 10px;
    color: #000;
    gap: 5%;
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

const SignUp = function() {
    const navigateTo = useNavigate();
    const defaultUser = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
        isTeacher: false,
        isStudent: false,
        createdAt: null
    }
    const [user, setUser] = useState(defaultUser);
    const [isSubmitted, setIsSubmitted] = useState("Create Account!");
    const [errorMsg, setErrorMsg] = useState(null);
    const usersCollection = collection(db, "users");
    const addUserDetails = async function() {
        try {
            await addDoc(usersCollection, {
                username: user.username,
                isAdmin: user.isAdmin,
                isTeacher: user.isTeacher,
                isStudent: user.isStudent,
                createdAt: Timestamp.now()
            })
        } catch (error) {
            console.error(error);
        }
    }
    const createUserAccount = async (email, password) => {
        try {
            setIsSubmitted("Creating!!");
            await createUserWithEmailAndPassword(auth, email, password);
            addUserDetails();
            navigateTo("/login");
        } catch (error) {
            console.error(error);
        }
    }
    
    const submitHandler = function(event) {
        event.preventDefault();
        const data = user;
        if ((data.password !== data.confirmPassword)) {
            setErrorMsg(' Passwords does not match!!');
        }
        else if ((data.email.trim() == "" || data.username.trim() == "")) {
            setErrorMsg(' Fields are empty!')
        }
        else {
            createUserAccount(data.email, data.password);
        }
        setUser(defaultUser);
    }
    const onChangeHandler = function(e) {
        setUser((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const onChangeHandlerWithCheckedProps = function (e) {
        const getUserCondition = e.target.getAttribute('cond');
        setUser((prev) => {
            switch (getUserCondition) {
                case "isTeacher":
                    return {...prev, isTeacher: true, isAdmin: false, isStudent: false}
                case "isStudent":
                    return {...prev, isStudent: true, isTeacher: false, isAdmin: false}
                default:
                    return {...prev}
            }
        })
    }

    return (
        <>
            <div className={styles.containerBg}>
                <div className={styles.container}>
                <h1 id={styles.heading}>Create your account</h1>
                    <form id={styles.form}>
                        <input id={styles.input} type="text" name="username" placeholder="Username" required  onChange={(e) => onChangeHandler(e)}/>
                        <input id={styles.input} type="email" name="email" placeholder="username@example.com" required onChange={(e) => onChangeHandler(e)}/>
                        <input id={styles.input} type="password" name="password" placeholder="Set your password" required onChange={(e) => onChangeHandler(e)}/>
                        <input id={styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={(e) => onChangeHandler(e)}/>
                        <label>Your Role</label>
                        <RowContainer>
                            <label>Teacher</label>
                            <input type="radio" name="role" value="teacher" cond="isTeacher" checked={user.isTeacher} onChange={(e) => onChangeHandlerWithCheckedProps(e)}/>
                            <label>Student</label>
                            <input type="radio" name="role" value="student" cond="isStudent" checked={user.isStudent} onChange={(e) => onChangeHandlerWithCheckedProps(e)}/>
                        </RowContainer>
                        {errorMsg !== null && (
                            <>
                            <ErrorMsg>
                            <i class="bi bi-exclamation-circle-fill"></i> {errorMsg}
                            </ErrorMsg>
                            </>
                        )}
                        
                        <button id={styles.button} type="submit" onClick={submitHandler}>{isSubmitted}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;
