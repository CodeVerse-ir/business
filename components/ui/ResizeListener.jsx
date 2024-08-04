"use client"
import { useEffect, useState } from 'react';

export default function ResizeListener({ navbar }) {

    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        if (navbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navbar]);

    useEffect(() => {
        const overlay = document.querySelector('.overlay');

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleResizeEffect = () => {
            if (windowWidth > 1024) {
                document.body.style.overflow = 'auto';
            } else if (overlay.classList.contains('visible')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };

        window.addEventListener('resize', handleResize);

        handleResizeEffect();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return null;
}