'use client'
import styles from '../styles/components/Portfolio.module.scss'
import SmallButton from './SmallButton'
import SmallButtonDark from './SmallButtonDark'
import Button from './Button'
import CustomSlider from './CustomSlider'
import React, { useRef, useCallback } from 'react';
import ButtonPortfolio from './ButtonPordfolio'

const Portfolio = () => {

    const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
    }, []);

    return (
        <section id='section3' className={styles['portfolio']}>
            <div className='container'>
                <div className={styles['scroll-button']}>
                    <div className={styles['line-button']}></div>
                    <div className={styles['small-button-3']}><SmallButton   /></div>
                    <div className={styles['small-button-4']} onClick={() => scrollToSection('section4')}><SmallButtonDark  /></div>
                    <div className={styles['small-button-5']} onClick={() => scrollToSection('section5')}><SmallButtonDark  /></div>
                </div>
                <div className={styles["portfolio__inner"]}>
                    <div className={styles['portfolio__container']}>
                        <div className={styles['portfolio__columnLeft']}>
                            <div className={styles['section-title']}><h2 className='section-title'>Наше портфолио</h2>
                                <p className='section-text'>В данном партфолио вы сможете увидеть кейсы наших работ на 2022 - 2023 год</p>
                            </div>
        
                           <div className={styles['portfolio__button']}> <ButtonPortfolio  title='Компьютерные версии' width='auto'/></div>
                        </div>
                        
                        <div className={styles['portfolio__columnRight']}>
                            <CustomSlider/>
        
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </section>
    )
}

export default Portfolio

