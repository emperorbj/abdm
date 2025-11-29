"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Baby, Heart, Sparkles, Smile, Activity } from "lucide-react"

interface Item {
  name: string
  icon: React.ReactNode
  color: string
  hoverBg: string
  link: string
}

const specialties = [
  {
    name: "Dermatology",
    icon: <Sparkles className="w-4 h-4" />,
    color: "#10B981",
    hoverBg: "bg-emerald-500/20",
    link: "/specialty/dermatology",
  },
  {
    name: "Dentistry",
    icon: <Smile className="w-4 h-4" />,
    color: "#3B82F6",
    hoverBg: "bg-blue-500/20",
    link: "/specialties/dentistry",
  },
  {
    name: "Diabetology",
    icon: <Activity className="w-4 h-4" />,
    color: "#F59E0B",
    hoverBg: "bg-amber-500/20",
    link: "/specialties/diabetology",
  },
  {
    name: "Pediatrics",
    icon: <Baby className="w-4 h-4" />,
    color: "#EF4444",
    hoverBg: "bg-red-500/20",
    link: "/specialties/pediatrics",
  },
  {
    name: "Pregnancy Care",
    icon: <Baby className="w-4 h-4" />,
    color: "#EC4899",
    hoverBg: "bg-pink-500/20",
    link: "/specialty/obstetrics",
  },
  {
    name: "Fertility",
    icon: <Heart className="w-4 h-4" />,
    color: "#8B5CF6",
    hoverBg: "bg-purple-500/20",
    link: "/specialties/fertility",
  },
]

const SpecialtyBadge = ({ name, icon, color, hoverBg, link }: Item) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={link}
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Badge
        className={cn(
          "relative px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 ease-out",
          "border-2 backdrop-blur-sm flex items-center justify-start gap-2",
          "hover:scale-105 hover:shadow-lg",
          isHovered ? hoverBg : "bg-gray-100 dark:bg-gray-800/50",
          "text-gray-800 dark:text-gray-200"
        )}
        style={{
          borderColor: isHovered ? color : "rgba(0,0,0,0.15)",
        }}
      >
        <div
          className="transition-colors duration-300 flex-shrink-0"
          style={{ color: isHovered ? color : "#374151" }}
        >
          {icon}
        </div>
        <span
          className="transition-colors duration-300 font-medium whitespace-nowrap"
          style={{ color: isHovered ? color : "#374151" }}
        >
          {name}
        </span>
        <CheckCircle2
          className={cn(
            "w-4 h-4 transition-all duration-300 flex-shrink-0",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}
          style={{ color: color }}
        />
        
        {/* Glassmorphism overlay effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-md transition-opacity duration-300 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: `linear-gradient(135deg, ${color}15, ${color}05)`,
            backdropFilter: "blur(8px)",
          }}
        />
      </Badge>
    </a>
  )
}

export function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-transparent p-6",
        className
      )}
    >
      <h2 className="text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-900">
        Our Specialties
      </h2>
      
      <div className="flex flex-wrap justify-center gap-3">
        {specialties.map((item, idx) => (
          <SpecialtyBadge {...item} key={idx} />
        ))}
      </div>
    </div>
  )
}