import React, { useState } from 'react';
import { Phone, MessageCircle, X, Mail } from 'lucide-react';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(true);
  
  const phoneNumber = '+38166244454';
  const phoneNumberDisplay = '+381 66 244 454';
  
  const handleViber = () => {
    window.open(`viber://chat?number=${phoneNumber}`, '_blank');
  };
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  
  const handlePhone = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative animate-scale-in overflow-hidden">
        {/* Gradient header decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300 z-10"
          aria-label="Zatvori"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8 pt-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Kontaktirajte Nas
            </h2>
            <p className="text-gray-600">
              Izaberite način komunikacije koji vam odgovara
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3">
            {/* Viber Button */}
            <button
              onClick={handleViber}
              className="w-full flex items-center gap-4 bg-gradient-to-r from-[#7360f2] to-[#665ac7] hover:from-[#5f4dd4] hover:to-[#5347b8] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg group"
            >
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <MessageCircle size={20} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-lg font-bold">Viber</div>
                <div className="text-sm opacity-90">Brza poruka</div>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-[#20b858] hover:from-[#20b858] hover:to-[#1ca04b] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg group"
            >
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <MessageCircle size={20} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-lg font-bold">WhatsApp</div>
                <div className="text-sm opacity-90">Instant chat</div>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </button>

            {/* Phone Button */}
            <button
              onClick={handlePhone}
              className="w-full flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg group"
            >
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                <Phone size={20} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-lg font-bold">Pozovi</div>
                <div className="text-sm opacity-90">Direktan poziv</div>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ili</span>
            </div>
          </div>

         

          {/* Available time */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Dostupan sam radnim danima od 08:00 do 17:00
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}