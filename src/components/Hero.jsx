'use client'

import Image from 'next/image';
import styles from '../styles/components/Hero.module.scss';
import Button from './Button';
import SmallButton from './SmallButton';
import SmallButtonDark from './SmallButtonDark';
import React, { useRef, useCallback } from 'react';
import Ellipse from './Ellipse';

const Hero = () => {

    const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
    }, []);
    return (
        <section className={styles.hero}>

            <div className='container'>
                <div className={styles['scroll-button']}>
                    <div className={styles['line-button']}></div>
                    <div className={styles['small-button-1']} ><SmallButton  /></div>
                    <div className={styles['small-button-2']} onClick={() => scrollToSection('section2')}><SmallButtonDark   /></div>
                    <div className={styles['small-button-3']} onClick={() => scrollToSection('section3')}><SmallButtonDark  /></div>
                    <div className={styles['small-button-4']} onClick={() => scrollToSection('section4')}><SmallButtonDark  /></div>
                    <div className={styles['small-button-5']} onClick={() => scrollToSection('section5')}><SmallButtonDark  /></div>
                </div>
            <div className={styles.hero__inner}>
                <div className={styles.hero__columnLeft}>
                <div className={styles.hero__title}>
                    <h1 className={`${styles.hero__titleText} hero-title`}>
                    РАЗРАБОТКА САЙТОВ<br /><span className={styles.hero__titleText}>ДЛЯ ТВОЕГО БИЗНЕСА</span>
                    </h1>
                    <div className={styles.hero__text}>
                    <p className={`${styles.hero__textParagraph} hero-text`}>
                        Мы - студия web-разработки, работаем уже более 3-х лет, готовы разработать для вас сайт в кротчайшие сроки.
                                </p>
                    <p className={`${styles.hero__textParagraph} ${styles['hero__textParagraph-mobile']} hero-text`}>Мы web-студия которая работает уже больше 3-х лет</p>
                    </div>
                </div>
                        <Button title='Подробнее  &#32;  &#5171;' className={styles.hero__button}
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
                        }}/>
                <a href="##" className={styles.hero__link}>Остались вопросы?</a>
                </div>
    
                <div className={styles.hero__columnRight}>
                <Ellipse/>
                <Image 
                    src='/assets/hero/hero-img.png' 
                    alt='' 
                    width={663} 
                    height={844} 
                    loading='lazy'
                    className={styles.hero__image}
                />
                </div>
                </div>
                
            </div>
        </section>
    );
    }

export default Hero;
