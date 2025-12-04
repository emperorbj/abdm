'use client'

import React, { useState, useEffect } from 'react';
import {
  PlayCircle, Users, Zap, Infinity, Heart, CheckCircle, Microscope, Check,
  CalendarHeart, Baby, Activity, Briefcase, Smile, Layers, LayoutDashboard,
  Smartphone, ArrowLeft, Bot, MapPin, Sparkles, TrendingUp, Clock, Shield,
  PhoneCall, Target, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Image from 'next/image';


const journeyStages = [
  {
    id: 'adolescence',
    label: 'Adolescence',
    title: 'Adolescent Health',
    image: '/adol.png',
    icon: Sparkles,
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    shadow: 'shadow-pink-100',
    features: ['Cycle tracking & prediction', 'Anemia & iron awareness', 'Puberty education & hygiene']
  },
  {
    id: 'pre-pregnancy',
    label: 'Pre-pregnancy',
    title: 'Pre-Conception',
    image: '/pre-preg.png',
    icon: CalendarHeart,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    shadow: 'shadow-rose-100',
    features: ['Ovulation timing support', 'Preconception screening nudges', 'Lifestyle & diet guidance']
  },
  {
    id: 'pregnancy',
    label: 'Pregnancy',
    title: 'Pregnancy Care',
    image: '/preg.png',
    icon: Baby,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    shadow: 'shadow-emerald-100',
    features: ['24/7 trimester support', 'Anomaly scan reminders', 'Dietary & supplement tracking']
  },
  {
    id: 'delivery',
    label: 'Delivery',
    title: 'Delivery Readiness',
    image: '/del.png',
    icon: Briefcase,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    shadow: 'shadow-blue-100',
    features: ['Digital admission checklist', 'Precise due-date alerts', 'Automated family updates']
  },
  {
    id: 'post-delivery',
    label: 'Post-delivery',
    title: 'Post-Partum Care',
    image: '/post.png',
    icon: Smile,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    shadow: 'shadow-orange-100',
    features: ['Recovery symptom tracking', 'Breastfeeding support', 'Vaccination reminders']
  },
  {
    id: 'infertility',
    label: 'Infertility',
    title: 'Infertility Support',
    image: '/infert.png',
    icon: Microscope,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    shadow: 'shadow-indigo-100',
    features: ['Treatment plan explanations', 'Medication & shot reminders', 'Emotional wellness check-ins']
  },
  {
    id: 'birth-spacing',
    label: 'Birth Spacing',
    title: 'Family Planning',
    image: '/spacing.png',
    icon: Clock,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    shadow: 'shadow-cyan-100',
    features: ['Contraception guidance', 'Health spacing advice', 'Follow-up appointment nudges']
  },
  {
    id: 'menopause',
    label: 'Menopause',
    title: 'Menopause Care',
    image: '/menop.png',
    icon: Activity,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    shadow: 'shadow-purple-100',
    features: ['Symptom tracking & support', 'Supplement/therapy guidance', 'Routine screening reminders']
  }
];

const chatPhases = [
  {
    phase: 'Adolescence',
    doctor: 'Dr. Piyush',
    conversations: [
      {
        message: "Hi Priya! I noticed your cycle is a bit irregular. Let's track your iron intake?",
        reply: "Yes, I've been feeling tired lately.",
        time: '09:41',
        replyTime: '09:42'
      },
      {
        message: "Good news! Your iron levels are improving and your cycles are more regular now.",
        reply: "That's great to hear! I'm feeling much more energetic.",
        time: '11:20',
        replyTime: '11:21'
      }
    ]
  },
  {
    phase: 'Pregnancy',
    doctor: 'Dr. Piyush',
    conversations: [
      {
        message: "Congratulations! Now that you're pregnant, it's week 12. Have you scheduled your NT scan yet?",
        reply: "Not yet. Can you send recommendations?",
        time: '10:30',
        replyTime: '10:31'
      },
      {
        message: "Your NT scan looks perfect! As you approach delivery, let's discuss your birth plan.",
        reply: "I'd love that. I'm getting nervous but excited.",
        time: '15:45',
        replyTime: '15:46'
      }
    ]
  },
  {
    phase: 'Post-delivery',
    doctor: 'Dr. Piyush',
    conversations: [
      {
        message: "Congratulations on your beautiful baby! How is the breastfeeding going? Any pain or discomfort?",
        reply: "It's getting better, thanks for checking.",
        time: '14:15',
        replyTime: '14:16'
      },
      {
        message: "Wonderful! Your postpartum recovery is going well. Don't forget your 6-week checkup.",
        reply: "Already scheduled. Thank you for all the support!",
        time: '16:30',
        replyTime: '16:31'
      }
    ]
  },
  {
    phase: 'Menopause',
    doctor: 'Dr. Piyush',
    conversations: [
      {
        message: "Years later... I see you're entering menopause. Are you experiencing any hot flashes this week?",
        reply: "A few times at night.",
        time: '19:20',
        replyTime: '19:21'
      },
      {
        message: "Let's work on managing those symptoms. How about we try some hormone therapy options?",
        reply: "Yes, I'm open to exploring what might help.",
        time: '10:15',
        replyTime: '10:16'
      }
    ]
  }
];

// const chatPhases = [
//   {
//     phase: 'Adolescence',
//     doctor: 'Dr. Piyush',
//     message: "Hi Priya! I noticed your cycle is a bit irregular. Let's track your iron intake?",
//     reply: "Yes, I've been feeling tired lately.",
//     time: '09:41'
//   },
//   {
//     phase: 'Pregnancy',
//     doctor: 'Dr. Piyush',
//     message: "It's week 12. Have you scheduled your NT scan yet?",
//     reply: "Not yet. Can you send recommendations?",
//     time: '10:30'
//   },
//   {
//     phase: 'Post-delivery',
//     doctor: 'Dr. Piyush',
//     message: "How is the breastfeeding going? Any pain or discomfort?",
//     reply: "It's getting better, thanks for checking.",
//     time: '14:15'
//   },
//   {
//     phase: 'Menopause',
//     doctor: 'Dr. Piyush',
//     message: "Are you experiencing any hot flashes this week?",
//     reply: "A few times at night.",
//     time: '19:20'
//   }
// ];

export default function ObstetricsLanding() {
  const [activeStage, setActiveStage] = useState(journeyStages[0]);
  const [chatIndex, setChatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setChatIndex((prev) => (prev + 1) % chatPhases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white text-slate-600 antialiased selection:bg-green-100 selection:text-[#01BAA7]">
        {/* Hero Section */}
        <section id='feat' className="md:px-15 pt-32 pb-12 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 md:pr-[200px] items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left px-5 md:px-0">
                <div className="inline-flex border border-gray-900 items-center gap-2 px-3 py-1 rounded-full shadow-lg bg-green-50  text-[#01BAA7] text-xs font-medium mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01BAA7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01BAA7]"></span>
                  </span>
                  Now available for pilot clinics
                </div>

                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Support the journey of every woman in your clinic with AI on <span className="text-[#01BAA7]">WhatsApp</span>.
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your own AI virtual clinic and nurse to guide each woman from adolescence to menopause and beyond — from history-taking to queries and follow-ups.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button className="bg-[#01BAA7] px-6 text-sm sm:px-8 py-3 sm:py-4 border border-[#01BAA7] 
                text-white rounded-xl font-semibold 
                flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                    <PlayCircle className="w-4 h-4" />
                    Watch demo
                  </Button>

                  <Button className="flex items-center gap-2 px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all">
                   <PhoneCall className="w-5 h-5" />
                    Book a pilot
                  </Button>
                </div>

                {/* Journey Tracker - Desktop */}
                <div className="hidden lg:block">
                  <div className="flex items-center justify-between relative max-w-xl">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
                    {chatPhases.map((phase, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 bg-white px-2 transition-all duration-500">
                        <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${i === chatIndex ? 'bg-[#01BAA7] border-[#01BAA7] scale-125' : 'bg-white border-slate-300'}`}></div>
                        <span className={`text-[10px] font-medium uppercase tracking-wider transition-colors duration-500 ${i === chatIndex ? 'text-[#01BAA7]' : 'text-slate-400'}`}>{phase.phase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content - Rotating Chat */}
<div className="bg-gray-300 relative mx-auto lg:mr-0 w-[200px] h-[400px] md:w-[220px] md:h-[410px] rounded-[3rem] shadow-2xl border-[4px] border-slate-900 overflow-hidden ring-1 ring-slate-900/10">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
  <div className="bg-red-50 w-full h-full flex flex-col pt-0 pb-0 overflow-hidden relative">
    {/* WhatsApp Header */}
    <div className="bg-[#01BAA7] h-16 w-full flex items-center px-4 gap-3 text-white absolute top-0 z-10">
      <ArrowLeft className="w-5 h-5" />
      <div className="flex items-center gap-2 mt-6">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-medium leading-none">{chatPhases[chatIndex].doctor}</div>
          <div className="text-[10px] opacity-80 mt-0.5">Online</div>
        </div>
      </div>
    </div>

    {/* Chat Area */}
    <div className="flex-1 p-4 space-y-4 overflow-y-auto mt-16 bg-[#e5ddd5]">
      <AnimatePresence mode="wait">
        <motion.div
          key={chatIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Map through all conversations in the current phase */}
          {chatPhases[chatIndex].conversations.map((conv, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-start">
                <div className="bg-white rounded-lg rounded-tl-none p-1.5 shadow-sm max-w-full text-[9px] text-slate-800 leading-relaxed relative">
                  {conv.message}
                  <span className="block text-[9px] text-slate-400 text-right mt-1">{conv.time}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-1.5 shadow-sm max-w-[85%] text-[9px] text-slate-800 leading-relaxed">
                  {conv.reply}
                  <span className="block text-[9px] text-slate-500 text-right mt-1">{conv.replyTime}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Value Strip */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-slate-900">
                We deliver <span className="text-[#01BAA7]">best-in-class value</span> to our clinics
              </h2>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-5 gap-6">
              {[
                { value: '2-3x', label: 'Increase in patient volume', icon: Users },
                { value: '100%', label: 'Automated history taking', icon: Bot },
                { value: '50%', label: 'Consultation time saved', icon: Zap },
                { value: '95%', label: 'Patient satisfaction rate', icon: Heart },
                { value: '30-50%', label: 'Reduction in attrition', icon: TrendingUp }
              ].map((metric, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center md:text-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow gap-4 md:gap-0">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-0 md:mb-3 text-[#01BAA7] flex-shrink-0">
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex flex-row md:flex-col items-center gap-4">
                    <div className="text-2xl font-bold text-slate-900 mb-0 md:mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-500 font-medium leading-tight text-right md:text-center">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Women's Health Journey Section */}
        <section id='phase' className="py-24 bg-slate-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Why clinics use this for <span className="text-[#01BAA7]">Women&apos;s Health</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                By automating <strong className="text-slate-700">100% of history taking</strong> and providing continuous support, we help you save <strong className="text-slate-700">50% consultation time</strong> and drive a <strong className="text-slate-700">2-3x increase in patient volume</strong>. Our full-lifecycle approach ensures <strong className="text-slate-700">95% patient satisfaction</strong> and reduces attrition by <strong className="text-slate-700">30-50%</strong>.
              </p>
            </div>

            {/* Sleek Timeline */}
            <div className="mb-16 relative">
              {/* Continuous Line Background */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 
              rounded-full hidden md:block"></div>

              <div className="flex overflow-x-auto pb-8 md:pb-0 md:justify-between gap-8 
              md:gap-0 px-4 hide-scrollbar relative z-10">
                {journeyStages.map((stage, i) => {
                  const isActive = activeStage.id === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(stage)}
                      className="group flex flex-col items-center min-w-[100px] 
                      focus:outline-none"
                    >
                      <div
                        className={`
                        w-10 h-10 rounded-full mt-2 flex items-center justify-center 
                        border transition-all duration-300 mb-4 relative z-10
                        ${isActive
                            ? `bg-white ${stage.border} shadow-lg scale-110 ring-1 ring-opacity-20 ${stage.bg.replace('bg-', 'ring-')}`
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }
                      `}
                      >
                        <stage.icon
                          className={`w-6 h-6 transition-colors duration-300 ${isActive ? stage.color : 'text-slate-400 group-hover:text-slate-600'}`}
                        />
                        {/* {isActive && (
                          <motion.div
                            layoutId="activeGlow"
                            className={`absolute inset-0 rounded-2xl bg-current opacity-5 ${stage.color}`}
                          />
                        )} */}
                      </div>
                      <span
                        className={`
                        text-xs font-bold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap
                        ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-500'}
                      `}
                      >
                        {stage.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feature Card */}
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`
                  relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-white before:via-white before:to-slate-50/50
                `}
                >
                  <div className="relative z-10 grid md:grid-cols-12 gap-0">
                    {/* Content Side */}
                    <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${activeStage.bg} flex items-center justify-center`}>
                          <activeStage.icon className={`w-6 h-6 ${activeStage.color}`} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">{activeStage.title}</h3>
                      </div>

                      <div className="space-y-5">
                        {activeStage.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                          >
                            <div className={`mt-1 w-5 h-5 rounded-full ${activeStage.bg} flex items-center justify-center flex-shrink-0`}>
                              <Check className={`w-3 h-3 ${activeStage.color}`} strokeWidth={3} />
                            </div>
                            <span className="text-lg text-slate-700 font-medium leading-snug">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className={`md:col-span-5 relative min-h-[300px] md:min-h-full ${activeStage.bg}`}>
  <div className="absolute inset-0 p-8">
    <div className="relative w-full h-full p-0">
      <img
        src={activeStage.image}
        alt={activeStage.label}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>
                    {/* <div className={`md:col-span-5 relative overflow-hidden min-h-[300px] md:min-h-full ${activeStage.bg}`}> */}
                  
                      {/* <div className="relative w-full h-full p-8">
                        <div className="relative w-full h-full">
                          <img
                            src={activeStage.image}
                            alt={activeStage.label}
                            className="object-contain"
                          />
                        </div>
                      </div> */}

                    {/* </div> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              Free for doctors and patients, <span className="text-[#01BAA7]">powered by partnerships</span>
            </h2>
            <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
              We partner with leading healthcare organizations to make premium care management accessible to everyone.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-4xl font-bold text-slate-900 mb-2">Free</div>
                <div className="text-sm font-medium text-slate-500 mb-6">For Doctors & Patients</div>
                <div className="aspect-video bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/free.avif" alt="Free for users" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-slate-400">Full access to all features</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-4xl font-bold text-slate-900 mb-2">Funded</div>
                <div className="text-sm font-medium text-slate-500 mb-6">By Partners</div>
                <div className="aspect-video bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-center overflow-hidden">
                  <Shield className="w-10 h-10 text-slate-300" />
                </div>
                <p className="text-xs text-slate-400">Pharma, Devices & Payers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now / Why Us - Mirrored from Homepage */}
        <section id='about' className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#01BAA7]/20 flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[#01BAA7]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Why Now?</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  The perfect convergence of patient expectations, physician needs, and what technology can offer today.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#01BAA7]/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#01BAA7]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Why Us?</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Deep understanding of Indian clinic workflows, healthcare expertise, and strong product capability.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#01BAA7]/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#01BAA7]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Pilots & Capital</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We are opening pilots for select clinics and raising capital to expand our women's health capabilities.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-[#01BAA7] hover:bg-[#01BAA7]/90 text-white">
                    Book a pilot
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent">
                    Get investor deck
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <div>© 2024 Obstetrics AI. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              {['Privacy', 'Terms', 'Contact'].map(link => (
                <a key={link} href="#" className="hover:text-slate-600">{link}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}