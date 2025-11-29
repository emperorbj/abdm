
// 'use client'
// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import { ArrowRight, MessageSquare, BarChart3, Calendar, Heart, 
//   Baby, Sparkles, CheckCircle2, Play, User, Stethoscope, 
  
//   Menu, X, TrendingUp, Users, Zap, Target, 
//   User2Icon,
//   MessageCircle} from 'lucide-react';
//   import { ShimmerButton } from "@/components/magic/shimmer-button"
// import { Iphone } from '@/components/magic/iphone';
// import { TypingAnimation } from '@/components/magic/typing-text';
// import { LightRays } from '@/components/magic/ambient-background';
// import Expandable from '@/components/animata/carousel';
// import OrbitingSpecialties from '@/components/landcomp/Orbit';
// import { AnimatedListDemo } from '@/components/landcomp/List';
// // Transparent Navbar
// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
//     }`}>
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-xl sm:text-2xl font-bold text-gray-900"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
//               AI Care Coordination
//             </span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#features" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Features</a>
//             <a href="#specialties" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Specialties</a>
//             <a href="#about" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">About</a>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection('cta-section')}
//               className="px-6 py-2 border text-sm  border-emerald-500 text-emerald-400 rounded-lg font-semibold"
//             >
//               Get Started
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => {
//                                 scrollToSection('cta-section');

//               setIsMobileMenuOpen(!isMobileMenuOpen)}}
//             className="md:hidden p-2 text-gray-700"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg"
//           >
//             <div className="flex flex-col gap-4">
//               <a href="#features" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Features</a>
//               <a href="#specialties" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Specialties</a>
//               <a href="#about" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">About</a>
//               <button className="mx-4 px-6 py-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold">
//                 Get Started
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Hero Section with Animated Phone Mockup and Chat Bubbles
// // const HeroSection = () => {
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       setMousePosition({
// //         x: (e.clientX / window.innerWidth - 0.5) * 20,
// //         y: (e.clientY / window.innerHeight - 0.5) * 20
// //       });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   // Chat messages data
// //   const chatMessages = [
// //     { type: 'doctor', text: 'How long have you been trying to get pregnant?', time: '9:30 AM' },
// //     { type: 'user', text: 'for almost 3 years.', time: '9:32 AM' },
// //     { type: 'doctor', text: "How regular are your periods?", time: '9:33 AM' },
// //     { type: 'user', text: 'Well not so regular', time: '9:35 AM' },
// //     { type: 'doctor', text: 'Are you on any medications?', time: '9:36 AM' },
// //     { type: 'user', text: 'No', time: '9:37 AM' },
// //     { type: 'doctor', text: 'Ok I will send you a slot for examination', time: '9:38 AM' },
// //   ];

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <motion.div
// //           className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
// //           animate={{
// //             x: mousePosition.x * 2,
// //             y: mousePosition.y * 2,
// //           }}
// //           transition={{ type: "spring", stiffness: 50 }}
// //         />
// //         <motion.div
// //           className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
// //           animate={{
// //             x: mousePosition.x * -1.5,
// //             y: mousePosition.y * -1.5,
// //           }}
// //           transition={{ type: "spring", stiffness: 50 }}
// //         />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-20 relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
// //           {/* Left Content */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="space-y-6 mt-20 md:mt-0 sm:space-y-8 order-2 lg:order-1"
// //           >
// //             <ShimmerButton shimmerColor="#81E6D9" // bright green shimmer
// //   background="rgba(255, 255, 255, 0.05)" // transparent glassy background
// //   // style={{ backdropFilter: "blur(10px)" }}
// //   >
// //             {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-700"> */}
// //               <Sparkles className="w-4 h-4" />
// //               Empowering Healthcare with AI
// //             </ShimmerButton>
// //             {/* </div> */}
            
// //             <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight">
// //               AI powered patient journeys for{' '}
// //               <TypingAnimation className="text-transparent bg-clip-text bg-emerald-500">
// //                 ambitious Indian doctors
// //               </TypingAnimation>
// //             </h1>
            
// //             <p className="text-sm  text-gray-600 leading-relaxed">
// //               We help doctors in India earn more, retain patients better, and stand out from competitors using a simple AI layer on top of WhatsApp and a doctor dashboard.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 pt-4">
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="px-6 text-sm sm:px-8 py-3 sm:py-4 border border-emerald-400 text-emerald-500  rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
// //               >
// //                 Talk to the Founders
// //                 <ArrowRight className="w-5 h-5" />
// //               </motion.button>
              
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="px-6 text-sm sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors"
// //               >
// //                 <Play className="w-5 h-5" />
// //                 View Demo
// //               </motion.button>
// //             </div>

// //             {/* Key metrics */}
// //             <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
// //               {[
// //                 { value: '3x', label: 'More Patients' },
// //                 { value: '50%', label: 'Time Saved' },
// //                 { value: '95%', label: 'Satisfaction' }
// //               ].map((stat, i) => (
// //                 <motion.div
// //                   key={i}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.8 + i * 0.1 }}
// //                 >
// //                   <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
// //                   <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* Right - Animated Phone Mockup with Chat Bubbles */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="relative z-20 mt-10 md:mt-0 h-[200px] sm:h-[200px]   flex items-center justify-center order-1 lg:order-3"
// //           >
// //           <div className="absolute left-0 top-0 bottom-0 w-full lg:w-auto hidden md:flex items-center justify-center lg:justify-start">
// //               <div className="relative h-[300px] sm:h-[300px] w-full max-w-[280px] lg:max-w-none lg:w-[290px] overflow-hidden">
// //                 <motion.div
// //                   animate={{
// //                     y: [0, -100 * chatMessages.length]
// //                   }}
// //                   transition={{
// //                     duration: chatMessages.length,
// //                     repeat: Infinity,
// //                     ease: "linear"
// //                   }}
// //                   className="space-y-3"
// //                 >
// //                   {[...chatMessages, ...chatMessages].map((msg, idx) => (
// //                     <div
// //                       key={idx}
// //                       // className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
// //                     >
// //                       <div
// //                         className={`max-w-[200px] text-sm px-4 py-1 rounded-2xl backdrop-blur-md ${
// //                           msg.type === 'user'
// //                             ? 'bg-transparent border border-cyan-400 ml-auto'
// //                             : 'bg-transparent border border-gray-400'
// //                         }`}
// //                       >
// //                         <div className="flex items-center gap-2 mb-1">
// //                           {msg.type === 'doctor' ? (
// //                             <img 
// //                               src="/doc.avif" 
// //                               alt="Doctor" 
// //                               className="w-4 h-4 rounded-full object-cover"
// //                               // onError={(e) => {
// //                               //   e.currentTarget.style.display = 'none';
// //                               //   e.currentTarget.nextElementSibling.style.display = 'flex';
// //                               // }}
// //                             />
// //                           ) : (
// //                             <img 
// //                               src="/pat.avif" 
// //                               alt="Patient" 
// //                               className="w-4 h-4 rounded-full object-cover"
// //                               // onError={(e) => {
// //                               //   e.currentTarget.style.display = 'none';
// //                               //   e.currentTarget.nextElementSibling.style.display = 'flex';
// //                               // }}
// //                             />
// //                           )}
// //                           <div className={`w-4 h-4 rounded-full items-center justify-center ${msg.type === 'doctor' ? 'bg-emerald-500' : 'bg-cyan-500'}`} style={{ display: 'none' }}>
// //                             {msg.type === 'doctor' ? (
// //                               <Stethoscope className="w-3 h-3 text-white" />
// //                             ) : (
// //                               <User className="w-3 h-3 text-white" />
// //                             )}
// //                           </div>
// //                           <span className="text-xs font-semibold text-gray-700">
// //                             {msg.type === 'doctor' ? 'Dr. Smith' : 'Patient'}
// //                           </span>
// //                         </div>
// //                         <p className="text-sm text-gray-800">{msg.text}</p>
// //                         <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </motion.div>
// //               </div>
// //             </div>
// //             {/* Phone Mockup - Center */}
// //             <motion.div
// //               animate={{
// //                 y: [0, -20, 0],
// //               }}
// //               transition={{
// //                 duration: 4,
// //                 repeat: Infinity,
// //                 ease: "easeInOut"
// //               }}
// //               className="relative z-10 mx-auto"
// //             >
// //               <Iphone
// //                 src="/phone.png"
// //                 className="w-[200px] md:w-[260px] sm:w-[280px] h-[300px] lg:h-[500px] mx-auto"
// //               />

// //               {/* Floating cards */}
// //               {/* <motion.div
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 1.5, duration: 0.6 }}
// //                 className="absolute -left-4 sm:-left-8 top-16 sm:top-20 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-40 sm:w-48 hidden lg:block"
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
// //                     <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
// //                   </div>
// //                   <div>
// //                     <div className="text-xs text-gray-500">Response Rate</div>
// //                     <div className="text-base sm:text-lg font-bold">98%</div>
// //                   </div>
// //                 </div>
// //               </motion.div> */}

// //               {/* <motion.div
// //                 initial={{ opacity: 0, x: 20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 1.8, duration: 0.6 }}
// //                 className="absolute -right-4 sm:-right-8 -[100px] sm:bottom-32 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-40 sm:w-48 hidden lg:block"
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center">
// //                     <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-600" />
// //                   </div>
// //                   <div>
// //                     <div className="text-xs text-gray-500">Patient Satisfaction</div>
// //                     <div className="text-base sm:text-lg font-bold">4.9/5</div>
// //                   </div>
// //                 </div>
// //               </motion.div> */}
// //             </motion.div>
           

             
            
// //           </motion.div>
           
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// const HeroSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Chat messages data
//   const chatMessages = [
//     { type: 'doctor', text: 'How long have you been trying to get pregnant?', time: '9:30 AM' },
//     { type: 'user', text: 'for almost 3 years.', time: '9:32 AM' },
//     { type: 'doctor', text: "How regular are your periods?", time: '9:33 AM' },
//     { type: 'user', text: 'Well not so regular', time: '9:35 AM' },
//     { type: 'doctor', text: 'Are you on any medications?', time: '9:36 AM' },
//     { type: 'user', text: 'No', time: '9:37 AM' },
//     { type: 'doctor', text: 'Ok I will send you a slot for examination', time: '9:38 AM' },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
//           animate={{
//             x: mousePosition.x * 2,
//             y: mousePosition.y * 2,
//           }}
//           transition={{ type: "spring", stiffness: 50 }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
//           animate={{
//             x: mousePosition.x * -1.5,
//             y: mousePosition.y * -1.5,
//           }}
//           transition={{ type: "spring", stiffness: 50 }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-10">
//         {/* Main Content Wrapper - 3 columns on desktop, stacked on mobile */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
//           {/* LEFT: Animated Chat Bubbles */}
         

//           {/* CENTER: Hero Text Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex-1 max-w-xl space-y-6 sm:space-y-8 text-center lg:text-left"
//           >
//             <ShimmerButton 
//               shimmerColor="#81E6D9"
//               background="rgba(255, 255, 255, 0.05)"
//               className="mx-auto lg:mx-0"
//             >
//               <Sparkles className="w-4 h-4" />
//               Empowering Healthcare with AI
//             </ShimmerButton>
            
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
//               AI powered patient journeys for{' '}
//               <TypingAnimation className="text-transparent bg-clip-text bg-emerald-500">
//                 ambitious Indian doctors
//               </TypingAnimation>
//             </h1>
            
//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//               We help doctors in India earn more, retain patients better, and stand out from competitors using a simple AI layer on top of WhatsApp and a doctor dashboard.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 // onClick={() => scrollToSection('cta-section')}
//                 className="px-6 text-sm sm:px-8 py-3 sm:py-4 border border-emerald-400 text-emerald-500 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 Talk to the Founders
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 text-sm sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors"
//               >
//                 <Play className="w-5 h-5" />
//                 View Demo
//               </motion.button>
//             </div>

//             {/* Key metrics */}
//             <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
//               {[
//                 { value: '3x', label: 'More Patients' },
//                 { value: '50%', label: 'Time Saved' },
//                 { value: '95%', label: 'Satisfaction' }
//               ].map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1 + i * 0.1 }}
//                   className="text-center lg:text-left"
//                 >
//                   <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
//                   <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//            <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="hidden lg:block flex-1 max-w-[280px]"
//           >
//             <div className="relative h-[400px] overflow-hidden">
//               <motion.div
//                 animate={{
//                   y: [0, -100 * chatMessages.length]
//                 }}
//                 transition={{
//                   duration: chatMessages.length * 2,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 className="space-y-3"
//               >
//                 {[...chatMessages, ...chatMessages].map((msg, idx) => (
//                   <div key={idx}>
//                     <div
//                       className={`max-w-[240px] text-sm px-4 py-2 rounded-2xl backdrop-blur-md ${
//                         msg.type === 'user'
//                           ? 'bg-transparent border border-cyan-400 ml-auto'
//                           : 'bg-transparent border border-gray-400'
//                       }`}
//                     >
//                       <div className="flex items-center gap-2 mb-1">
//                         {msg.type === 'doctor' ? (
//                           <img 
//                             src="/doc.avif" 
//                             alt="Doctor" 
//                             className="w-5 h-5 rounded-full object-cover"
//                           />
//                         ) : (
//                           <img 
//                             src="/pat.avif" 
//                             alt="Patient" 
//                             className="w-5 h-5 rounded-full object-cover"
//                           />
//                         )}
//                         <span className="text-xs font-semibold text-gray-700">
//                           {msg.type === 'doctor' ? 'Dr. Smith' : 'Patient'}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-800">{msg.text}</p>
//                       <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* RIGHT: Phone Mockup */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex-1 flex items-center justify-center lg:justify-end max-w-[300px]"
//           >
//             <motion.div
//               animate={{
//                 y: [0, -20, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="relative"
//             >
//               <Iphone
//                 src="/phone.png"

// className="w-[200px] sm:w-[220px] lg:w-[240px] h-[400px] sm:h-[440px] lg:h-[480px] mx-auto"                // className="w-[240px] sm:w-[260px] lg:w-[280px] lg:h-[450px] mx-auto"
//               />
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };
// // Specialty Focus Section
// const SpecialtySection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const specialties = [
//     { name: 'Pregnancy Care', icon: Baby, color: "teal-400" },
//     { name: 'Fertility', icon: Heart, color: "emerald-300" },
//     { name: 'Dermatology', icon: Sparkles, color: "yellow-300" },
//     { name: 'Dentistry', icon: MessageSquare, color: "sky-300" },
//     {name: 'Diabetology', icon: Zap, color: "teal-400"},
//     {name: 'Pediatrics', icon: Users, color: "teal-400"},
    
