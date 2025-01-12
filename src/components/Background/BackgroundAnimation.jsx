import React from 'react';
import { ShootingStars } from './shooting-stars';
import { StarsBackground } from './stars-background';

export default function BackgroundAnimation() {
    return <>
        <div className="z-0 h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full">
            {/* <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                exfd</h2> */}
            <ShootingStars className="absolute top-0 left-0 z-0 w-full h-full" />
            <StarsBackground className="absolute top-0 left-0 z-0 w-full h-full" />
        </div>
    </>
}
