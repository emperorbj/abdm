import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type BadgeMap = {
  [specialty: string]: {
    label: string;
    borderClass: string;
    textClass: string;
    bgClass?: string;
  };
};

const BADGE_STYLES: BadgeMap = {
  Gynecology: {
    label: "Gynecology",
    borderClass: "border-pink-400",
    textClass: "text-pink-600",
    bgClass: "bg-pink-50/80",
  },
  Pediatrics: {
    label: "Pediatrics",
    borderClass: "border-amber-400",
    textClass: "text-amber-700",
    bgClass: "bg-amber-50/80",
  },
  Dermatology: {
    label: "Dermatology",
    borderClass: "border-violet-400",
    textClass: "text-violet-700",
    bgClass: "bg-violet-50/80",
  },
    Diabetology: {
    label: "Diabetology",
    borderClass: "border-orange-400",
    textClass: "text-orange-700",
    bgClass: "bg-orange-50/80",
  },
    Dentistry: {
    label: "Dentistry",
    borderClass: "border-sky-400",
    textClass: "text-sky-700",
    bgClass: "bg-sky-50/80",
  },
  // fallback style
  default: {
    label: "Specialty",
    borderClass: "border-slate-300",
    textClass: "text-slate-700",
    bgClass: "bg-white/80",
  },
};

type Props = {
  specialty: string;
  doctorName?: string;
  index: number; // used as key to animate change
};

export const SpecialtyBadge: React.FC<Props> = ({ specialty, doctorName, index }) => {
  const style = BADGE_STYLES[specialty] ?? BADGE_STYLES.default;

  return (
    <div className="mt-4 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // animate when index changes
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border shadow-sm ${style.borderClass} ${style.bgClass ?? ""
            }`}
          role="status"
          aria-live="polite"
        >
          {/* colored left pill / icon */}
          {/* <span */}
            {/* className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${style.textClass} bg-white/90 shrink-0`}
            aria-hidden */}
          {/* > */}
            {/* simple two-letter abbreviation */}
            {/* <span className="text-[11px] font-semibold">
              {specialty.split(" ").map(s => s[0]).slice(0,2).join("")}
            </span> */}
          {/* </span> */}

          {/* text */}
          <div className="text-left leading-tight">
            <div className={`text-sm font-semibold ${style.textClass}`}>
              {style.label}
            </div>
            {/* {doctorName && (
              <div className="text-[11px] text-gray-500 -mt-0.5">
                {doctorName}
              </div> */}
            {/* )} */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