//   ];


//   const colorMap: any = {
//   "teal-400": "bg-teal-400",
//   "emerald-300": "bg-emerald-300",
//   "yellow-300": "bg-yellow-300",
//   "sky-300": "bg-sky-300"
// };
// return (
//   <section ref={ref} className="relative py-24 bg-white overflow-hidden">
//     {/* Animated Light Rays Background */}
//     <LightRays 
//       count={8}
//       color="rgba(16, 185, 129, 0.15)" // Emerald color to match your theme
//       blur={40}
//       speed={16}
//       length="80vh"
//       className="opacity-30"
//     />
    
//     <div className="container flex md:flex-row flex-col mx-auto px-6 relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
//           Built for specialties with{' '}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
//             ongoing care needs
//           </span>
//         </h2>
//         <p className="text-md text-gray-600 max-w-3xl mx-auto">
//           Starting with specialties that have strong repeat visits and heavy follow-up requirements
//         </p>
//         <AnimatedListDemo className="mt-12"/>
//       </motion.div>
//       <OrbitingSpecialties/>


//     </div>
//   </section>
// )
// };
// const JourneySection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const phases = [
//     {
//       title: 'Before Treatment',
//       description: 'AI collects patient history through WhatsApp. Doctors receive clean summaries.',
//       features: ['Intake & history', 'Report uploads', 'Pre-consultation prep']
//     },
//     {
//       title: 'During Treatment',
//       description: 'Patients ask questions anytime. AI provides validated responses.',
//       features: ['24/7 patient support', 'Educational content', 'Adherence tracking']
//     },
//     {
//       title: 'After Treatment',
//       description: 'Automated follow-ups and personalized care reminders.',
//       features: ['Recovery tracking', 'Long-term care', 'Referral generation']
//     }
//   ];

