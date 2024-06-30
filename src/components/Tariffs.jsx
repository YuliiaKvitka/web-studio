
'use client'
import styles from '../styles/components/Tariffs.module.scss'
import React, { useRef, useCallback } from 'react';
import SmallButton from './SmallButton';
import SmallButtonDark from './SmallButtonDark';
import TariffsSlider from './TariffsSlider';


const Tariffs = () => {

      const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
    }, []);
    
    return (
        <section id='section4' className={styles['tariffs']}>
            <div className='container'>
                <div className={styles['scroll-button']}>
                    <div className={styles['line-button']}></div>
                    <div className={styles['small-button-4']}><SmallButton/></div>
                    <div className={styles['small-button-5']} onClick={() => scrollToSection('section5')}><SmallButtonDark/></div>
                </div>
    
                <div className={styles["tariffs__inner"]}>
                    
                    <div className={`${styles['section-title']} `}><h2 className='section-title centered'>Тарифы</h2>
                        
                        <TariffsSlider/>
                            
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Tariffs
