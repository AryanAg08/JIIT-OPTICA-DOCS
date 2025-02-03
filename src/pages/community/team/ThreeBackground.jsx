import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingParticles from './FloatingParticles';

const ThreeBackground = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
     
      <Canvas camera={{ position: [0, 0, 1] }} frameloop="demand">
        <FloatingParticles />
      </Canvas>

     
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ThreeBackground;
