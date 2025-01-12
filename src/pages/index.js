import React from 'react';
import BackgroundAnimation from '../components/Background/BackgroundAnimation.jsx';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Navbar from '../components/Navbar/Navbar.jsx';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import ScrollDownGif from '../../assets/scroll-down.gif';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Explore the Docs - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}
export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <>
            <div className="relative w-full">
                {/* Background Animation */}
                <BackgroundAnimation />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center px-6 py-4 font-space-mono">
                    {/* Main Heading with Gradient and Text Shadow */}
                    <h2 className="text-3xl md:text-5xl font-bold italic text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-pink-500 font-space-mono transition-transform duration-700 ease-in-out drop-shadow-xl hover:scale-105">
                        OPTICA-DOCS
                    </h2>

                    {/* Subheading with Important Words Colored */}
                    <p className="text-base md:text-xl lg:text-2xl text-gray-100 mt-4 max-w-3xl leading-relaxed">
                        Welcome to <span className="font-semibold text-blue-400">Optica's</span> official documentation hub. Explore past events, celebrate team contributions, and access resources on <span className="font-semibold text-purple-400">DSA</span> and <span className="font-semibold text-indigo-400">Web Development</span>.
                    </p>
                </div>

                {/* Scroll Down Section with Smooth Bounce */}
                <div className="absolute bottom-4 w-full flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-800 rounded-full animate-bounce mb-2"></div>
                    <p className="text-gray-200 text-sm">Scroll Down</p>
                </div>
            </div>
        </>
    );
}
