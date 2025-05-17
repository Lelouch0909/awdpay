"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        subtitle: string;
        marketing_title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [disableObserver, setDisableObserver] = useState(false);
    const ref = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    // Fonction pour gérer la transition de sortie
    const exitFullscreen = () => {
        setIsTransitioning(true);
        setDisableObserver(true);
        containerRef.current?.classList.add('exiting-fullscreen');

        setTimeout(() => {
            containerRef.current?.classList.remove('fullscreen-mode', 'exiting-fullscreen');
            setIsFullscreen(false);

            // <-- Déplace cette ligne ici !
            document.body.style.overflow = 'auto';

            const currentSection = containerRef.current?.parentElement;
            if (!currentSection) return;

            if (activeCard === 0) {
                const prevSection = currentSection.previousElementSibling;
                if (prevSection) {
                    prevSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest'
                    });
                }
            } else if (activeCard === content.length - 1) {
                const nextSection = currentSection.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'nearest',
                        block: 'start'
                    });
                }
            }

            setIsTransitioning(false);
            setTimeout(() => {
                setDisableObserver(false);
            }, 1500);
        }, 20); // 300ms = durée de la transition CSS
    };

    // Fonction pour entrer en mode plein écran
    const enterFullscreen = () => {
        containerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        containerRef.current?.classList.add('fullscreen-mode');
        setIsFullscreen(true);
        document.body.style.overflow = 'hidden';
        ref.current?.focus();
    };

    // Gérer le scrolling aux limites
    const handleScroll = (e: WheelEvent) => {
        if (!containerRef.current || isTransitioning) return;

        const isAtTop = activeCard === 0 && e.deltaY < 0;
        const isAtBottom = activeCard === content.length - 1 && e.deltaY > 0;

        if ((isAtTop || isAtBottom) && isFullscreen) {
            e.preventDefault();
            exitFullscreen();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Vérifier si la section occupe presque tout l'écran
                    const visibleRatio = entry.intersectionRatio;
                    const isAlmostFullyVisible = visibleRatio > 0.8; // 80% de la section visible

                    if (isAlmostFullyVisible && !isFullscreen && !isTransitioning && !disableObserver) {
                        // Vérifier si la section est centrée verticalement
                        const rect = entry.boundingClientRect;
                        const windowHeight = window.innerHeight;
                        const elementCenter = rect.top + rect.height / 2;
                        const windowCenter = windowHeight / 2;
                        const isCentered = Math.abs(elementCenter - windowCenter) < windowHeight * 0.2; // Tolérance de 20%

                        if (isCentered) {
                            enterFullscreen();
                        }
                    }
                });
            },
            {
                threshold: [0.8, 0.85, 0.9, 0.95], // Observer plusieurs seuils
                rootMargin: '0px'  // Pas de marge pour une détection plus précise
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
            window.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
                window.removeEventListener('wheel', handleScroll);
            }
        };
    }, [activeCard, content.length, isFullscreen, isTransitioning, disableObserver]);

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF"
    ];

    const linearGradients = [
        "linear-gradient(90deg, #FF6600 0%, #0A2540 100%)",
        "linear-gradient(90deg, #0A2540 0%, #FF6600 100%)",
        "linear-gradient(90deg, #FF6600 0%, #FFA040 100%)",
        "linear-gradient(90deg, #0A2540 0%, #FFA040 100%)",
        "linear-gradient(90deg, #FFA040 0%, #FF6600 100%)",
        "linear-gradient(90deg, #FF6600 0%, #0A2540 100%)"
    ];
    const Lcolors = [
        "linear-gradient(90deg, #FF6600 0%, #0A2540 100%)",
        "linear-gradient(90deg, #0A2540 0%, #FF6600 100%)",
        "linear-gradient(90deg, #FF6600 0%, #FFA040 100%)",
        "linear-gradient(90deg, #0A2540 0%, #FFA040 100%)",
        "linear-gradient(90deg, #FFA040 0%, #FF6600 100%)",
        "linear-gradient(90deg, #FF6600 0%, #0A2540 100%)"
    ];
    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    // Ajouter les styles CSS
    return (
        <>
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .fullscreen-mode {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    z-index: 1000 !important;
                    margin: 0 !important;
                    padding: 2rem !important;
                    transition: all 0.3s ease-in-out !important;
                    opacity: 1 !important;
                }

                .exiting-fullscreen {
                    opacity: 0.5 !important;
                    transform: scale(0.98) !important;
                }
                
                .entering-fullscreen {
                    opacity: 0 !important;
                    transform: scale(0.95) !important;
                }
            `}</style>
            <motion.div
                ref={(el) => {
                    containerRef.current = el;
                    ref.current = el;
                }}
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="relative flex h-screen justify-around space-x-10 rounded-md p-30 scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    overflowY: isFullscreen ? 'auto' : 'hidden', // <-- Ajout ici
                }}
            >
                <div className="div relative flex items-start px-4">

                    <div className="max-w-2xl pt-56">
                        {content.map((item, index) => (
                            <div key={item.title + index} className="mb-[50rem] mt-28 text-left">
                                {/* Ajout du titre principal */}
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-2xl font-bold text-highlight"
                                >
                                    {item.title}
                                </motion.h1>
                                {/* Subtitle stylisé */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-xl font-bold mt-2  text-slate-900"
                                  
                                >
                                    {item.subtitle}
                                </motion.p>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="mt-4 text-4xl font-bold"
                                    style={{
                                        background: Lcolors[index % Lcolors.length],
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        // Ajoute une bordure blanche ou foncée pour la lisibilité
                                        WebkitTextStroke: "1px #fff",
                                    }}
                                >
                                    {item.marketing_title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="mt-4 text-lg leading-relaxed text-slate-600"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        ))}
                        <div className="h-[25rem]" />
                    </div>
                </div>
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "sticky top-30 hidden h-80 w-96  rounded-md bg-white lg:block",
                        contentClassName,
                    )}
                >
                    {content[activeCard].content ?? null}

                </div>
            </motion.div>
        </>
    );
};
