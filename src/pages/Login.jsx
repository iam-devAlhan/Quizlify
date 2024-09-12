import styles from "../pages/css/signup.module.css";
const Login = function() {
    const submitHandler = function(event) {
        event.preventDefault();
    }
    return (
        <>
            <div className={styles.containerBg}>
                <div className={styles.container}>
                <h1 id={styles.heading}>Login into your account</h1>
                    <form id={styles.form}>
                        <input id={styles.input} type="text" placeholder="Username" required/>
                        <input id={styles.input} type="email" placeholder="username@example.com" required />
                        <input id={styles.input} type="password" placeholder="Enter your password" required />
                        <button id={styles.button} type="submit" onClick={submitHandler}>Sign In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;