//   return (
//     <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
//             Complete care journey in{' '}
//             <span className="text-transparent  bg-clip-text bg-emerald-400">
//               three simple phases
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
//           {phases.map((phase, i) => (
//             <motion.div
//               key={phase.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               className="relative"
//             >
//               <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
//                 <div className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">0{i + 1}</div>
//                 <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{phase.title}</h3>
//                 <p className="text-sm sm:text-base text-gray-600 mb-6">{phase.description}</p>
//                 <ul className="space-y-3">
//                   {phase.features.map((feature, j) => (
//                     <li key={j} className="flex items-center gap-3">
//                       <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
//                       <span className="text-sm text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Business Model Section

// const BusinessModelSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section ref={ref} className="py-16 sm:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
//             Free for doctors and patients,{' '}
//             <span className="text-transparent bg-clip-text bg-emerald-400">
//               powered by partnerships
//             </span>
//           </h2>
//         </motion.div>

//         <div className="space-y-8 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100 overflow-hidden flex flex-col md:flex-row"
//           >
//             {/* Left side - Content */}
//             <div className="flex-1 p-8 md:p-12">
//               <div className="w-14 h-14 rounded-xl bg-sky-300 flex items-center justify-center mb-6">
//                 <User2Icon className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Free for Users</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Both doctors and patients get full access to our AI-powered platform at no cost. No subscriptions, no hidden fees, no barriers to better healthcare.
//               </p>
//             </div>

