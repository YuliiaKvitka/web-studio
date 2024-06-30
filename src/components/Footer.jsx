import Link from 'next/link'
import styles from '../styles/components/Footer.module.scss'
import Image from 'next/image'
import StarGradient from '../../public/assets/soc1als/Star.svg';
import Star from './Star';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      {/* <div className="container"> */}
        <div className={styles['footer__inner']}>
          <div className={styles['footer__wrapper']}>

            <h2 className={styles['footer__title']}> Контакты</h2>

              <div className={styles['footer__star-container1']}>
                    <Star/>
              </div>
            
              <div className={styles['footer__star-container2']}>
                      <Star/>
              </div>
            
              <div className={styles['footer__star-container3']}>
                      <Star/>
              </div>
            
              <div className={styles['footer__star-container4']}>
                    <Star/>
            </div>
            
          </div>

          <div className={styles['footer__soc1als']}>
            <Link  className={styles['footer__link']} href='##'>
              <Image src='/assets/soc1als/chat.svg' width={50} height={37} loading='lazy' />
            </Link>
            <Link className={styles['footer__link']} href='##'>
              <Image src='/assets/soc1als/behance.svg' width={49} height={49} loading='lazy' />
            </Link>
            <Link className={styles['footer__link']} href='##'>
              <Image src='/assets/soc1als/telegram.svg' width={43} height={40} loading='lazy' />
            </Link>
            <Link className={styles['footer__link']} href='##'>
              <Image src='/assets/soc1als/email.svg' width={49} height={46} loading='lazy' />
            </Link>
          </div>
        </div>
      {/* </div> */}
      
    </footer>
  )
}

export default Footer
