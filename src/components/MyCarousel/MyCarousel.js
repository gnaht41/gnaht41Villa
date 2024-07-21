import React, { useState, useEffect } from 'react';
import styles from './MyCarousel.module.css';

import banner1 from '../../assets/images/banner-01.jpg';
import banner2 from '../../assets/images/banner-02.jpg';
import banner3 from '../../assets/images/banner-03.jpg';

const images = [
    { src: banner1, caption: 'HURRY ! GET THE BEST VILLA FOR YOU.' },
    { src: banner2, caption: 'BE QUICK ! GET THE BEST VILLA IN TOWN.' },
    { src: banner3, caption: 'ACT NOW ! GET THE HIGHEST LEVEL PENTHOUSE.' },
];

const MyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            className={styles.carouselImage}
                        />
                        <div className={styles.caption}>{image.caption}</div>
                    </div>
                ))}
            </div>
            <button className={`${styles.carouselControl} ${styles.prev}`} onClick={prevSlide}>
                ‹
            </button>
            <button className={`${styles.carouselControl} ${styles.next}`} onClick={nextSlide}>
                ›
            </button>
            <div className={styles.carouselIndicators}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default MyCarousel;