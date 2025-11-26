
'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, MessageSquare, BarChart3, Calendar, Heart, 
  Baby, Sparkles, CheckCircle2, Play, User, Stethoscope, 
  
  Menu, X, TrendingUp, Users, Zap, Target, 
  User2Icon,
  MessageCircle} from 'lucide-react';
  // import {Image} from 'next/image'

// Transparent Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
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
              Humane AI
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
              <button className="mx-4 px-6 py-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Section with Animated Phone Mockup and Chat Bubbles
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
    { type: 'doctor', text: 'Good morning! How are you feeling today?', time: '9:30 AM' },
    { type: 'user', text: 'Much better, thank you! The medication is working well.', time: '9:32 AM' },
    { type: 'doctor', text: "That's great to hear! Remember to take it after meals.", time: '9:33 AM' },
    { type: 'user', text: 'Will do. When is my next appointment?', time: '9:35 AM' },
    { type: 'doctor', text: 'Your next checkup is scheduled for December 15th at 10:00 AM.', time: '9:36 AM' },
    { type: 'user', text: 'Perfect, I have that marked. Thank you, doctor!', time: '9:37 AM' },
    { type: 'doctor', text: 'You\'re welcome! Feel free to reach out if you have any questions.', time: '9:38 AM' },
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

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-700">
              <Sparkles className="w-4 h-4" />
              Empowering Healthcare with AI
            </div>
            
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              AI powered patient journeys for{' '}
              <span className="text-transparent bg-clip-text bg-emerald-400 ">
                ambitious Indian doctors
              </span>
            </h1>
            
            <p className="text-sm  text-gray-600 leading-relaxed">
              We help doctors in India earn more, retain patients better, and stand out from competitors using a simple AI layer on top of WhatsApp and a doctor dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 text-sm sm:px-8 py-3 sm:py-4 border border-emerald-400 text-emerald-500  rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
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
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Phone Mockup with Chat Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[200px] sm:h-[200px] flex items-center justify-center order-1 lg:order-2"
          >
            {/* Animated Chat Bubbles - Left side */}
            <div className="absolute left-0 top-0 bottom-0 w-full lg:w-auto flex items-center justify-center lg:justify-start">
              <div className="relative h-[300px] sm:h-[300px] w-full max-w-[280px] lg:max-w-none lg:w-[280px] overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -100 * chatMessages.length]
                  }}
                  transition={{
                    duration: chatMessages.length * 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="space-y-6"
                >
                  {[...chatMessages, ...chatMessages].map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[220px] text-sm px-4 py-3 rounded-2xl backdrop-blur-md ${
                          msg.type === 'user'
                            ? 'bg-cyan-500/10 border border-cyan-400 ml-auto'
                            : 'bg-gray-500/10 border border-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {msg.type === 'doctor' ? (
                            <img 
                              src="/doc.avif" 
                              alt="Doctor" 
                              className="w-4 h-4 rounded-full object-cover"
                              // onError={(e) => {
                              //   e.currentTarget.style.display = 'none';
                              //   e.currentTarget.nextElementSibling.style.display = 'flex';
                              // }}
                            />
                          ) : (
                            <img 
                              src="/pat.avif" 
                              alt="Patient" 
                              className="w-4 h-4 rounded-full object-cover"
                              // onError={(e) => {
                              //   e.currentTarget.style.display = 'none';
                              //   e.currentTarget.nextElementSibling.style.display = 'flex';
                              // }}
                            />
                          )}
                          <div className={`w-4 h-4 rounded-full items-center justify-center ${msg.type === 'doctor' ? 'bg-emerald-500' : 'bg-cyan-500'}`} style={{ display: 'none' }}>
                            {msg.type === 'doctor' ? (
                              <Stethoscope className="w-3 h-3 text-white" />
                            ) : (
                              <User className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-xs font-semibold text-gray-700">
                            {msg.type === 'doctor' ? 'Dr. Smith' : 'Patient'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800">{msg.text}</p>
                        <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Phone Mockup - Center */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 mx-auto"
            >
              {/* Phone frame */}
              <div className="w-[260px] sm:w-[280px] h-[450px] sm:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-gray-900 rounded-b-3xl z-10" />
                  
                  {/* Screen content */}
                  <div className="h-full bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 sm:p-6 pt-10 sm:pt-12 overflow-hidden">
                    {/* Chat header */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/doc.avif" 
                          alt="Doctor" 
                          className="w-10 h-10 rounded-full object-cover"
                          // onError={(e) => {
                          //   e.currentTarget.style.display = 'none';
                          //   e.currentTarget.nextElementSibling.style.display = 'flex';
                          // }}
                        />
                        <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center" style={{ display: 'none' }}>
                          <Stethoscope className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Dr. Smith</div>
                          <div className="text-xs text-gray-500">Online</div>
                        </div>
                      </div>
                    </div>

                    {/* Chat messages animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="space-y-3 sm:space-y-4"
                    >
                      <div className="flex items-start gap-2">
                        <img 
                          src="/doc.avif" 
                          alt="Doctor" 
                          className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                          // onError={(e) => {
                          //   e.currentTarget.style.display = 'none';
                          //   e.currentTarget.nextElementSibling.style.display = 'flex';
                          // }}
                        />
                        <div className="w-7 h-7 rounded-full bg-emerald-200 flex-shrink-0" style={{ display: 'none' }} />
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-[160px] sm:max-w-[180px]">
                          <p className="text-xs sm:text-sm">Hi! How are you feeling today?</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <img 
                          src="/pat.avif" 
                          alt="Doctor" 
                          className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                          // onError={(e) => {
                          //   e.currentTarget.style.display = 'none';
                          //   e.currentTarget.nextElementSibling.style.display = 'flex';
                          // }}
                        />
                        <div className="w-7 h-7 rounded-full bg-sky-200 flex-shrink-0" style={{ display: 'none' }} />
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-[160px] sm:max-w-[180px]">
                          <p className="text-xs sm:text-sm">Much better, thank you!</p>
                        </div>
                      </div>

                      {/* <div className="flex items-start gap-2 justify-end">
                        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-[160px] sm:max-w-[180px]">
                          <p className="text-xs sm:text-sm">Much better, thank you!</p>
                        </div>
                      </div> */}

                      <div className="flex items-start gap-2">
                        <img 
                          src="/doc.avif" 
                          alt="Doctor" 
                          className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                          // onError={(e) => {
                          //   e.currentTarget.style.display = 'none';
                          //   e.currentTarget.nextElementSibling.style.display = 'flex';
                          // }}
                        />
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex-shrink-0" style={{ display: 'none' }} />
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-[160px] sm:max-w-[180px]">
                          <p className="text-xs sm:text-sm">Here's your next appointment reminder</p>
                          <div className="mt-2 p-2 bg-emerald-50 rounded-lg">
                            <div className="text-xs font-semibold">Dec 15, 2024</div>
                            <div className="text-xs text-gray-600">10:00 AM</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -left-4 sm:-left-8 top-16 sm:top-20 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-40 sm:w-48 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Response Rate</div>
                    <div className="text-base sm:text-lg font-bold">98%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute -right-4 sm:-right-8 bottom-28 sm:bottom-32 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-40 sm:w-48 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Patient Satisfaction</div>
                    <div className="text-base sm:text-lg font-bold">4.9/5</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Specialty Focus Section
const SpecialtySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specialties = [
    { name: 'Pregnancy Care', icon: Baby, color: "teal-400" },
    { name: 'Fertility', icon: Heart, color: "emerald-300" },
    { name: 'Dermatology', icon: Sparkles, color: "yellow-300" },
    // { name: 'Dentistry', icon: MessageSquare, color: "sky-300" },
    
  ];


  const colorMap: any = {
  "teal-400": "bg-teal-400",
  "emerald-300": "bg-emerald-300",
  "yellow-300": "bg-yellow-300",
  "sky-300": "bg-sky-300"
};

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Built for specialties with{' '}
            <span className="text-transparent  bg-clip-text bg-emerald-500">
              ongoing care needs
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Starting with specialties that have strong repeat visits and heavy follow-up requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {specialties.map((specialty, i) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl  ${colorMap[specialty.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <specialty.icon className={`w-6 sm:w-7 h-6 sm:h-7 text-white`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{specialty.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Treatment Journey Section
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
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
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
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">0{i + 1}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{phase.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{phase.description}</p>
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100"
          >
            <div className="w-14 h-14 rounded-xl bg-sky-300 flex items-center justify-center mb-6">
              <User2Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Free for Users</h3>
            <p className="text-gray-600 leading-relaxed">
              Both doctors and patients get full access to our AI-powered platform at no cost. No subscriptions, no hidden fees, no barriers to better healthcare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
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
          </motion.div>
        </div>
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
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-emerald-400">
              now?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The perfect convergence of technology, behavior, and market need
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
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
          className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border border-emerald-100"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Healthcare Expertise</h3>
              <p className="text-sm text-gray-600">Experience building digital and AI solutions in healthcare</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Deep Market Understanding</h3>
              <p className="text-sm text-gray-600">Deep understanding of Indian clinic workflows and needs</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Product Excellence</h3>
              <p className="text-sm text-gray-600">Strong product and design capability to execute the vision</p>
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
      {/* Animated dots representing cities/locations */}
      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {/* Grid lines - subtle world map feel */}
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated connection lines */}
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
        
        {/* Pulsing location dots */}
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
      
      {/* Floating particles */}
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
    <section className="py-16 sm:py-24 bg-emerald-400 relative overflow-hidden">
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
            Partnering with early adopter doctors and clinics while raising to scale our AI models, expand into key cities, and build partnerships with pharma and device companies
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
        <SpecialtySection />
        <JourneySection />
        <BusinessModelSection />
        <WhyNowSection />
        <WhyUsSection />
        <CTASection />
      </div>
    </div>
  );
}