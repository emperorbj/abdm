'use client'
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float} from '@react-three/drei';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



function DataExchangeIcon() {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <group ref={meshRef}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.cos(i * 2.094) * 1.5, Math.sin(i * 2.094) * 1.5, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {[0, 1, 2].map((i) => (
        <line key={`line-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, Math.cos(i * 2.094) * 1.5, Math.sin(i * 2.094) * 1.5, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#10b981" />
        </line>
      ))}
    </group>
  );
}

function SecurityIcon() {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
  });

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1, 1.2, 2, 6]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.3]} scale={0.4}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function PatientsIcon() {
  const groupRef = useRef(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.getElapsedTime() * 2 + i) * 0.2;
    });
  });

  return (
    <group ref={groupRef}>
      {[0, 1].map((i) => (
        <group key={i} position={[i * 0.8 - 0.4, 0, 0]}>
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.4, 0.5, 0.8, 16]} />
            <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function HospitalsIcon() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.76]}>
        <boxGeometry args={[0.3, 1, 0.1]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.76]}>
        <boxGeometry args={[1, 0.3, 0.1]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

export default function FeatureCards3D() {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
    const shouldReduceMotion = useReducedMotion(); // Call at top level

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

  const features = [
    {
      icon: DataExchangeIcon,
      title: "Data Exchange",
      description: "Seamless interoperability across healthcare providers with secure data exchange protocols",
      color: "#10b981"
    },
    {
      icon: SecurityIcon,
      title: "Secure & Private",
      description: "Bank-grade encryption and consent-based access ensure patient data privacy and security",
      color: "#3b82f6"
    },
    {
      icon: PatientsIcon,
      title: "Patient-Centric",
      description: "Empowering patients with unified health records and control over their medical data",
      color: "#3b82f6"
    },
    {
      icon: HospitalsIcon,
      title: "Hospital Integration",
      description: "Complete ABDM compliance with M1 to M3 certification and seamless HIS integration",
      color: "#f97316"
    }
  ];


    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // Now use the value from the hook
    if (shouldReduceMotion) {
      setActiveCard(0);
      return;
    }

    const featureCount = features.length;
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      snap: 1 / Math.max(1, featureCount - 1),
      onUpdate: (self) => {
        const idx = Math.round(self.progress * (featureCount - 1));
        setActiveCard((prev) => {
          if (prev !== idx) return idx;
          return prev;
        });
      }
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill && t.kill());
    };
  }, [shouldReduceMotion]);



//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//       const newIndex = Mat

//       setActiveCard(newIndex);
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress, features.length]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-slate-950">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950" />
        
        <div className="relative z-10 container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            >
              {/* 3D Canvas */}
              <div className="h-[400px] relative">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} color={features[activeCard].color} />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} />
                  <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    {React.createElement(features[activeCard].icon)}
                  </Float>
                </Canvas>
                <div 
                  className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: features[activeCard].color }}
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold text-white"
                >
                  {features[activeCard].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-slate-300 leading-relaxed"
                >
                  {features[activeCard].description}
                </motion.p>
                
                {/* Progress Indicator */}
                <div className="flex gap-2 pt-4">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeCard ? 'w-12 bg-blue-500' : 'w-8 bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}