"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

// Function to generate random starting position and angle for the stars
const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * (side % 2 === 0 ? window.innerWidth : window.innerHeight);

    switch (side) {
        case 0: // Top side
            return { x: offset, y: 0, angle: 45 };
        case 1: // Right side
            return { x: window.innerWidth, y: offset, angle: 135 };
        case 2: // Bottom side
            return { x: offset, y: window.innerHeight, angle: 225 };
        case 3: // Left side
            return { x: 0, y: offset, angle: 315 };
        default:
            return { x: 0, y: 0, angle: 45 };
    }
};

export const ShootingStars = ({
    speed = 8,
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 20,
    starHeight = 2,
    className,
    maxStars = 5, // Maximum stars on screen at a time
}) => {
    const [stars, setStars] = useState([]);

    // Function to create a new star
    const createStar = () => {
        const { x, y, angle } = getRandomStartPoint();
        const newStar = { id: Date.now() + Math.random(), x, y, angle, distance: 0, scale: 1 };
        setStars((prevStars) => {
            if (prevStars.length >= maxStars) return prevStars; // Limit stars on screen
            return [...prevStars, newStar];
        });
    };

    useEffect(() => {
        // Function to move stars
        const moveStars = () => {
            setStars((prevStars) => {
                return prevStars
                    .map((star) => {
                        const newX =
                            star.x + speed * Math.cos((star.angle * Math.PI) / 180);
                        const newY =
                            star.y + speed * Math.sin((star.angle * Math.PI) / 180);
                        const newDistance = star.distance + speed;
                        const newScale = 1 + newDistance / 100;

                        // If the star moves off-screen, remove it
                        if (
                            newX < -50 ||
                            newX > window.innerWidth + 50 ||
                            newY < -50 ||
                            newY > window.innerHeight + 50
                        ) {
                            return null; // Remove star
                        }

                        return {
                            ...star,
                            x: newX,
                            y: newY,
                            distance: newDistance,
                            scale: newScale,
                        };
                    })
                    .filter(Boolean); // Filter out stars that are off-screen
            });
        };

        const animationFrame = requestAnimationFrame(moveStars);
        return () => cancelAnimationFrame(animationFrame);
    }, [stars]);

    useEffect(() => {
        // Spawn stars in batches with random intervals
        const spawnBatch = () => {
            const batchCount = Math.floor(Math.random() * 3) + 3; // Randomly spawn 3-5 stars
            for (let i = 0; i < batchCount; i++) {
                setTimeout(() => {
                    createStar();
                }, i * 300); // Delay between stars in the batch
            }
        };

        const interval = setInterval(() => {
            spawnBatch();
        }, 2000); // Batch every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <svg className={cn("w-full h-full absolute inset-0", className)}>
            {stars.map((star) => (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill="url(#gradient)"
                    transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2
                        })`}
                />
            ))}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
                </linearGradient>
            </defs>
        </svg>
    );
};