//             {/* Right side - Image (50% width, full height) */}
//             <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
//               <img 
//                 src="/free.avif" 
//                 alt="Free for users" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-col md:flex-row"
//           >
//             {/* Left side - Content */}
//             <div className="flex-1 p-8 md:p-12">
//               <div className="w-14 h-14 rounded-xl bg-emerald-400 flex items-center justify-center mb-6">
//                 <TrendingUp className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-gray-900">Revenue Model</h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Revenue comes from pharma and medical device companies through carefully curated ads shown only on the doctor's interface.
//               </p>
//               <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
//                 <CheckCircle2 className="w-5 h-5" />
//                 Patient interface remains 100% ad-free
//               </div>
//             </div>

//             {/* Right side - Image (50% width, full height) */}
//             <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
//               <img 
//                 src="/model.avif" 
//                 alt="Revenue model" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// // const BusinessModelSection = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true });

// //   return (
// //     <section ref={ref} className="py-16 sm:py-24 bg-white">
// //       <div className="container mx-auto px-4 sm:px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-12 sm:mb-16"
// //         >
// //           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
// //             Free for doctors and patients,{' '}
// //             <span className="text-transparent bg-clip-text bg-emerald-400">
// //               powered by partnerships
// //             </span>
// //           </h2>
// //         </motion.div>

