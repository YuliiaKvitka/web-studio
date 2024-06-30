

'use client';

import React, { useState } from 'react';
import styles from '../styles/components/CustomSlider.module.scss';

const CustomSlider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const slides = [
{ src: '/assets/slider/slide-1.jpeg', alt: 'Slide 1' },
{ src: '/assets/slider/slide-2.jpeg', alt: 'Slide 2' },
{ src: '/assets/slider/slide-3.jpeg', alt: 'Slide 3' },
{ src: '/assets/slider/slide-4.jpeg', alt: 'Slide 4' },
{ src: '/assets/slider/slide-5.jpeg', alt: 'Slide 5' },
{ src: '/assets/slider/slide-6.jpeg', alt: 'Slide 6' },
{ src: '/assets/slider/slide-7.jpeg', alt: 'Slide 7' },
];

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
            <div className={styles['slider-wrapper']}>
            <div
                className={styles['slider-content']}
                style={{ transform: `translateX(-${currentIndex * (567 + 101)}px)` }}
            >
                {slides.map((slide, index) => (
                <div className={styles['slide']} key={index}>
                    <img src={slide.src} alt={slide.alt} />
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

export default CustomSlider;


