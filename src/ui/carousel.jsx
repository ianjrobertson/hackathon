import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full flex items-center justify-between p-4">
            <button
                onClick={prevSlide}
                className="bg-primary text-secondary w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-1000 hover:bg-secondary hover:text-primary">
                &#10094;
            </button>
            <div className="relative overflow-hidden rounded-lg flex-grow mx-4 flex items-center justify-center">
                <img src={images[currentIndex]} className="max-w-full max-h-full" />
            </div>
            <button
                onClick={nextSlide}
                className="bg-primary text-secondary w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-1000 hover:bg-secondary hover:text-primary">
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
