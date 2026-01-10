"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After"
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        let position = ((clientX - containerRect.left) / containerRect.width) * 100;
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Global mouse up to catch dragging outside
    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchend', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseMove={isDragging ? handleMove : undefined}
            onTouchMove={handleMove}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onClick={handleMove}
        >
            {/* After Image (Background - Polluted/Dirty usually 'Before' in time, but let's stick to labels provided) */}
            {/* Let's assume 'Before' is the transformation start (Polluted) and 'After' is result (Clean) or vice versa? 
                User said "one with and one without thrash". 
                "Challenge" -> Polluted. "Solution" -> Clean. 
                So "Before" = Polluted (Challenge), "After" = Clean (Solution).
            */}

            <Image
                src={afterImage}
                alt="After"
                fill
                className="object-cover pointer-events-none"
            />

            {/* Label for Background Image (Bottom Right) */}
            <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest z-10 pointer-events-none">
                {afterLabel}
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                />
                {/* Label for Foreground Image (Bottom Left) */}
                <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white z-30 cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#63C14B]">
                    <ChevronsLeftRight size={24} />
                </div>
            </div>
        </div>
    );
}
