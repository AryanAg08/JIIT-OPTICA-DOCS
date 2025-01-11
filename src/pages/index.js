import React from 'react';
import BackgroundAnimation from '../components/Background/BackgroundAnimation.jsx';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Navbar from '../components/Navbar/Navbar.jsx';

import Heading from '@theme/Heading';
import styles from './index.module.css';

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
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        // <Layout
        //     title={`Hello from ${siteConfig.title}`}
        //     description="Description will go into a meta tag in <head />">
        //     <HomepageHeader />
        //     <main>
        //         <HomepageFeatures />
        //     </main>
        // </Layout>
        <>
            <div className="relative w-full h-screen">
                {/* Background Animation */}
                <BackgroundAnimation />
                <Navbar />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold italic bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 font-space-mono animate-pulse drop-shadow-lg transition-transform duration-700 ease-in-out hover:scale-105">
                        OPTICA-DOCS
                    </h2>
                </div>
                {/* <HomepageHeader />
                <main>
                    <HomepageFeatures />
                </main> */}
            </div>
        </>
    );
}
