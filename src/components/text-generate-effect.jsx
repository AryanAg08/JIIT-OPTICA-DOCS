"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    highlightWords = [] // Accept words that need to be highlighted
}) => {
    const [scope, animate] = useAnimate();

    // Split words by space, retain punctuation for rendering
    let wordsArray = words.split(" ");

    useEffect(() => {
        animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        }, {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
        });
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    // Match words ignoring punctuation for comparison, but preserve punctuation in rendering
                    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
                    const isHighlighted = highlightWords.some(highlightWord =>
                        highlightWord.toLowerCase() === cleanWord
                    );

                    // Render word with or without highlight, preserving original punctuation
                    return (
                        <motion.span
                            key={word + idx}
                            className={cn(
                                "opacity-0",
                                isHighlighted
                                    ? "text-white" // Highlighted words
                                    : "text-gray-400", // Non-highlighted words
                                { "filter": filter ? "blur(10px)" : "none" }
                            )}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-medium", className)}>
            <div className="text-xl mt-6 md:text-2xl leading-relaxed max-w-4xl">
                {renderWords()}
            </div>
        </div>
    );
};
