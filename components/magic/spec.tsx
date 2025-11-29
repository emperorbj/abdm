"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  "/dem.png",
  "/dent.png",
  "/diab.png",
  "/child.png",
  "/preg.png",
  "/fert.png",
]

export function RotatingSpecialtyImages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images[currentIndex]}
              alt={`Specialty ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}