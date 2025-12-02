'use client'

import React, { useState, useEffect } from 'react';
import {
  PlayCircle, Users, Zap, Infinity, Heart, CheckCircle, Microscope, Check,
  CalendarHeart, Baby, Activity, Briefcase, Smile, Layers, LayoutDashboard,
  Smartphone, ArrowLeft, Bot, MapPin, Sparkles, TrendingUp, Clock, Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyStages = [
  {
    id: 'adolescence',
    label: 'Adolescence',
    title: 'Adolescent Health',
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
    doctor: 'Dr. Sarah',
    message: "Hi Priya! I noticed your cycle is a bit irregular. Let's track your iron intake?",
    reply: "Yes, I've been feeling tired lately.",
    time: '09:41'
  },
  {
    phase: 'Pregnancy',
    doctor: 'Dr. Sarah',
    message: "It's week 12. Have you scheduled your NT scan yet?",
    reply: "Not yet. Can you send recommendations?",
    time: '10:30'
  },
  {
    phase: 'Post-delivery',
    doctor: 'Dr. Sarah',
    message: "How is the breastfeeding going? Any pain or discomfort?",
    reply: "It's getting better, thanks for checking.",
    time: '14:15'
  },
  {
    phase: 'Menopause',
    doctor: 'Dr. Sarah',
    message: "Are you experiencing any hot flashes this week?",
    reply: "A few times at night.",
    time: '19:20'
  }
];

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
    <div className="bg-white text-slate-600 antialiased selection:bg-green-100 selection:text-green-900">
      {/* Hero Section */}
      <section className="pt-32 pb-12 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Now available for pilot clinics
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Support the journey of every woman in your clinic with AI on <span className="text-green-600">WhatsApp</span>.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your own AI virtual clinic and nurse to guide each woman from adolescence to menopause and beyond — from history-taking to queries and follow-ups.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl ring-offset-2 focus:ring-2 ring-slate-900">
                  Book a pilot
                </button>
                <button className="flex items-center gap-2 px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all">
                  <PlayCircle className="w-4 h-4" />
                  Watch demo
                </button>
              </div>

              {/* Journey Tracker - Desktop */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-between relative max-w-xl">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
                  {chatPhases.map((phase, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 bg-white px-2 transition-all duration-500">
                      <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${i === chatIndex ? 'bg-green-500 border-green-500 scale-125' : 'bg-white border-slate-300'}`}></div>
                      <span className={`text-[10px] font-medium uppercase tracking-wider transition-colors duration-500 ${i === chatIndex ? 'text-green-600' : 'text-slate-400'}`}>{phase.phase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Rotating Chat */}
            <div className="relative mx-auto lg:mr-0 w-[320px] h-[640px] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden ring-1 ring-slate-900/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
              <div className="bg-slate-50 w-full h-full flex flex-col pt-12 pb-4 overflow-hidden relative">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] h-16 w-full flex items-center px-4 gap-3 text-white absolute top-0 z-10">
                  <ArrowLeft className="w-5 h-5" />
                  <div className="flex items-center gap-2">
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
                      <div className="flex justify-start">
                        <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] text-xs text-slate-800 leading-relaxed relative">
                          {chatPhases[chatIndex].message}
                          <span className="block text-[9px] text-slate-400 text-right mt-1">{chatPhases[chatIndex].time}</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-3 shadow-sm max-w-[85%] text-xs text-slate-800 leading-relaxed">
                          {chatPhases[chatIndex].reply}
                          <span className="block text-[9px] text-slate-500 text-right mt-1">09:42</span>
                        </div>
                      </div>
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
              We deliver <span className="text-green-600">best-in-class value</span> to our clinics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: '2-3x', label: 'Increase in patient volume', icon: Users },
              { value: '100%', label: 'Automated history taking', icon: Bot },
              { value: '50%', label: 'Consultation time saved', icon: Zap },
              { value: '95%', label: 'Patient satisfaction rate', icon: Heart },
              { value: '30-50%', label: 'Reduction in attrition', icon: TrendingUp }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3 text-green-600">
                  <metric.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                <div className="text-xs text-slate-500 font-medium leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women's Health Journey Section */}
      <section className="py-24 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              End-to-end support of the <span className="text-green-600">women&apos;s health journey</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Comprehensive care management for every stage of life, powered by intelligent automation.
            </p>
          </div>

          {/* Sleek Timeline */}
          <div className="mb-16 relative">
            {/* Continuous Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block"></div>

            <div className="flex overflow-x-auto pb-8 md:pb-0 md:justify-between gap-8 md:gap-0 px-4 hide-scrollbar relative z-10">
              {journeyStages.map((stage, i) => {
                const isActive = activeStage.id === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage)}
                    className="group flex flex-col items-center min-w-[100px] focus:outline-none"
                  >
                    <div
                      className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 mb-4 relative z-10
                        ${isActive
                          ? `bg-white ${stage.border} shadow-lg scale-110`
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }
                      `}
                    >
                      <stage.icon
                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? stage.color : 'text-slate-400 group-hover:text-slate-600'}`}
                      />
                      {isActive && (
                        <motion.div
                          layoutId="activeGlow"
                          className={`absolute inset-0 rounded-2xl bg-current opacity-10 ${stage.color}`}
                        />
                      )}
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
                  <div className={`md:col-span-5 relative overflow-hidden min-h-[300px] md:min-h-full ${activeStage.bg}`}>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      {/* Abstract Visual Representation */}
                      <div className="relative w-full aspect-square max-w-[280px]">
                        <div className={`absolute inset-0 rounded-full opacity-20 blur-3xl ${activeStage.bg.replace('bg-', 'bg-')}-400`}></div>
                        <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 w-full h-full flex flex-col items-center justify-center text-center">
                          <activeStage.icon className={`w-20 h-20 ${activeStage.color} mb-6 opacity-80`} strokeWidth={1.5} />
                          <div className="space-y-2">
                            <div className="h-2 w-24 bg-slate-400/20 rounded-full mx-auto"></div>
                            <div className="h-2 w-16 bg-slate-400/20 rounded-full mx-auto"></div>
                          </div>
                          <div className={`mt-8 px-4 py-2 rounded-full bg-white/60 text-xs font-bold uppercase tracking-widest ${activeStage.color}`}>
                            {activeStage.label}
                          </div>
                        </div>

                        {/* Floating Elements Animation */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center ${activeStage.color}`}
                        >
                          <Bot className="w-8 h-8" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
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
            Free for doctors and patients, <span className="text-green-600">powered by partnerships</span>
          </h2>
          <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
            We partner with leading healthcare organizations to make premium care management accessible to everyone.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-4xl font-bold text-slate-900 mb-2">Free</div>
              <div className="text-sm font-medium text-slate-500 mb-6">For Doctors & Patients</div>
              <div className="aspect-video bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-xs text-slate-400">Full access to all features</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-4xl font-bold text-slate-900 mb-2">Funded</div>
              <div className="text-sm font-medium text-slate-500 mb-6">By Partners</div>
              <div className="aspect-video bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-xs text-slate-400">Pharma, Devices & Payers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now / Why Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Why Now?</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Women's health is experiencing a digital revolution. Patients demand continuous support, and clinics need automation to scale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Why Us?</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We are the only platform that delivers full-journey AI support directly on WhatsApp, where your patients already are.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Pilots & Capital</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We are opening pilots for select clinics and raising capital to expand our women's health capabilities.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                  Join Pilot
                </button>
                <button className="px-4 py-2 border border-slate-600 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  Investor Deck
                </button>
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
  );
}