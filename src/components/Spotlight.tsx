"use client";

import { motion, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";

export const Spotlight = () => {
    const [mounted, setMounted] = useState(false);

    // Use springs for smooth movement
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Create a dynamic background gradient based on mouse position
    // We center the gradient on the mouse coordinates
    const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    var(--accent-glow),
    transparent 80%
  )`;

    if (!mounted) return null;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-40"
            style={{
                background: background,
            }}
        />
    );
};
