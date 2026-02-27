"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";

interface FAQ {
  q: string;
  a: string;
}

interface InteractiveFAQProps {
  faqs: FAQ[];
  title?: string;
  accentColor?: string;
}

export function InteractiveFAQ({
  faqs,
  title = "Često postavljana pitanja",
  accentColor = "green"
}: InteractiveFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      <section ref={ref} className="py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`inline-flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full mb-4`}>
            <HelpCircle className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? `${colors.border} shadow-md`
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? colors.bg : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? colors.text : "text-gray-400"}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`px-5 pb-5 border-t ${colors.border}`}>
                        <p className="text-gray-600 pt-4 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500 mb-4">Imaš pitanje koje nije na listi?</p>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            className={`${colors.border} ${colors.text} hover:${colors.bg} font-medium px-6 py-5 rounded-xl group`}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Pitaj direktno
          </Button>
        </motion.div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallTotActionCard onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
