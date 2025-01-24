import React, { useEffect } from 'react';
import BackgroundAnimation from '../components/Background/BackgroundAnimation.jsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { TextGenerateEffect } from '../components/text-generate-effect.jsx';

import styles from './index.module.css';
import ScrollDownGif from '../../assets/scroll-down.gif';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const words = `Welcome to Optica official documentation hub. Explore past events, celebrate team contributions, and access resources on DSA and Web Development.`;

    const highlightWords = ['Optica', 'DSA', 'Web', 'Development']; // Words to highlight

    useEffect(() => {
        // Smooth scroll helper function
        const smoothScroll = (targetScrollTop, duration) => {
            const startScrollTop = window.scrollY || window.pageYOffset;
            const distance = targetScrollTop - startScrollTop;
            let startTime = null;

            const scrollAnimation = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // Clamp progress to 1
                const ease = progress * (2 - progress); // Ease-out function

                window.scrollTo(0, startScrollTop + distance * ease);

                if (progress < 1) {
                    requestAnimationFrame(scrollAnimation);
                }
            };

            requestAnimationFrame(scrollAnimation);
        };

        // Trigger scroll down and back up
        const scrollEffect = async () => {
            smoothScroll(150, 1200); // Scroll down to 150px in 1.2s
            await new Promise((resolve) => setTimeout(resolve, 1400)); // Wait a bit longer to keep smooth
            smoothScroll(0, 1200); // Scroll back up in 1.2s
        };

        scrollEffect();
    }, []); // Empty dependency array ensures this runs only on mount

    return (
        <Layout>
            <div className="relative w-full">
                {/* Background Animation */}
                <BackgroundAnimation />

                {/* Main Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center px-6 py-4">
                    {/* Main Heading */}
                    <h2 className={styles.opticaDocsHeading}>
                        OPTICA-DOCS
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-400 mt-6 max-w-4xl leading-relaxed font-medium">
                        <TextGenerateEffect
                            words={words}
                            duration={2}
                            filter={true}
                            highlightWords={highlightWords}
                        />
                    </p>
                </div>

                {/* Scroll Down Section */}
                <div className="absolute bottom-4 w-full flex flex-col items-center mb-12">
                    <img src={ScrollDownGif} alt="Scroll Down" className="w-28 h-14 animate-bounce mb-2" />
                    <p className="text-gray-200 text-md">Scroll Down</p>
                </div>
            </div>
        </Layout>
    );
}