// //         <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
// //           <motion.div
// //   initial={{ opacity: 0, x: -30 }}
// //   animate={isInView ? { opacity: 1, x: 0 } : {}}
// //   transition={{ duration: 0.6, delay: 0.2 }}
// //   className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100 flex items-center gap-8"
// // >
// //   {/* Left side - Content */}
// //   <div className="flex-1">
// //     <div className="w-14 h-14 rounded-xl bg-sky-300 flex items-center justify-center mb-6">
// //       <User2Icon className="w-7 h-7 text-white" />
// //     </div>
// //     <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Free for Users</h3>
// //     <p className="text-gray-600 leading-relaxed">
// //       Both doctors and patients get full access to our AI-powered platform at no cost. No subscriptions, no hidden fees, no barriers to better healthcare.
// //     </p>
// //   </div>

// //   {/* Right side - Image */}
// //   <div className="flex-shrink-0 w-64 h-64">
// //     <img 
// //       src="/free.avif" 
// //       alt="Free for users" 
// //       className="w-full h-full object-contain"
// //     />
// //   </div>
// // </motion.div>

// // <motion.div
// //   initial={{ opacity: 0, x: 30 }}
// //   animate={isInView ? { opacity: 1, x: 0 } : {}}
// //   transition={{ duration: 0.6, delay: 0.4 }}
// //   className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg flex items-center gap-8"
// // >
// //   {/* Left side - Content */}
// //   <div className="flex-1">
// //     <div className="w-14 h-14 rounded-xl bg-emerald-400 flex items-center justify-center mb-6">
// //       <TrendingUp className="w-7 h-7 text-white" />
// //     </div>
// //     <h3 className="text-2xl font-bold mb-4 text-gray-900">Revenue Model</h3>
// //     <p className="text-gray-600 leading-relaxed mb-4">
// //       Revenue comes from pharma and medical device companies through carefully curated ads shown only on the doctor's interface.
// //     </p>
// //     <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
// //       <CheckCircle2 className="w-5 h-5" />
// //       Patient interface remains 100% ad-free
// //     </div>
// //   </div>

// //   {/* Right side - Image */}
// //   <div className="flex-shrink-0 w-64 h-64">
// //     <img 
// //       src="/model.avif" 
// //       alt="Revenue model" 
// //       className="w-full h-full object-contain"
// //     />
// //   </div>
// // </motion.div>
          
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // Why Now Section
// const WhyNowSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const reasons = [
//     {
//       icon: MessageCircle,
//       color: 'text-green-300',
//       title: 'WhatsApp is Already the Standard',
//       description: 'Indian patients already use WhatsApp as their default health communication channel'
//     },
//     {
//       icon: Users,
//       color: 'text-sky-300',
//       title: 'Doctors Are Overwhelmed',
//       description: 'Doctors are overloaded with unstructured chat messages and follow-ups that eat into their time'
//     },
//     {
//       icon: Sparkles,
//       color: 'text-teal-300',
//       title: 'AI Has Reached Critical Capability',
//       description: 'Advances in language models now enable safe, guided medical conversations at scale'
//     },
//     {
//       icon: Zap,
//       color: 'text-blue-400',
//       title: 'Clinics Want Simple Solutions',
//       description: 'Clinics want tech-enabled journeys without complexity or additional staff overhead'
//     }
//   ];

//   return (
//     <section ref={ref} className="py-10 sm:py-10 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6">
//             Why{' '}
//             <span className="text-transparent bg-clip-text bg-emerald-400">
//               now?
//             </span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//             The perfect convergence of technology, behavior, and market need
//           </p>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
//           {reasons.map((reason, i) => (
//             <motion.div
//               key={reason.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow"
//             >
//               <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-4">
//                 <reason.icon className={`w-6 h-6 ${reason.color} `} />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
//               <p className="text-gray-600">{reason.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Why Us Section
// const WhyUsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section ref={ref} className="py-16 sm:py-10 bg-white">
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6">
//             Why{' '}
//             <span className="text-transparent bg-clip-text bg-emerald-400">
//               us?
//             </span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="max-w-4xl mx-auto bg-transparent rounded-3xl p-8 sm:p-12 "
//         >
//           <div className="grid sm:grid-cols-3 gap-26 text-center">
//             <div>
//               <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center mx-auto mb-4">
//                 <Target className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-900">Healthcare Expertise</h3>
//               <p className="text-md text-gray-600">Experience building digital and AI solutions in healthcare</p>
//             </div>
//             <div>
//               <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-900">Deep Market Understanding</h3>
//               <p className="text-md text-gray-600">Deep understanding of Indian clinic workflows and needs</p>
//             </div>
//             <div>
//               <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
//                 <Sparkles className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-900">Product Excellence</h3>
//               <p className="text-md text-gray-600">Strong product and design capability to execute the vision</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };



