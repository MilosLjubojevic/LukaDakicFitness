"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";

interface StickyCTAProps {
  accentColor?: string;
  text?: string;
}

export function StickyCTA({
  accentColor = "from-green-600 to-emerald-600",
  text = "Besplatna konsultacija"
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Re-enable after 60 seconds
    setTimeout(() => setIsDismissed(false), 60000);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
          >
            {/* Dismiss button */}
            <motion.button
              onClick={handleDismiss}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4" />
            </motion.button>

            {/* Main CTA button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className={`bg-gradient-to-r ${accentColor} text-white font-semibold px-6 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow group flex items-center gap-2`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">{text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallTotActionCard onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
