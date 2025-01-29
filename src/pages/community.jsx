import React from 'react';
import ProfileCards from "./community/team/ProfileCards";
import ThreeBackground from './community/team/ThreeBackground';
import { motion } from 'framer-motion';

export default function Community() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 text-center bg-white/10 backdrop-blur-md border-b border-gray-800 shadow-md"
      >
        <h1 className="text-4xl font-bold text-center text-gray-100">Community</h1>
        <p className="text-center text-lg text-gray-400 mt-2 mb-6">Join our community discussions!</p>
      </motion.header>

      {/* Profile Cards Section */}
      <ThreeBackground/>
        <ProfileCards />
      
    </div>
  );
}