// // Animated Map Background Component
// const AnimatedMapBackground = () => {
//   return (
//     <div id="cta-section" className="absolute inset-0 overflow-hidden opacity-20">
//       {/* Animated dots representing cities/locations */}
//       <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
//         {/* Grid lines - subtle world map feel */}
//         <defs>
//           <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
//             <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#grid)" />
        
//         {/* Animated connection lines */}
//         {[
//           { x1: 200, y1: 200, x2: 400, y2: 250, delay: 0 },
//           { x1: 400, y1: 250, x2: 600, y2: 200, delay: 0.5 },
//           { x1: 600, y1: 200, x2: 750, y2: 300, delay: 1 },
//           { x1: 300, y1: 350, x2: 500, y2: 400, delay: 1.5 },
//           { x1: 500, y1: 400, x2: 700, y2: 380, delay: 2 },
//         ].map((line, i) => (
//           <motion.line
//             key={i}
//             x1={line.x1}
//             y1={line.y1}
//             x2={line.x2}
//             y2={line.y2}
//             stroke="white"
//             strokeWidth="1.5"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ 
//               pathLength: [0, 1, 1, 0],
//               opacity: [0, 1, 1, 0]
//             }}
//             transition={{
//               duration: 3,
//               delay: line.delay,
//               repeat: Infinity,
//               repeatDelay: 2
//             }}
//           />
//         ))}
        
//         {/* Pulsing location dots */}
//         {[
//           { cx: 200, cy: 200, delay: 0 },
//           { cx: 400, cy: 250, delay: 0.3 },
//           { cx: 600, cy: 200, delay: 0.6 },
//           { cx: 750, cy: 300, delay: 0.9 },
//           { cx: 300, cy: 350, delay: 1.2 },
//           { cx: 500, cy: 400, delay: 1.5 },
//           { cx: 700, cy: 380, delay: 1.8 },
//           { cx: 450, cy: 150, delay: 2.1 },
//           { cx: 550, cy: 320, delay: 2.4 },
//           { cx: 350, cy: 280, delay: 2.7 },
//         ].map((dot, i) => (
//           <g key={i}>
//             <motion.circle
//               cx={dot.cx}
//               cy={dot.cy}
//               r="4"
//               fill="white"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: [0.8, 1.2, 0.8] }}
//               transition={{
//                 duration: 2,
//                 delay: dot.delay,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//             <motion.circle
//               cx={dot.cx}
//               cy={dot.cy}
//               r="8"
//               fill="none"
//               stroke="white"
//               strokeWidth="1"
//               initial={{ scale: 0.5, opacity: 0.8 }}
//               animate={{ 
//                 scale: [0.5, 1.5, 0.5],
//                 opacity: [0.8, 0, 0.8]
//               }}
//               transition={{
//                 duration: 2,
//                 delay: dot.delay,
//                 repeat: Infinity,
//                 ease: "easeOut"
//               }}
//             />
//           </g>
//         ))}
//       </svg>
      
//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, Math.random() * 20 - 10, 0],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // CTA Section with Animated Map Background
// const CTASection = () => {
//   return (
//     <section className="py-16 sm:py-24 bg-emerald-400 relative overflow-hidden">
//       <AnimatedMapBackground />
//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
//             We are opening pilots and raising capital
//           </h2>
//           <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12">
//           Partnering with early adopter doctors and clinics while raising capital to scale our AI models, expand into key cities, and build partnerships with pharma and device companies
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
//             >
//               Request Investor Call
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
//             >
//               Get Investor Deck
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Main Landing Page
// export default function LandingPage() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <div className="pt-16 sm:pt-20">
//         <HeroSection />
//         <SpecialtySection />
//         <JourneySection />
//         <BusinessModelSection />
//         <WhyNowSection />
//         <WhyUsSection />
//         <CTASection />
//       </div>
//     </div>
//   );
// }
'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, MessageSquare, BarChart3, Calendar, Heart, 
  Baby, Sparkles, CheckCircle2, Play, User, Stethoscope, 
  
  Menu, X, TrendingUp, Users, Zap, Target, 
  User2Icon,
  MessageCircle} from 'lucide-react';
  import { ShimmerButton } from "@/components/magic/shimmer-button"
import { Iphone } from '@/components/magic/iphone';
import { TypingAnimation } from '@/components/magic/typing-text';
import { LightRays } from '@/components/magic/ambient-background';
import Expandable from '@/components/animata/carousel';
import OrbitingSpecialties from '@/components/landcomp/Orbit';
import { AnimatedListDemo } from '@/components/landcomp/List';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RotatingSpecialtyImages } from '@/components/magic/spec';

