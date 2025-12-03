'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Stethoscope, FileText, Activity } from 'lucide-react';

const SafetyControl = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const features = [
        {
            icon: Stethoscope,
            title: 'Doctor-Led Decisions',
            description: 'Doctors retain full control over diagnosis and care decisions.',
            color: 'text-emerald-500',
            bg: 'bg-emerald-100'
        },
        {
            icon: FileText,
            title: 'AI Summarisation',
            description: 'AI assists with data collection and summarisation to save time.',
            color: 'text-cyan-500',
            bg: 'bg-cyan-100'
        },
        {
            icon: Activity,
            title: 'Smart Triage',
            description: 'Intelligent triage ensures urgent cases get immediate attention.',
            color: 'text-blue-500',
            bg: 'bg-blue-100'
        }
    ];

    return (
        <section ref={ref} className="py-16 sm:py-20 bg-white md:px-10">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center justify-center p-2 bg-emerald-50 rounded-full mb-4">
                        <ShieldCheck className="w-6 h-6 text-[#01BAA7] mr-2" />
                        <span className="text-[#01BAA7] font-semibold text-sm uppercase tracking-wide">Clinical Safety First</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6 text-gray-900">
                        Safety & <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-cyan-500">Clinical Control</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Doctors retain full control over diagnosis and care decisions. Our AI assists with data, summarisation and triage.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SafetyControl;
