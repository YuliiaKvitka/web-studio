import Image from 'next/image'
import styles from '../styles/components/Contacts.module.scss'
import ContactForm from './ContactForm'
import FormValidate from './FormValidate'

const Contacts = () => {
    return (
        <section id='section5' className={styles['contacts']}>
            <div className={styles["contacts__inner"]}>
                <div className='container'>
                    <div className={styles["contacts__container"]}>
    
                        <h2 className={styles['contacts__title']}>Оставь заявку</h2>
    
                        {/* <ContactForm/> */}
                        <div className={styles['contacts__form']}><FormValidate/></div>
    
                        <Image className={styles['contacts__img1']} src='/iPhone.png' alt='' width={270} height={529} loading='lazy'/>
                        <Image className={styles['contacts__img2']} src='/sms1.png' alt='' width={213} height={58} loading='lazy'/>
                        <Image className={styles['contacts__img3']} src='/sms2.png' alt='' width={213} height={58} loading='lazy'/>
    
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Contacts
