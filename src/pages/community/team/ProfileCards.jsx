import React from 'react';
import { Tilt } from 'react-tilt';
import { Instagram as InstagramIcon, Linkedin as LinkedinIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoreTeamData } from './coreData';

const ProfileCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {CoreTeamData.map((member, index) => (
          <Tilt
            key={index}
            options={{
              max: 15,
              scale: 1.05,
              speed: 300,
              glare: true,
              "max-glare": 0.5,
            }}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-300 transform hover:-translate-y-2 h-full"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="w-full h-56 overflow-hidden relative">
                <img
                  src={member.imgsrc}
                  alt={member.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
              
              {/* Text Content with Animated Background */}
              <div className="p-3 relative z-10 bg-gradient-to-b from-white/0 to-white/95">
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-lg font-semibold text-gray-900"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-xs text-gray-600 mt-1"
                >
                  {member.designation}
                </motion.p>
              </div>

              {/* Enhanced Hover Overlay with Social Icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px] z-20">
                <div className="flex gap-3 items-center justify-center relative z-30">
                  <AnimatePresence>
                    {member.instaLink && (
                      <motion.a
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                          boxShadow: "0 0 8px rgba(255,255,255,0.5)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        href={member.instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all duration-200 hover:ring-2 hover:ring-white/50 relative z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <InstagramIcon size={16} className="text-white" />
                      </motion.a>
                    )}
                    {member.linkedinLink && (
                      <motion.a
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        whileHover={{
                          scale: 1.2,
                          rotate: -5,
                          boxShadow: "0 0 8px rgba(255,255,255,0.5)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        href={member.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#0A66C2] hover:bg-[#0a5cb2] transition-all duration-200 hover:ring-2 hover:ring-white/50 relative z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkedinIcon size={16} className="text-white" />
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 translate-x-8 -translate-y-8" />
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfileCards;