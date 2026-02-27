"use client";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldCheck,
  Users,
  Clock,
  Utensils,
  Apple,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, AnimatePresence } from "framer-motion";

function AnimatedCounter({
  target,
  isInView,
}: {
  target: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span>{count.toLocaleString("sr-RS")}+</span>;
}

export function MealPlanSignup() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Hook up with Omnisend
    setIsSubmitted(true);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-25 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-20 translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 space-y-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={headerVariants}>
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-green-200/50">
              <Apple className="w-4 h-4" />
              <span>Besplatan plan ishrane</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Preuzmi svoj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-1 pb-1">
              7-dnevni plan ishrane
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Kompletno razrađeni obroci, recepti i lista za kupovinu — sve što ti
            treba da počneš već danas.
          </motion.p>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            whileHover={{
              y: -4,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
            className="relative bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-colors duration-300 hover:border-green-200"
          >
            {/* Value props row */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              {[
                { icon: Utensils, text: "21 recept", sub: "sa kalorijama" },
                { icon: Clock, text: "Gotov za 2 min", sub: "u tvom inboxu" },
                { icon: ShieldCheck, text: "100% besplatno", sub: "bez uslova" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className={`p-5 sm:p-6 text-center ${
                    i < 2 ? "border-r border-gray-100" : ""
                  }`}
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2.5">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    {item.text}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Form area */}
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-4"
                  >
                    {/* Inline input + button */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Unesi email adresu"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-400 focus:bg-white transition-all duration-200 text-base"
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-shrink-0"
                      >
                        <Button
                          type="submit"
                          className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-7 py-4 rounded-xl shadow-lg shadow-green-200/50 transition-all duration-300 text-base group"
                        >
                          Preuzmi plan
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Trust line */}
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Bez spama
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-200" />
                      <span>Odjavi se kad god želiš</span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center py-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Check className="w-7 h-7 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Proverite inbox!
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tvoj 7-dnevni plan ishrane je na putu. Proveri i spam
                      folder za svaki slučaj.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social proof footer */}
            <div className="px-6 sm:px-8 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4 text-green-600" />
              <span>
                <span className="font-semibold text-gray-700">
                  <AnimatedCounter target={500} isInView={isInView} />
                </span>{" "}
                ljudi već preuzelo plan
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
