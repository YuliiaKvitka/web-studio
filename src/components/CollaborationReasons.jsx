'use client'

import Image from 'next/image'
import styles from '../styles/components/CollaborationReasons.module.scss'
import ButtonShadow from './ButtonShadow'
import SmallButton from './SmallButton'
import SmallButtonDark from './SmallButtonDark'
import React, { useRef, useCallback } from 'react';
import CollaborationReasonsList from './CollaborationReasonsList'

const CollaborationReasons = () => {

    const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
    }, []);
    return (
        <section id='section2' className={styles['collaboration-reasons']}>

            <div className='container'>
                <div className={styles['scroll-button']}>
                    <div className={styles['line-button']}></div>
                    {/* <div className={styles['small-button-1']}><SmallButton  /></div> */}
                    <div className={styles['small-button-2']}  ><SmallButton   /></div>
                    <div className={styles['small-button-3']} onClick={() => scrollToSection('section3')}><SmallButtonDark  /></div>
                    <div className={styles['small-button-4']} onClick={() => scrollToSection('section4')}><SmallButtonDark  /></div>
                    <div className={styles['small-button-5']} onClick={() => scrollToSection('section5')}><SmallButtonDark  /></div>
                </div>

                <div className={styles['offer-mobile']}>
                    <div className={styles['offer-mobile__text']}>Работаем в сфере web-разработки более 3-х лет</div>
                    <div className={styles['offer-mobile__text']}>В нашей команде находятся лучшие исполнители</div>
                </div>
    
                <div className={styles['collaboration-reasons__inner']}>
    
                    <div className={styles['collaboration-reasons__container']}>
                        <div className={styles['collaboration-reasons__columnLeft']}>
                            <div className={styles['section-title']}><h2 className='section-title'>Причины<br /> сотрудничать с нами</h2>
                                <p className={`${styles['section__text']} section-text`}>Вы можете посмотреть на сайты конкурентов где они кричат что лучшие, пока они только говорят от этом - мы говорим языком фактов</p>
                                <p className={`${styles['section__text']} section-text`}>Вы можете за пару минут прочитать о нас информацию, а так же после этого посмотреть наше портфолио</p>

                                <p className={`${styles['section__text-mobile']} section-text`}>Вы можете ознакомиться с информацией о нас и посмотреть наше портфолио</p>
                            </div>
        
                            <div className={styles['collaboration-reasons__button']}><ButtonShadow/></div>
                        </div>
                        
                        <div className={styles['collaboration-reasons__columnRight']}>
                            <div className={styles['collaboration-reasons__wrapper']}>
                                <h3 className={styles['card__caption']}>Приемлeмые цены </h3>
                                <p className={styles['card__text']}>Мы максимально стараемся снизить цены на нашу работу для того чтобы цены не кусались</p>
        
                                <div className={styles['card__image']}>
                                    <Image src='/assets/collaborations-reasons/money.png' alt='' width={211} height={211} loading='lazy' />
                                </div>
                            </div>
        
                        </div>
                    </div>
    
                    <CollaborationReasonsList/>
                    
                </div>
            
            </div>
        </section>
    )
}

export default CollaborationReasons
