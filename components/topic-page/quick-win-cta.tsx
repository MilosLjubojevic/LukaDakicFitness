"use client";
import { useState } from "react";
import { Check, ArrowRight, Clock, Shield, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";

interface QuickWinCTAProps {
  headline: string;
  benefits: string[];
  urgencyText?: string;
  accentColor?: string;
}

export function QuickWinCTA({
  headline,
  benefits,
  urgencyText = "Slobodnih mesta: 3 ove nedelje",
  accentColor = "green"
}: QuickWinCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClasses: Record<string, { gradient: string; bg: string; text: string; border: string }> = {
    green: { gradient: "from-green-600 to-emerald-600", bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    orange: { gradient: "from-orange-500 to-amber-500", bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    rose: { gradient: "from-rose-500 to-pink-500", bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
    blue: { gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    purple: { gradient: "from-purple-500 to-violet-500", bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  };

  const colors = colorClasses[accentColor] || colorClasses.green;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative overflow-hidden rounded-2xl border-2 ${colors.border} bg-white my-10`}
      >
        {/* Top accent bar */}
        <div className={`h-1.5 bg-gradient-to-r ${colors.gradient}`} />

        <div className="p-6 sm:p-8">
          {/* Urgency badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`flex items-center gap-1.5 ${colors.bg} px-3 py-1.5 rounded-full`}>
              <Clock className={`w-4 h-4 ${colors.text}`} />
              <span className={`text-sm font-medium ${colors.text}`}>{urgencyText}</span>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {headline}
              </h3>

              {/* Benefits list */}
              <ul className="space-y-2">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className={`w-5 h-5 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check className={`w-3 h-3 ${colors.text}`} />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA section */}
            <div className="flex flex-col items-center lg:items-end gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Zakaži besplatno
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>Bez obaveza, 100% besplatno</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${colors.bg} rounded-full opacity-50`} />
        <div className={`absolute -top-4 -left-4 w-16 h-16 ${colors.bg} rounded-full opacity-30`} />
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallTotActionCard onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
