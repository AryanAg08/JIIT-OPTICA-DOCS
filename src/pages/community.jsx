import React from 'react';
import ProfileCards from './community/team/ProfileCards';
import ThreeBackground from './community/team/ThreeBackground';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../components/Background/BackgroundAnimation.jsx';
import Layout from '@theme/Layout';

export default function Community() {
  return (
    <Layout>
      {/* Ensure content starts just below the navbar */}
      <div className="relative  bg-neutral-900 pt-20">
        {/* Background Animation */}
        <BackgroundAnimation className="relative inset-0 z-0" height={false} />

        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 top-10 py-12 text-center w-full bg-opacity-80 backdrop-blur-lg"
        >
          <h1 className="text-5xl font-bold text-gray-100">Community</h1>
          <p className="text-xl text-gray-400 mt-2">
            Join our community discussions!
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-10">
          {/* ThreeBackground and ProfileCards */}
          <ThreeBackground />
          <ProfileCards />
        </div>
      </div>
    </Layout>
  );
}
