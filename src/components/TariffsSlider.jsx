

'use client';

import React, { useState, useRef } from 'react';
import styles from '../styles/components/TariffsSlider.module.scss';
import Button from './Button';
import { slides } from '../../public/data/slidesData.js';

const slidesToShow = 3; // Количество слайдов для отображения одновременно

const TariffsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWrapperRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles['slider-container']}>
      <div className={styles['slider']}>
        <button className={styles['prev-arrow']} onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"/>
          </svg>
        </button>
        <div className={styles['slider-wrapper']} ref={sliderWrapperRef}>
          <div
            className={styles['slider-content']}
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${slides.length * (100 / slidesToShow)}%`
            }}
          >
            {slides.map((slide, index) => (
              <div className={styles['slide']} key={index}>
                <div className={styles['slide__content']}>
                  <h3 className={styles['slide__title']}>{slide.title}</h3>
                  <p className={styles['slide__text']}>{slide.text}</p>
                </div>
                <footer className={styles['slide__footer']}>
                  <div className={styles['slide__price']}>
                    <p className={styles['slide__tariff']}>{slide.tariff}</p>
                    <p className={styles['slide__deadline']}>{slide.deadline}</p>
                  </div>
                  <Button title='Подробнее' width='146px'/>
                </footer>
              </div>
            ))}
          </div>
        </div>
        <button className={styles['next-arrow']} onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TariffsSlider;
