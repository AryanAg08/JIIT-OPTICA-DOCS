import React from 'react';
import BackgroundAnimation from '../components/Background/BackgroundAnimation.jsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import styles from './index.module.css';
import ScrollDownGif from '../../assets/scroll-down.gif';


export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <div className="relative w-full">
                {/* Background Animation */}
                <BackgroundAnimation />

                {/* Navbar */}
                {/* <Navbar /> */}

                {/* Main Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center px-6 py-4">
                    {/* Main Heading with Custom Style */}
                    <h2 className={styles.opticaDocsHeading}>
                        OPTICA-DOCS
                    </h2>

                    {/* Subheading with Important Words Colored */}
                    <p className="text-2xl md:text-xl lg:text-2xl text-gray-400 mt-6 max-w-4xl leading-relaxed font-medium">
    Welcome to <span className=" text-white">Optica's</span> official documentation hub. Explore past events, celebrate team contributions, and access resources on <span className=" text-white">DSA</span> and <span className=" text-white">Web Development</span>.
</p>


                </div>

                {/* Scroll Down Section with Smooth Bounce */}
                <div className="absolute bottom-4 w-full flex flex-col items-center">
                    <img src={ScrollDownGif} alt="Scroll Down" className="w-8 h-8 animate-bounce mb-2" />
                    <p className="text-gray-200 text-sm">Scroll Down</p>
                </div>
            </div>
        </Layout>
    );
}
