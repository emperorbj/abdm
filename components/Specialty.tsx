import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { CheckCircle2, Baby, Heart, Sparkles, Smile, Activity } from "lucide-react"

const specialties = [
  {
    name: "Dermatology",
    icon: <Sparkles className="w-4 h-4" />,
    color: "#10B981",
    hoverBg: "bg-emerald-500/20",
    show: false,
    link: "",
    image: "/dem.avif",
  },
  {
    name: "Dentistry",
    icon: <Smile className="w-4 h-4" />,
    color: "#3B82F6",
    hoverBg: "bg-blue-500/20",
    show: false,
    link: "",
    image: "/dent.png",
  },
  {
    name: "Diabetology",
    icon: <Activity className="w-4 h-4" />,
    color: "#F59E0B",
    hoverBg: "bg-amber-500/20",
    show: false,
    link: "",
    image: "/diab.png",
  },
  {
    name: "Pediatrics",
    icon: <Baby className="w-4 h-4" />,
    color: "#EF4444",
    hoverBg: "bg-red-500/20",
    show: false,
    link: "",
    image: "/child.png",
  },
  {
    name: "Women's Health",
    icon: <Baby className="w-4 h-4" />,
    color: "#EC4899",
    hoverBg: "bg-pink-500/20",
    show: true,
    link: "/specialty/obstetrics",
    image: "/preg.png",
  },
//   {
//     name: "Fertility",
//     icon: <Heart className="w-4 h-4" />,
//     color: "#8B5CF6",
//     hoverBg: "bg-purple-500/20",
//     link: "/specialties/fertility",
//     image: "/fert.png",
//   },
]

const SpecialtyBadge = ({ specialty, isActive, onHover }: any) => {
  const [isHovered, setIsHovered] = useState(false)
    const isLinkEnabled = specialty.show && specialty.link;
  const Component = isLinkEnabled ? 'a' : 'div';

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHover(specialty)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Component
      href={`${specialty.show ? specialty.link : ""}`}
      className="inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 ease-out border-2 backdrop-blur-sm flex items-center justify-start gap-2 rounded-full hover:scale-105 hover:shadow-lg ${
          isActive || isHovered ? specialty.hoverBg : "bg-gray-100"
        }`}
        style={{
          borderColor: isActive || isHovered ? specialty.color : "rgba(0,0,0,0.15)",
        }}
      >
        <div
          className="transition-colors duration-300 flex-shrink-0"
          style={{ color: isActive || isHovered ? specialty.color : "#374151" }}
        >
          {specialty.icon}
        </div>
        <span
          className="transition-colors duration-300 font-medium whitespace-nowrap"
          style={{ color: isActive || isHovered ? specialty.color : "#374151" }}
        >
          {specialty.name}
        </span>
        <CheckCircle2
          className={`w-4 h-4 transition-all duration-300 flex-shrink-0 ${
            isActive || isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ color: specialty.color }}
        />
        
        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none ${
            isActive || isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `linear-gradient(135deg, ${specialty.color}15, ${specialty.color}05)`,
            backdropFilter: "blur(8px)",
          }}
        />
      </div>
    </Component>
  )
}

const SpecialtySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0])

  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
     const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveSpecialty((prev) => {
        const currentIndex = specialties.findIndex(s => s.name === prev.name);
        const nextIndex = (currentIndex + 1) % specialties.length;
        return specialties[nextIndex];
      });
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section ref={ref} id="specialties" className="scroll-mt-20 py-16 bg-gradient-to-br from-gray-50 to-white md:px-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Built for specialties with{' '}
            <span className="text-transparent bg-clip-text bg-[#01BAA7]">
              ongoing care needs
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
Starting with specialties requiring long-term relationship building and
continuous care          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left side - Specialties */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Specialties</h3>
            <div className="flex flex-wrap gap-3">
              {specialties.map((specialty, idx) => (
                <SpecialtyBadge
                  key={idx}
                  specialty={specialty}
                  isActive={activeSpecialty.name === specialty.name}
                  onHover={setActiveSpecialty}
                />
              ))}
            </div>
            <p className="text-[#01BAA7] mt-4">... more coming soon</p>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecialty.name}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={activeSpecialty.image}
                  alt={activeSpecialty.name}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${activeSpecialty.color}20, transparent)`,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialtySection