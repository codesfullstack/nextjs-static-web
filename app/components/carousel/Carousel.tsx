'use client'
import { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

export default function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentLogoCicleIndex, setCurrentLogoCicleIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [reloadBar, setReloadBar] = useState(false);
    // const [intervalId, setIntervalId] = useState(null);
    const [intervalId, setIntervalId] = useState<number | NodeJS.Timeout>(0);  // Cambiado el tipo de estado


    const imagesList = [
        'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const textList = [
      
    ];

    const logoCicle = [
        "〄M&C"
    ];

    const prevImage = () => {
        if (isAnimating) return;  // Prevent clicking while animation is running

        setIsAnimating(true);
        setReloadBar(true);

        setCurrentImage();
        setCurrentTextIndex();

        setCurrentLogoCicleIndex();
    };

    const nextImage = () => {
        if (isAnimating) return;  // Prevent clicking while animation is running

        setIsAnimating(true);
        setReloadBar(true);

        setCurrentImage(prevValue => prevValue);
        setCurrentTextIndex(prevValue => prevValue );

        setCurrentLogoCicleIndex(prevValue => prevValue );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                nextImage();  // Only run nextImage if not animating
            }
        }, 8000);

        setIntervalId(interval);

        return () => {
            clearInterval(interval);
        };
    }, [isAnimating]);

    useEffect(() => {
       
    }, [isAnimating]);

    useEffect(() => {
        if (reloadBar) {
            const timer = setTimeout(() => setReloadBar(false), 50);
            return () => clearTimeout(timer);
        }
    }, [reloadBar]);

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['image-container']}>
                <div className={styles['custom-image']}>
                    <div
                        className={`${styles['image-slide']} ${isAnimating ? styles['slide-animation'] : ''}`}
                        style={{
                            transform: `translateX(-${currentImage * 100}%)`,
                            transition: isAnimating ? 'transform 1s ease-in-out' : 'none'
                        }}
                    >
                        {imagesList.map((image, index) => (
                            <div key={index} className={styles['image-wrapper']}>
                                <Image
                                    src={image}
                                    width={1024}
                                    height={540}
                                    alt="Carousel image"
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles['loading-bar']} key={reloadBar ? 'reload' : 'no-reload'}></div>

                <div className={styles['split-text-container']}>
                    <span className={`${styles['text-part']} ${styles['fade-in']}`} key={currentTextIndex}>
                        {textList[currentTextIndex]}
                    </span>
                </div>

                <div className={styles['split-logo']}>
                    <span className={`${styles['text-part']} ${styles['fade-top']}`} key={currentLogoCicleIndex}>
                        {logoCicle[currentLogoCicleIndex]}
                    </span>
                </div>

                <div className={styles['arrow-container']}>
                    <i
                        className={`${styles['arrow-left']} fa fa-chevron-left`}
                        onClick={prevImage}
                    ></i>
                    <i
                        className={`${styles['arrow-right']} fa fa-chevron-right`}
                        onClick={nextImage}
                    ></i>
                </div>
            </div>
        </div>
    );
}
