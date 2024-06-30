import Link from 'next/link'
import styles from '../styles/components/Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles['logo']}>
          <Link href='/'>
            <p className={styles['logo__text']}>studio</p>
            <p className={styles['logo__subtext']}>web</p>
          </Link>
    </div>
  )
}

export default Logo
