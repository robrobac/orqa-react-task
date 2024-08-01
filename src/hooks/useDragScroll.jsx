import { useRef, useState } from 'react'

export default function useDragScroll() {
    const containerRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX - containerRef.current.offsetLeft);
        setStartY(e.clientY - containerRef.current.offsetTop);
        setScrollLeft(containerRef.current.scrollLeft);
        setScrollTop(containerRef.current.scrollTop);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - containerRef.current.offsetLeft;
        const y = e.clientY - containerRef.current.offsetTop;
        const walkX = (x - startX) * 1; // Adjust the scroll speed
        const walkY = (y - startY) * 1; // Adjust the scroll speed
        containerRef.current.scrollLeft = scrollLeft - walkX;
        containerRef.current.scrollTop = scrollTop - walkY;
    };

    return {
        containerRef,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove,
    }

}
