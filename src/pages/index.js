import React, { useRef } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion for animations
import BackgroundAnimation from '../components/UI/Background/BackgroundAnimation.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import { TextGenerateEffect } from '../components/UI/text-generate-effect.jsx';
import ScrollDownGif from '../../assets/scroll-down.gif';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // Corrected import
import styles from './index.module.css';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();  // Corrected usage
    const words = `Welcome to Optica official documentation hub. Explore past events, celebrate team contributions, and access resources on DSA and Web Development.`;

    // List of words to highlight
    const highlightWords = ['Optica', 'DSA', 'Web', 'Development']; // Add all words you want to highlight

    const sectionRef = useRef(null);

    // Function to scroll to the next section
    const scrollToNextSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="relative w-full h-screen">
                {/* Background Animation */}
                <BackgroundAnimation />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center px-6 py-4">
                    {/* Main Heading with Custom Style */}
                    <h2 className={styles.opticaDocsHeading}>
                        OPTICA-DOCS
                    </h2>

                    {/* Subheading with Dynamic Text Generation */}
                    <p className="text-gray-400 mt-6 max-w-4xl leading-relaxed font-medium">
                        <TextGenerateEffect
                            words={words}
                            duration={2}
                            filter={true}
                            highlightWords={highlightWords} // Pass the highlighted words
                        />
                    </p>
                </div>

                {/* Scroll Down Section with Smooth Bounce (Fixed at the Bottom) */}
                <motion.div
                    className="absolute bottom-4 w-full flex flex-col items-center cursor-pointer"
                    onClick={scrollToNextSection}
                    whileHover={{ scale: 1.1 }}  // Animation when hovering over the button
                    whileTap={{ scale: 0.9 }}    // Tap animation effect
                    transition={{ duration: 0.2 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                >
                    <motion.img
                        src={ScrollDownGif}
                        alt="Scroll Down"
                        className="w-8 h-8 animate-bounce mb-2"
                        animate={{ y: [0, 20, 0] }}  // Smooth bouncing effect
                        transition={{ repeat: Infinity, duration: 1.5 }} // Continuous bounce
                    />
                    <p className="text-gray-200 text-sm">Scroll Down</p>
                </motion.div>

                {/* The Section to Scroll To */}
                <motion.div
                    ref={sectionRef}
                    className="h-screen bg-neutral-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-center text-4xl pt-20">Next Section</h2>
                </motion.div>
            </div>
        </>
    );
}
