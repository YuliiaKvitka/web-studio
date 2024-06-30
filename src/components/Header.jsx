import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
import Logo from './Logo'
import Button from './Button'
import Menu from './Menu'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className={styles["header__inner"]}>
          <button type='button' className={styles['header__burger']}
          width={{
                            'mobile-portrait': '129px',
                            'mobile': '129px',
                            'mobile-landscape': '129px',
                            'tablet-portrait': '129px',
                            'tablet-landscape': '200px',
                            'desktop': '200px',
                            'large-desktop': '200px',
                            'tv': '200px'
                            }}
                        fontSize={{
                        'mobile-portrait': '11px',
                        'mobile': '11px',
                        'mobile-landscape': '11px',
                        'tablet-portrait': '14px',
                        'tablet-landscape': '19px',
                        'desktop': '19px',
                        'large-desktop': '19px',
                        'tv': '19px'
                        }}>
            <Image src={'/assets/icons/burger.png'} alt='burger' width={34} height={34}/>
          </button>
          <Logo className={['header__logo']} />
          <Menu/>
          <div className={styles['header__button']}><Button title='Заказать' width='183px'/></div>
        
      </div>
      </div>
    </header>
  )
}

export default Header
