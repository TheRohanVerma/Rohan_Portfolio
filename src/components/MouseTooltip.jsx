import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseTooltip = ({ children, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Smooth follow effect using springs
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (event) => {
        // Offset tooltip from cursor
        mouseX.set(event.clientX + 15);
        mouseY.set(event.clientY + 15);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}

            {isHovered && (
                <motion.div
                    style={{
                        position: 'fixed',
                        left: springX,
                        top: springY,
                        zIndex: 100,
                        pointerEvents: 'none',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-primary/95 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/20 shadow-2xl text-sm font-medium whitespace-nowrap"
                >
                    {text}
                </motion.div>
            )}
        </div>
    );
};

export default MouseTooltip;
