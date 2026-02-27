"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Dumbbell, Zap, HeartPulse, Apple, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface RelatedTopic {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  gradient: string;
}

const allTopics: RelatedTopic[] = [
  {
    label: "Fizička transformacija",
    description: "Smršaj, izgradi mišiće, oblikuj telo",
    href: "/Fizicka-Transformacija",
    icon: Dumbbell,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    label: "Snaga i performanse",
    description: "Postani jači, brži, eksplozivniji",
    href: "/Snaga-i-Performanse",
    icon: Zap,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    label: "Zdravlje i funkcionalnost",
    description: "Život bez bola i ograničenja",
    href: "/Zdravlje-i-Funkcionalnost",
    icon: HeartPulse,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    label: "Dijeta i suplementi",
    description: "Ishrana koja podržava ciljeve",
    href: "/Dijeta-i-Suplementi",
    icon: Apple,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Online saradnja",
    description: "Treniraj uz podršku bilo gde",
    href: "/Online-Saradnja",
    icon: Globe,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-violet-500",
  },
];

interface RelatedTopicsProps {
  currentHref: string;
  title?: string;
}

export function RelatedTopics({
  currentHref,
  title = "Istražite i druge oblasti"
}: RelatedTopicsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Filter out current topic
  const relatedTopics = allTopics.filter(topic => topic.href !== currentHref);

  return (
    <section ref={ref} className="py-12 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <Link
            href="/#topics"
            className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1 group"
          >
            Sve oblasti
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTopics.map((topic, index) => (
            <motion.div
              key={topic.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={topic.href} className="group block">
                <div className="relative bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-10 h-10 ${topic.iconBg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <topic.icon className={`w-5 h-5 ${topic.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors flex items-center gap-1">
                      {topic.label}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
