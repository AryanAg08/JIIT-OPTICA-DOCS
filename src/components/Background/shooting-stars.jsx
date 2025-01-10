"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

// Function to generate random starting position and angle for the stars
const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * window.innerWidth;

    switch (side) {
        case 0:
            return { x: offset, y: 0, angle: 45 };
        case 1:
            return { x: window.innerWidth, y: offset, angle: 135 };
        case 2:
            return { x: offset, y: window.innerHeight, angle: 225 };
        case 3:
            return { x: 0, y: offset, angle: 315 };
        default:
            return { x: 0, y: 0, angle: 45 };
    }
};

export const ShootingStars = ({
    minSpeed = 5, // Slower stars
    maxSpeed = 15, // Moderate speed for stars
    minDelay = 3000, // Minimum time delay before the next star appears
    maxDelay = 6000, // Maximum time delay
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 20,
    starHeight = 2,
    className,
    maxStars = 10, // Maximum stars on screen
    minStars = 5, // Minimum stars on screen
}) => {
    const [stars, setStars] = useState([]);
    const svgRef = useRef(null);

    // Function to create a new star
    const createStar = () => {
        const { x, y, angle } = getRandomStartPoint();
        const newStar = {
            id: Date.now() + Math.random(), // Ensure unique ID for each star
            x,
            y,
            angle,
            scale: 1,
            speed: Math.random() * (maxSpeed - minSpeed) + minSpeed, // Random speed within range
            distance: 0,
        };
        setStars((prevStars) => {
            if (prevStars.length >= maxStars) return prevStars; // Limit stars to maxStars
            return [...prevStars, newStar];
        });
    };

    useEffect(() => {
        // Initially create the minimum number of stars
        for (let i = 0; i < minStars; i++) {
            createStar();
        }

        // Add new stars at random intervals while keeping the total count within maxStars limit
        const interval = setInterval(() => {
            setStars((prevStars) => {
                if (prevStars.length < maxStars) {
                    createStar();
                }
                return prevStars; // Return the current state of stars without modification
            });
        }, Math.random() * (maxDelay - minDelay) + minDelay);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [minStars, maxStars, stars.length, minDelay, maxDelay]);

    useEffect(() => {
        // Function to move and remove stars
        const moveStars = () => {
            setStars((prevStars) => {
                return prevStars
                    .map((star) => {
                        // Move the star based on its speed and angle
                        const newX =
                            star.x +
                            star.speed * Math.cos((star.angle * Math.PI) / 180);
                        const newY =
                            star.y +
                            star.speed * Math.sin((star.angle * Math.PI) / 180);
                        const newDistance = star.distance + star.speed;
                        const newScale = 1 + newDistance / 100;

                        // If the star moves off-screen, remove it
                        if (
                            newX < -50 ||
                            newX > window.innerWidth + 50 ||
                            newY < -50 ||
                            newY > window.innerHeight + 50
                        ) {
                            return null; // Remove the star once it’s off-screen
                        }

                        return {
                            ...star,
                            x: newX,
                            y: newY,
                            distance: newDistance,
                            scale: newScale,
                        };
                    })
                    .filter(Boolean); // Remove null values (stars that moved off-screen)
            });
        };

        // Continuously update the star positions
        const animationFrame = requestAnimationFrame(moveStars);
        return () => cancelAnimationFrame(animationFrame);
    }, [stars]);

    return (
        <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
            {stars.map((star) => (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill="url(#gradient)"
                    transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
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
