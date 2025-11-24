'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import FeatureCards3D from '@/components/ui/landing-page/FeatureCards3D';

// Animated Navbar Component
function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['About ABDM', 'Services', 'Compliance', 'Resources', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-semibold text-lg">ABDM Solutions</span>
          </motion.div>

          {/* Nav Items */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

// 3D Network Globe Component
function IndiaNetworkGlobe() {
  const meshRef = useRef();
  const particlesRef = useRef();

  const nodes = React.useMemo(() => {
    const positions = [];
    const colors = [];
    const nodeCount = 150;
    
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 0.5;
      
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      const t = Math.random();
      colors.push(
        0.15 + t * 0.34,
        0.39 + t * 0.23,
        0.92 + t * 0.01
      );
    }
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !particlesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.05;
    
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const pulse = Math.sin(time * 2 + i * 0.1) * 0.02;
      positions[i] += pulse;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={meshRef}>
      <lineSegments>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(2, 1)]} />
        <lineBasicMaterial color="#2563EB" transparent opacity={0.3} />
      </lineSegments>
      
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.positions.length / 3}
            array={nodes.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nodes.colors.length / 3}
            array={nodes.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// 3D Icons for Feature Cards


// Hero Section Component
function HeroSection() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [titleVisible, setTitleVisible] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const canvasScale = useTransform(scrollYProgress, [0, 0.1, 0.6], [1, 0.95, 0.7]);
  const canvasOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLSupported(false);
    } catch (e) {
      setWebGLSupported(false);
    }

    // Animate title text
    const interval = setInterval(() => {
      setTitleVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const title = "Ayushman Bharat Digital Mission";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    exit: (i) => ({
      opacity: 0,
      y: -50,
      transition: {
        delay: i * 0.02,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-violet-950/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          <motion.div
            className="space-y-8 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 animate-pulse" />
                India's Digital Health Infrastructure
              </span>
            </motion.div>

            <div className="min-h-[180px]">
              <AnimatePresence mode="wait">
                {titleVisible && (
                  <motion.h1
                    key="title"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 leading-tight tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {title.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        className={char === ' ' ? 'inline-block w-4' : 'inline-block'}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light"
            >
              Interoperable. Secure. Patient-centric. We help hospitals & clinics become ABDM-compliant — from gap analysis to certification.
            </motion.p>

            <motion.ul className="space-y-3" variants={containerVariants}>
              {[
                'ABHA identity & registries',
                'Interoperable data exchange (HIE)',
                'M1 → M3 compliance & staff onboarding'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start text-slate-400"
                >
                  <svg className="w-6 h-6 text-violet-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={containerVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Begin Your ABDM Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[600px] lg:h-[700px]"
            style={{ scale: canvasScale, opacity: canvasOpacity }}
          >
            {webGLSupported && !shouldReduceMotion && (
              <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 8], fov: 45 }}
                className="pointer-events-none"
              >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.8} color="#2563EB" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                  <IndiaNetworkGlobe />
                </Float>
                <fog attach="fog" args={['#0F172A', 5, 15]} />
              </Canvas>
            )}
            
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Feature Card 3D Section


// Main Landing Page
export default function ABDMLandingPage() {
  return (
    <main className="bg-slate-950">
      <AnimatedNavbar />
      <HeroSection />
      <FeatureCards3D />
    </main>
  );
}