// Transparent Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold text-gray-900"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              AI Care Coordination
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Features</a>
            <a href="#specialties" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Specialties</a>
            <a href="#about" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">About</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border text-sm  border-emerald-500 text-emerald-400 rounded-lg font-semibold"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <a href="#features" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Features</a>
              <a href="#specialties" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Specialties</a>
              <a href="#about" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">About</a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mx-4 px-6 py-2 border border-emerald-500 text-emerald-400 rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Get Started with AI Care Coordination</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Choose how you'd like to engage with us
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                // Add your action here
              }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Talk to the Founders
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                // Add your action here
              }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors"
            >
              <Play className="w-5 h-5" />
              View Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                scrollToSection('cta-section');
              }}
              className="px-8 py-4 bg-emerald-400 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Request Investor Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                // Add your action here
              }}
              className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-500 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
            >
              Get Investor Deck
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Chat messages data
  const chatMessages = [
    { type: 'doctor', text: 'How long have you been trying to get pregnant?', time: '9:30 AM' },
    { type: 'user', text: 'for almost 3 years.', time: '9:32 AM' },
    { type: 'doctor', text: "How regular are your periods?", time: '9:33 AM' },
    { type: 'user', text: 'Well not so regular', time: '9:35 AM' },
    { type: 'doctor', text: 'Are you on any medications?', time: '9:36 AM' },
    { type: 'user', text: 'No', time: '9:37 AM' },
    { type: 'doctor', text: 'Ok I will send you a slot for examination', time: '9:38 AM' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-10">
        {/* Main Content Wrapper - 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
          {/* LEFT: Animated Chat Bubbles */}
         

          {/* CENTER: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-xl space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <ShimmerButton 
              shimmerColor="#81E6D9"
              background="rgba(255, 255, 255, 0.05)"
              className="mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4" />
              Empowering Healthcare with AI
            </ShimmerButton>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              AI powered patient journeys for{' '}
              <TypingAnimation className="text-transparent bg-clip-text bg-emerald-500">
                ambitious Indian doctors
              </TypingAnimation>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We help doctors in India earn more, retain patients better, and stand out from competitors using a simple AI layer on top of WhatsApp and a doctor dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 text-sm sm:px-8 py-3 sm:py-4 border border-emerald-400 text-emerald-500 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                Talk to the Founders
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 text-sm sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors"
              >
                <Play className="w-5 h-5" />
                View Demo
              </motion.button>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {[
                { value: '3x', label: 'More Patients' },
                { value: '50%', label: 'Time Saved' },
                { value: '95%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block flex-1 max-w-[280px]"
          >
            <div className="relative h-[400px] overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -100 * chatMessages.length]
                }}
                transition={{
                  duration: chatMessages.length * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="space-y-3"
              >
                {[...chatMessages, ...chatMessages].map((msg, idx) => (
                  <div key={idx}>
                    <div
                      className={`max-w-[240px] text-sm px-4 py-2 rounded-2xl backdrop-blur-md ${
                        msg.type === 'user'
                          ? 'bg-transparent border border-cyan-400 ml-auto'
                          : 'bg-transparent border border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {msg.type === 'doctor' ? (
                          <img 
                            src="/doc.avif" 
                            alt="Doctor" 
                            className="w-5 h-5 rounded-full object-cover"
                          />
                        ) : (
                          <img 
                            src="/pat.avif" 
                            alt="Patient" 
                            className="w-5 h-5 rounded-full object-cover"
                          />
                        )}
                        <span className="text-xs font-semibold text-gray-700">
                          {msg.type === 'doctor' ? 'Dr. Patel' : 'Patient'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800">{msg.text}</p>
                      <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex items-center justify-center lg:justify-end max-w-[300px]"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Iphone
                src="/phone.png"
                className="w-[200px] sm:w-[220px] lg:w-[240px] h-[400px] sm:h-[440px] lg:h-[480px] mx-auto"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Specialty Focus Section


const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const phases = [
    {
      title: 'Before Treatment',
      description: 'AI collects patient history through WhatsApp. Doctors receive clean summaries.',
      features: ['Intake & history', 'Report uploads', 'Pre-consultation prep']
    },
    {
      title: 'During Treatment',
      description: 'Patients ask questions anytime. AI provides validated responses.',
      features: ['24/7 patient support', 'Educational content', 'Adherence tracking']
    },
    {
      title: 'After Treatment',
      description: 'Automated follow-ups and personalized care reminders.',
      features: ['Recovery tracking', 'Long-term care', 'Referral generation']
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-white to-cyan-50" id="features">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            Complete care journey in{' '}
            <span className="text-transparent  bg-clip-text bg-emerald-400">
              three simple phases
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative h-full"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col">
                <div className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">0{i + 1}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{phase.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 flex-grow">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Business Model Section
const BusinessModelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
            Free for doctors and patients,{' '}
            <span className="text-transparent bg-clip-text bg-emerald-400">
              powered by partnerships
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100 overflow-hidden flex flex-col md:flex-row"
          >
            <div className="flex-1 p-8 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-sky-300 flex items-center justify-center mb-6">
                <User2Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Free for Users</h3>
              <p className="text-gray-600 leading-relaxed">
                Both doctors and patients get full access to our AI-powered platform at no cost. No subscriptions, no hidden fees, no barriers to better healthcare.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
              <img 
                src="/free.avif" 
                alt="Free for users" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="flex-1 p-8 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-emerald-400 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Revenue Model</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Revenue comes from pharma and medical device companies through carefully curated ads shown only on the doctor's interface.
              </p>
              <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                <CheckCircle2 className="w-5 h-5" />
                Patient interface remains 100% ad-free
              </div>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
              <img 
                src="/model.avif" 
                alt="Revenue model" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SpecialtySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-10 bg-white overflow-hidden" id="specialties">
      {/* Animated Light Rays Background */}
      <LightRays 
        count={8}
        color="rgba(16, 185, 129, 0.15)"
        blur={40}
        speed={16}
        length="80vh"
        className="opacity-30"
      />
      
      <div className="container flex md:flex-row flex-col mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Built for specialties with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              ongoing care needs
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Starting with specialties that have strong repeat visits and heavy follow-up requirements
          </p>
          <AnimatedListDemo/>
        </motion.div>
        <RotatingSpecialtyImages/>
      </div>
    </section>
  );
};

