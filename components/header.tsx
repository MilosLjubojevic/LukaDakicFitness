"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DakicLogo from "../public/DakicLogoPun.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Smooth scroll helper — navigates home first if target doesn't exist on current page
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
      router.push(`/#${targetId}`);
    }
  };

  return (
    <header
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent"
            lang="sr"
            title="Luka Dakić – profesionalni fitnes trener"
          >
            <Image
              className="rounded"
              src={DakicLogo}
              alt="Fitness Trener Logo"
              width={46}
            />
            <span>Luka Dakić</span>
          </div>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            role="navigation"
            aria-label="Glavna navigacija"
          >
            {[
              { name: "Početna", id: "home" },
              { name: "O meni", id: "about" },
              { name: "Usluge", id: "services" },
              { name: "Iskustva", id: "testimonials" },
              { name: "Kontakt", id: "contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="text-sm lg:text-base text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group cursor-pointer"
                title={link.name}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <Button
            className="hidden md:block bg-gradient-to-r from-green-900 to-green-700 hover:from-green-800 hover:to-green-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
            aria-label="Zakaži trening"
            title="Zakaži besplatan trening"
            onClick={() => setIsModalOpen(true)}
          >
            Zakaži trening
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
            title={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300"
            role="navigation"
            aria-label="Mobilna navigacija"
          >
            <div className="flex flex-col space-y-3 pt-4">
              {[
                { name: "Početna", id: "home" },
                { name: "O meni", id: "about" },
                { name: "Usluge", id: "services" },
                { name: "Iskustva", id: "testimonials" },
                { name: "Kontakt", id: "contact" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 px-3 py-2 rounded-lg"
                  title={link.name}
                >
                  {link.name}
                </a>
              ))}

              <Button
                className="bg-gradient-to-r from-green-900 to-green-700 hover:from-green-800 hover:to-green-600 w-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 mt-2"
                title="Zakaži trening"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Zakaži trening
              </Button>
            </div>
          </nav>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallTotActionCard onClose={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  );
}
