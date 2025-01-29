import React, { useState, useEffect } from 'react';
import '../styling/Slider.css';
import Xbox from '../images/xboxController.png';
import Playstation from '../images/ps5Controller.png';
import Switch from '../images/switchController.png';

const Slider = ({
    images = [
        { url: Xbox, alt: 'Xbox Controller' },
        { url: Playstation, alt: 'PS5 Controller' },
        { url: Switch, alt: 'Switch Controller' }
    ],
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let intervalId;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, autoPlayInterval);
        }
        return () => clearInterval(intervalId);
    }, [isAutoPlaying, images.length, autoPlayInterval]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="slider-container"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="slider-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>

            {showArrows && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="nav-button prev-button"
                        aria-label="Previous slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="nav-button next-button"
                        aria-label="Next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </>
            )}

            {showDots && (
                <div className="dots-container">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <span className="sr-only">Go to slide {index + 1}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slider;