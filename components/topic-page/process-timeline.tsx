"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  ArrowRight,
  MessageCircle,
  ClipboardCheck,
  Calendar,
  Trophy,
  Dumbbell,
  Search,
  FileText,
  Play,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardCheck,
  Calendar,
  Trophy,
  Dumbbell,
  Search,
  FileText,
  Play,
};

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  accentColor?: string;
  title?: string;
  subtitle?: string;
}

export function ProcessTimeline({
  steps,
  accentColor = "green",
  title = "Kako izgleda proces?",
  subtitle = "Od prvog kontakta do rezultata — jednostavan put do cilja"
}: ProcessTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses: Record<string, { gradient: string; bg: string; text: string; border: string; line: string }> = {
    green: { gradient: "from-green-600 to-emerald-600", bg: "bg-green-100", text: "text-green-600", border: "border-green-200", line: "bg-green-200" },
    orange: { gradient: "from-orange-500 to-amber-500", bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", line: "bg-orange-200" },
    rose: { gradient: "from-rose-500 to-pink-500", bg: "bg-rose-100", text: "text-rose-600", border: "border-rose-200", line: "bg-rose-200" },
    blue: { gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", line: "bg-blue-200" },
    purple: { gradient: "from-purple-500 to-violet-500", bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", line: "bg-purple-200" },
  };

  const colors = colorClasses[accentColor] || colorClasses.green;

  return (
    <section ref={ref} className="py-16 my-8">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line - desktop */}
        <div className={`hidden md:block absolute top-[60px] left-0 right-0 h-1 ${colors.line} rounded-full`} />

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Mobile connecting line */}
              {index < steps.length - 1 && (
                <div className={`md:hidden absolute left-6 top-16 bottom-0 w-0.5 ${colors.line}`} />
              )}

              {/* Step card */}
              <div className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Step number badge */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  {(() => { const Icon = iconMap[step.icon]; return Icon ? <Icon className={`w-6 h-6 ${colors.text}`} /> : null; })()}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>

                {/* Duration badge if provided */}
                {step.duration && (
                  <div className={`mt-3 inline-flex items-center gap-1 ${colors.bg} px-3 py-1 rounded-full`}>
                    <span className={`text-xs font-medium ${colors.text}`}>{step.duration}</span>
                  </div>
                )}

                {/* Arrow to next step - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[60px] -right-2 transform translate-x-1/2 z-10">
                    <div className={`w-6 h-6 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center`}>
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final step indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: steps.length * 0.15 }}
          className="flex justify-center mt-8"
        >
          <div className={`flex items-center gap-3 bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-full shadow-lg`}>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <span className="font-semibold">Rezultati!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
