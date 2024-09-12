import styles from "../pages/css/signup.module.css";

const SignUp = function() {
    
    const submitHandler = function(event) {
        event.preventDefault();
    }

    return (
        <>
            <div className={styles.containerBg}>
                <div className={styles.container}>
                <h1 id={styles.heading}>Create your account</h1>
                    <form id={styles.form}>
                        <input id={styles.input} type="text" placeholder="Username" required/>
                        <input id={styles.input} type="email" placeholder="username@example.com" required />
                        <input id={styles.input} type="password" placeholder="Set your password" required />
                        <input id={styles.input} type="password" placeholder="Confirm Password" required/>
                        <button id={styles.button} type="submit" onClick={submitHandler}>Create Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;