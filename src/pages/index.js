import React from 'react';
import BackgroundAnimation from '../components/Background/BackgroundAnimation';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
                        Welcome to the Home Page!
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