// Why Now Section
const WhyNowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const reasons = [
    {
      icon: MessageCircle,
      color: 'text-green-300',
      title: 'WhatsApp is Already the Standard',
      description: 'Indian patients already use WhatsApp as their default health communication channel'
    },
    {
      icon: Users,
      color: 'text-sky-300',
      title: 'Doctors Are Overwhelmed',
      description: 'Doctors are overloaded with unstructured chat messages and follow-ups that eat into their time'
    },
    {
      icon: Sparkles,
      color: 'text-teal-300',
      title: 'AI Has Reached Critical Capability',
      description: 'Advances in language models now enable safe, guided medical conversations at scale'
    },
    {
      icon: Zap,
      color: 'text-blue-400',
      title: 'Clinics Want Simple Solutions',
      description: 'Clinics want tech-enabled journeys without complexity or additional staff overhead'
    }
  ];

  return (
    <section ref={ref} className="py-10 sm:py-10 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-emerald-400">
              now?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The perfect convergence of technology, behavior, and market need
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-4">
                <reason.icon className={`w-6 h-6 ${reason.color} `} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Us Section
const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-10 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-emerald-400">
              us?
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-transparent rounded-3xl p-8 sm:p-12 "
        >
          <div className="grid sm:grid-cols-3 gap-26 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Healthcare Expertise</h3>
              <p className="text-md text-gray-600">Experience building digital and AI solutions in healthcare</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Deep Market Understanding</h3>
              <p className="text-md text-gray-600">Deep understanding of Indian clinic workflows and needs</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Product Excellence</h3>
              <p className="text-md text-gray-600">Strong product and design capability to execute the vision</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Map Background Component
const AnimatedMapBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {[
          { x1: 200, y1: 200, x2: 400, y2: 250, delay: 0 },
          { x1: 400, y1: 250, x2: 600, y2: 200, delay: 0.5 },
          { x1: 600, y1: 200, x2: 750, y2: 300, delay: 1 },
          { x1: 300, y1: 350, x2: 500, y2: 400, delay: 1.5 },
          { x1: 500, y1: 400, x2: 700, y2: 380, delay: 2 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
        
        {[
          { cx: 200, cy: 200, delay: 0 },
          { cx: 400, cy: 250, delay: 0.3 },
          { cx: 600, cy: 200, delay: 0.6 },
          { cx: 750, cy: 300, delay: 0.9 },
          { cx: 300, cy: 350, delay: 1.2 },
          { cx: 500, cy: 400, delay: 1.5 },
          { cx: 700, cy: 380, delay: 1.8 },
          { cx: 450, cy: 150, delay: 2.1 },
          { cx: 550, cy: 320, delay: 2.4 },
          { cx: 350, cy: 280, delay: 2.7 },
        ].map((dot, i) => (
          <g key={i}>
            <motion.circle
              cx={dot.cx}
              cy={dot.cy}
              r="4"
              fill="white"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 2,
                delay: dot.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx={dot.cx}
              cy={dot.cy}
              r="8"
              fill="none"
              stroke="white"
              strokeWidth="1"
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ 
                scale: [0.5, 1.5, 0.5],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                delay: dot.delay,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </g>
        ))}
      </svg>
      
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

// CTA Section with Animated Map Background
const CTASection = () => {
  return (
    <section id="cta-section" className="py-16 sm:py-24 bg-emerald-400 relative overflow-hidden">
      <AnimatedMapBackground />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
            We are opening pilots and raising capital
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12">
            Partnering with early adopter doctors and clinics while raising capital to scale our AI models, expand into key cities, and build partnerships with pharma and device companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Request Investor Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Get Investor Deck
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <HeroSection />
        <JourneySection />
        <BusinessModelSection />
                <SpecialtySection />

        <WhyNowSection />
        <WhyUsSection />
        <CTASection />
      </div>
    </div>
  );
}