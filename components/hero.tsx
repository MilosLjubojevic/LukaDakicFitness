"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "@/components/ui/modal";
import CallToActionCard from "@/components/ui/call-to-action-card";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-24 bg-gradient-to-b from-green-50/80 via-white to-white overflow-hidden"
      role="region"
      aria-label="Početna sekcija – fitnes transformacija"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-green-200/50">
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                <span>Sertifikovani personalni trener</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]"
              variants={itemVariants}
            >
              Transformiši svoje
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block mt-2 pb-1">
                telo i um
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl"
              variants={itemVariants}
              lang="sr"
            >
              Ostvari svoje fitnes ciljeve uz personalizovane planove
              treninga. Postani jači, izdržljiviji i sigurniji uz stručnu
              podršku, motivaciju i personalni pristup.
            </motion.p>

            {/* Rating chip */}
            <motion.div
              className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-fit"
              variants={itemVariants}
              aria-label="Ocena zadovoljstva klijenata"
              role="group"
            >
              <div
                className="flex gap-0.5"
                aria-label="Ocena 5 od 5 zvezdica"
                role="img"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="border-l border-gray-200 pl-3">
                <div className="text-base font-bold text-gray-900">5/5</div>
                <div className="text-xs text-gray-500">
                  100+ zadovoljnih klijenata
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  aria-label="Započni svoj fitnes put sada"
                  onClick={() => setIsModalOpen(true)}
                >
                  Započni svoj put
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-10 pt-2"
              variants={itemVariants}
              role="group"
              aria-label="Ključni podaci o treneru"
            >
              {[
                { value: "7+", label: "Godina iskustva" },
                { value: "100+", label: "Zadovoljnih klijenata" },
                { value: "15+", label: "Sertifikata" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative group">
              <div
                className="absolute -inset-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                aria-hidden="true"
              />
              <Image
                src="/DakicPozira.jpg"
                alt="Luka Dakić – profesionalni fitnes trener pozira u teretani"
                width={600}
                height={750}
                priority
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-100"
              aria-label="Broj uspešno transformisanih klijenata"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle
                    className="w-5 h-5 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    100+
                  </div>
                  <div className="text-gray-500 text-sm font-medium">
                    Transformisanih klijenata
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallToActionCard onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}
