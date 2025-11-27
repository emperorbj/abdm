import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Icon wrapper component for consistent styling
const IconWrapper = ({ children, size = "w-12 h-12" }:{children: React.ReactNode, size?: string}) => (
  <div className={`${size} rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-emerald-100`}>
    {children}
  </div>
);




// Specialty icons as components
const SpecialtyIcons = {
  pregnancy: () => (
    <IconWrapper>
      <img src="/pregnancy.png" alt="pregnancy" className="w-10 h-10" />
    </IconWrapper>
  ),
  pediatrics: () => (
    <IconWrapper>
      <img src="/pediatrics.png" alt="pediatrics" className="w-10 h-10" />
    </IconWrapper>
  ),
  skin: () => (
    <IconWrapper>
      <img src="/hydrated-skin.png" alt="skin" className="w-10 h-10" />
    </IconWrapper>
  ),
  glucose: () => (
    <IconWrapper>
      <img src="/glucose-meter.png" alt="glucose" className="w-10 h-10" />
    </IconWrapper>
  ),
  fertilization: () => (
    <IconWrapper size="w-10 h-10">
       <img src="/fertilization.png" alt="fertilization" className="w-8 h-8" />
    </IconWrapper>
  ),
  dentistry: () => (
    <IconWrapper size="w-10 h-10">
    <img src="/dentistry.png" alt="dentistry" className="w-8 h-8" />
    </IconWrapper>
  ),
};

// Single orbiting icon component
const OrbitingIcon = ({ 
  Icon, 
  radius, 
  duration, 
  delay = 0, 
  reverse = false 
}:any) => {
  return (
    <motion.div
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
      }}
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      <div
        style={{
          transform: `translate(-50%, -50%) translateY(-${radius}px) rotate(${reverse ? '' : '-'}${360}deg)`,
        }}
      >
        <motion.div
          animate={{
            rotate: reverse ? 360 : -360,
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            delay: delay,
          }}
        >
          <Icon />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main component
export default function OrbitingSpecialties() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Outer orbit configuration
  const outerIcons = [
    { Icon: SpecialtyIcons.pregnancy, delay: 0 },
    { Icon: SpecialtyIcons.pediatrics, delay: 5 },
    { Icon: SpecialtyIcons.skin, delay: 10 },
    { Icon: SpecialtyIcons.glucose, delay: 15 },
  ];

  // Inner orbit configuration
  const innerIcons = [
    { Icon: SpecialtyIcons.fertilization, delay: 0 },
    { Icon: SpecialtyIcons.dentistry, delay: 7.5 },
  ];

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Orbit circles (visual guides) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="border border-emerald-100 rounded-full" 
          style={{ width: '320px', height: '320px' }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="border border-emerald-100 rounded-full" 
          style={{ width: '200px', height: '200px' }}
        />
      </div>

      {/* Center element */}
      <div className="relative z-10">
        <motion.div 
          className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center shadow-xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
        </motion.div>
      </div>

      {/* Outer orbit icons */}
      {outerIcons.map((config, index) => (
        <OrbitingIcon
          key={`outer-${index}`}
          Icon={config.Icon}
          radius={160}
          duration={20}
          delay={config.delay}
        />
      ))}

      {/* Inner orbit icons - reverse direction */}
      {innerIcons.map((config, index) => (
        <OrbitingIcon
          key={`inner-${index}`}
          Icon={config.Icon}
          radius={100}
          duration={15}
          delay={config.delay}
          reverse
        />
      ))}

    
    </div>
  );
}