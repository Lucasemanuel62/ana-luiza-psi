"use client";
import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    direction?: Direction;
    delay?: number; // seconds
};

export default function Reveal({
    children,
    className = "",
    threshold = 0.15,
    rootMargin = "0px",
    once = true,
    direction = "up",
    delay = 0,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let timer: ReturnType<typeof setTimeout> | null = null;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timer = setTimeout(() => {
                        setVisible(true);
                        if (once && el) obs.unobserve(el);
                    }, Math.max(0, delay * 1000));
                }
            },
            { threshold, rootMargin }
        );

        obs.observe(el);
        return () => {
            obs.disconnect();
            if (timer) clearTimeout(timer);
        };
    }, [threshold, rootMargin, once, delay]);

    const distance = 24; // px
    let hiddenTransform = "translate(0,0)";
    if (direction === "up") hiddenTransform = `translateY(${distance}px)`;
    if (direction === "down") hiddenTransform = `translateY(-${distance}px)`;
    if (direction === "left") hiddenTransform = `translateX(${distance}px)`;
    if (direction === "right") hiddenTransform = `translateX(-${distance}px)`;

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ease-out will-change-transform`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translate(0,0)" : hiddenTransform,
            }}
        >
            {children}
        </div>
    );
}
