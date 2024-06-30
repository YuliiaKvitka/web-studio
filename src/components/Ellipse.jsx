import styles from '../styles/components/Ellipse.module.scss'

const Ellipse = () => {
    return (
        <div className={styles.ellipseContainer}>
                    <div className={`${styles.ellipse} ${styles.ellipse1}`}></div>
                    <div className={`${styles.ellipse} ${styles.ellipse2}`}></div>
                    <div className={`${styles.ellipse} ${styles.ellipse3}`}></div>
                </div>
    )
}

export default Ellipse
