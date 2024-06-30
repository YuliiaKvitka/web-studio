import styles from '../styles/components/Star.module.scss'

const Star = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['star']}>
            <defs>
                <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="rgb(46, 236, 197)" />
                    <stop offset="100%" stopColor="rgb(15, 130, 106)" />
                </radialGradient>
            </defs>
                <path d="M18.81 18.81L30 15L18.81 11.18L15 0L11.18 11.18L0 15L11.18 18.81L15 30L18.81 18.81ZM15 26.9L18.03 18.03L26.9 15L18.03 11.96L15 3.09L11.96 11.96L3.09 15L11.96 18.03L15 26.9Z" fill="url(#starGradient)" />
        </svg>
    )
}

export default Star
