import styles from './css/section.module.css';
import image from '../assets/VIRTUAL-EXAM-2.png'
const Section = function() {
    return (
        <>
            <main>
                <section>
                        <div className={styles.title}>
                            Online Examination Portal <br />for Students and Teachers
                            <button>Get Started</button>
                        </div>
                       
                        <div className={styles.circle}> <img src={image} alt='some-picture' width="500" height="500"/></div>
                </section>
            </main>
    
        </>
    )
}

export default Section;