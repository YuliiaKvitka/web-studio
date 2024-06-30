import Link from 'next/link'
import styles from '../styles/components/Menu.module.scss'

const Menu = () => {
    return (
        <nav className={styles["menu"]}>
                <li className={`${styles['menu__item']} menu-title`}><Link className={styles['menu__link']} href='/'>Главная</Link></li>
                <li className={`${styles['menu__item']} menu-title`}><Link className={styles['menu__link']} scroll={true}   href='#section2'>Почему именно мы?</Link></li>
                <li className={`${styles['menu__item']} menu-title`}><Link className={styles['menu__link']} scroll={true}  href='#section5'>Контакты</Link></li>
        </nav>
    )
}

export default Menu

