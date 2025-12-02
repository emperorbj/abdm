'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRight, MessageSquare, BarChart3, Calendar, Heart,
  Baby, Sparkles, CheckCircle2, Play, User, Stethoscope, PhoneCall,

  Menu, X, TrendingUp, Users, Zap, Target,
  User2Icon,
  MessageCircle
} from 'lucide-react';
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
import { TextAnimate } from '@/components/magic/text-animate';
import SpecialtySection from '@/components/Specialty';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
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
            <a href="#features" className="text-gray-700 text-sm hover:text-[#01BAA7] transition-colors">Features</a>
            <a href="#specialties" className="text-gray-700 text-sm hover:text-[#01BAA7] transition-colors">Specialties</a>
            <a href="#about" className="text-gray-700 text-sm hover:text-[#01BAA7] transition-colors">About</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border text-sm  border-[#01BAA7] text-[#01BAA7] rounded-lg font-semibold"
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
                className="mx-4 px-6 py-2 border border-[#01BAA7] text-[#01BAA7] rounded-lg font-semibold"
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
              <PhoneCall className="w-5 h-5" />
              Talk to the Founders
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

  // Specialty Chat Data
  const specialtyChats = [
    {
      specialty: 'Gynecology',
      doctorName: 'Dr. Patel',
      messages: [
        { type: 'doctor', text: 'How long have you been trying to get pregnant?', time: '9:30 AM' },
        { type: 'user', text: 'for almost 3 years.', time: '9:32 AM' },
        { type: 'doctor', text: "How regular are your periods?", time: '9:33 AM' },
        { type: 'user', text: 'Well not so regular', time: '9:35 AM' },
        { type: 'doctor', text: 'Are you on any medications?', time: '9:36 AM' },
      ]
    },
    {
      specialty: 'Pediatrics',
      doctorName: 'Dr. Singh',
      messages: [
        { type: 'doctor', text: 'How is the fever now?', time: '10:00 AM' },
        { type: 'user', text: 'It came down after the medicine.', time: '10:05 AM' },
        { type: 'doctor', text: "Is he eating well?", time: '10:06 AM' },
        { type: 'user', text: 'Not really, just liquids.', time: '10:08 AM' },
        { type: 'doctor', text: 'That is okay. Keep him hydrated.', time: '10:10 AM' },
      ]
    },
    {
      specialty: 'Dermatology',
      doctorName: 'Dr. Rao',
      messages: [
        { type: 'doctor', text: 'Send me a photo of the rash.', time: '11:15 AM' },
        { type: 'user', text: 'Sent. It itches a lot.', time: '11:17 AM' },
        { type: 'doctor', text: "Looks like an allergic reaction.", time: '11:18 AM' },
        { type: 'user', text: 'What should I apply?', time: '11:20 AM' },
        { type: 'doctor', text: 'Prescribing a soothing cream.', time: '11:21 AM' },
      ]
    }
  ];

  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialtyIndex((prev) => (prev + 1) % specialtyChats.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentChat = specialtyChats[currentSpecialtyIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-2 relative z-10 -mt-2 md:-mt-10">
        {/* Main Content Wrapper - 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">


          {/* CENTER: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1  w-full md:w-1/2 space-y-6 sm:space-y-3 text-center lg:text-left"
          >
            <ShimmerButton
              shimmerColor="#FFFFFF"
              background="#01BAA7"
              className="mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4" />
              Empowering Healthcare with AI
            </ShimmerButton>
            {/* <TextAnimate animation="blurInUp" by="character" once> */}

            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              AI-powered end-to-end patient journeys
              <h1 className="text-transparent bg-clip-text bg-[#01BAA7]">
                for ambitious Indian doctors
              </h1>

            </h1>
            {/* </TextAnimate> */}
            <p className="text-base sm:text-[22px] text-gray-600 leading-relaxed">
              We help doctors in India earn more, retain patients better, and
              stand out from competitors using a simple AI layer on top of existing workflows, plus a
              clinic dashboard and <span className="text-[#01BAA7] text-base sm:text-[22px] leading-relaxed">a virtual clinic dashboard</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 text-sm sm:px-8 py-3 sm:py-4 border border-[#01BAA7] text-[#01BAA7] rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <PhoneCall className="w-5 h-5" />
                Talk to the Founders
                {/* <ArrowRight className="w-5 h-5" /> */}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 text-sm sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-[#01BAA7] hover:text-[#01BAA7] transition-colors"
              >
                <Play className="w-5 h-5" />
                View Demo
              </motion.button>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-3">
              {[
                { value: '3x', label: 'more patients volume' },
                { value: '50%', label: 'time saved per consultation' },
                { value: '95%', label: 'patient satisfaction rate' }
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



          {/* RIGHT: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex items-center justify-center lg:justify-center lg:w-1/2"
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
                className="w-[200px] sm:w-[220px] lg:w-[240px] h-[350px] sm:h-[400px] lg:h-[448px] mx-auto"
              >
                <div className="absolute inset-0 bg-white/90 overflow-hidden pt-12 px-3 pb-4 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100 mb-2">
                    <img
                      src="/doc.avif"
                      alt="Doctor"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-gray-900">{currentChat.doctorName}</div>
                      <div className="text-[10px] text-[#01BAA7] font-medium">{currentChat.specialty}</div>
                    </div>
                  </div>

                  {/* Messages */}
                  <motion.div
                    key={currentSpecialtyIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-3 overflow-hidden"
                  >
                    {currentChat.messages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.8 }}
                        className={`max-w-[85%] text-[10px] sm:text-xs px-2 py-1.5 rounded-2xl ${msg.type === 'user'
                          ? 'bg-[#01BAA7] text-white ml-auto rounded-tr-none'
                          : 'bg-gray-100 text-gray-800 rounded-tl-none'
                          }`}
                      >
                        <p>{msg.text}</p>
                        <span className={`text-[10px] mt-1 block ${msg.type === 'user' ? 'text-emerald-100' : 'text-gray-400'
                          }`}>
                          {msg.time}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Iphone>
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
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'Before Treatment',
      description: 'AI collects patient history through WhatsApp. Doctors receive clean summaries.',
      features: ['Intake & history', 'Report uploads', 'Pre-consultation prep'],
      video: '/step1.mp4' // Placeholder
    },
    {
      title: 'During Treatment',
      description: 'Patients ask questions anytime. AI provides validated responses.',
      features: ['24/7 patient support', 'Educational content', 'Adherence tracking'],
      video: '/step2.mp4' // Placeholder
    },
    {
      title: 'After Treatment',
      description: 'Automated follow-ups and personalized care reminders.',
      features: ['Recovery tracking', 'Long-term care', 'Referral generation'],
      video: '/step3.mp4' // Placeholder
    }
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % phases.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView, phases.length]);

  return (
    <section ref={ref} className="py-12 sm:py-8 bg-gradient-to-br from-emerald-50 via-white to-cyan-50" id="features">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Complete care journey in{' '}
            <span className="text-transparent bg-clip-text bg-[#01BAA7]">
              three simple phases
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-center items-center ">
          {/* Left Column: Content */}
          <div className="w-full md:w-[55%]">
            {/* Progress Bar */}
            <div className="w-[40%] h-1 bg-gray-200 rounded-full mb-8 overflow-hidden">
              <motion.div
                key={activePhase}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-[#01BAA7]"
              />
            </div>

            <div className="relative min-h-[300px]">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="text-4xl font-bold text-[#01BAA7] mb-4">0{activePhase + 1}</div>
                <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900">{phases[activePhase].title}</h3>
                <p className="text-[21px] text-gray-600 mb-8 leading-relaxed">{phases[activePhase].description}</p>
                <ul className="space-y-4">
                  {phases[activePhase].features.map((feature, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + j * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#01BAA7]" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-[21px]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-[40%]">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full relative max-w-sm sm:max-w-md md:max-w-xl  aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-white"
              // className="relative aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
               <video
                key={phases[activePhase].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={phases[activePhase].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
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
    <section ref={ref} className="py-16 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
            Free for doctors and patients,{' '}
            <span className="text-transparent bg-clip-text bg-[#01BAA7]">
              powered by partnerships
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden flex flex-col gap-2 md:gap-10 md:flex-row"
          >
            <div className="flex-1 p-8 md:p-0">
              <div className="w-14 h-14 rounded-xl bg-sky-300 flex items-center justify-center mb-6">
                <User2Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">100% Free for Users</h3>
              <p className="text-gray-600 leading-loose text-[21px]">
                Both doctors and patients get full access to our AI-powered platform at no cost. No subscriptions, no hidden fees, no barriers to better healthcare.
              </p>
            </div>
            <div className="w-full md:w-[40%] h-64 md:h-auto min-h-[300px]">
              <img
                src="/free.avif"
                alt="Free for users"
                className="w-full  rounded-md shadow h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-hidden flex flex-col md:flex-row"
          >
            <div className="flex-1 p-8 md:p-0">
              <div className="w-14 h-14 rounded-xl bg-[#01BAA7] flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Revenue Model</h3>
              <p className="text-gray-600 leading-loose text-[21px] mb-4">
                Revenue comes from pharma and medical device companies through carefully curated ads shown only on the doctor's interface.
              </p>
              <div className="flex items-center gap-2 text-sm sm:text-[20px] text-[#01BAA7] font-medium">
                <CheckCircle2 className="w-5 h-5" />
                Patient interface remains 100% ad-free
              </div>
            </div>
            <div className="w-full md:w-[40%] h-64 md:h-auto min-h-[300px]">
              <img
                src="/model.avif"
                alt="Revenue model"
                className="w-full h-full object-cover  rounded-md shadow"
              />
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
            <span className="text-transparent bg-clip-text bg-[#01BAA7]">
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
                <reason.icon className={`w-6 h-6 text-gray-800`} />
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
            <span className="text-transparent bg-clip-text bg-[#01BAA7]">
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
              <div className="w-16 h-16 rounded-full bg-[#01BAA7] flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Healthcare Expertise</h3>
              <p className="text-md text-gray-600">Experience building digital and AI solutions in healthcare</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#01BAA7] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Deep Market Understanding</h3>
              <p className="text-md text-gray-600">Deep understanding of Indian clinic workflows and needs</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#01BAA7] flex items-center justify-center mx-auto mb-4">
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
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
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
    <section id="cta-section" className="py-16 sm:py-24 bg-[#01BAA7] relative overflow-hidden">
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
            <PhoneCall className="w-5 h-5" />
              Request Investor Call
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