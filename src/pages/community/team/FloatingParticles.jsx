import React, { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.esm';

const FloatingParticles = () => {
  const particlesRef = useRef();

  const positions = useMemo(() => {
    const generated = random.inSphere(new Float32Array(1500), { radius: 1.5 });

   
    for (let i = 0; i < generated.length; i++) {
      if (isNaN(generated[i])) generated[i] = 0; 
    }

    return generated;
  }, []);

  // Rotate particles over time
  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += delta / 10;
      particlesRef.current.rotation.y += delta / 15;
    }
  });

  return (
    <group ref={particlesRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default FloatingParticles;
