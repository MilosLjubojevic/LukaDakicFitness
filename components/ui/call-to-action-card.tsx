import Image from 'next/image';
import { Phone, MessageCircle, X, Clock, Star } from 'lucide-react';
import Stefan from '@/public/Stefo.jpg';

interface ContactPopupProps {
  onClose?: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
  const phoneNumber = '+38166244454';
  const prefilledMessage = encodeURIComponent(
    'Zdravo! Zanima me besplatna konsultacija za trening. Kada ste dostupni?'
  );

  const handleViber = () => {
    window.open(`viber://chat?number=${phoneNumber}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${prefilledMessage}`, '_blank');
  };

  const handlePhone = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden mx-4 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-all duration-200 z-10"
        aria-label="Zatvori"
      >
        <X size={18} />
      </button>

      {/* Green accent header */}
      <div className="bg-gradient-to-br from-green-800 to-green-950 px-8 pt-8 pb-6 text-center text-white">
        <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Besplatna konsultacija
        </div>
        <h2 className="text-2xl font-bold mb-1.5">
          Započni svoju transformaciju
        </h2>
        <p className="text-green-200 text-sm">
          Javi se i zajedno pravimo plan za tvoje ciljeve
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Trust signals */}
        <div className="flex items-center justify-center gap-4 mb-5 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-green-600" />
            Odgovor za &lt;1h
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500" />
            50+ klijenata
          </span>
        </div>

        {/* Primary CTA — WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center gap-4 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold py-4 px-5 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-green-200 group mb-3"
        >
          <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <MessageCircle size={22} />
          </div>
          <div className="flex-1 text-left">
            <div className="text-base font-bold leading-tight">Piši na WhatsApp</div>
            <div className="text-xs text-white/80 mt-0.5">Najbrži način — poruka je već spremna</div>
          </div>
          <div className="text-xl opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">&rarr;</div>
        </button>

        {/* Secondary CTAs row */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Viber */}
          <button
            onClick={handleViber}
            className="flex flex-col items-center gap-2 bg-gray-50 hover:bg-[#7360f2]/5 border border-gray-200 hover:border-[#7360f2]/30 text-gray-700 py-4 px-3 rounded-2xl transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-[#7360f2] rounded-xl flex items-center justify-center text-white">
              <MessageCircle size={20} />
            </div>
            <div className="text-sm font-semibold text-[#7360f2]">Viber</div>
          </button>

          {/* Phone — mobile */}
          <div className="block md:hidden">
            <button
              onClick={handlePhone}
              className="w-full flex flex-col items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-700 py-4 px-3 rounded-2xl transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white">
                <Phone size={20} />
              </div>
              <div className="text-sm font-semibold">Pozovi</div>
            </button>
          </div>

          {/* Phone — desktop (display only) */}
          <div className="hidden md:flex flex-col items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 py-4 px-3 rounded-2xl cursor-default" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white">
              <Phone size={20} />
            </div>
            <div className="text-xs font-semibold text-gray-900">+381 66 244 454</div>
          </div>
        </div>

        {/* Social proof nudge */}
        <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 flex items-start gap-3">
          <Image
            src={Stefan}
            alt="Stefan Tešić"
            className="w-9 h-9 rounded-full object-cover shrink-0"
          />
          <div>
            <p className="text-xs text-green-800 leading-relaxed">
              <span className="font-semibold">&ldquo;Najbolja odluka koju sam doneo&rdquo;</span>
              {' '}&mdash; rezultati vidljivi već posle 2 nedelje saradnje.
            </p>
            <p className="text-[11px] text-green-600 font-medium mt-1">Stefan Tešić</p>
          </div>
        </div>

        {/* Availability */}
        <p className="text-center text-[11px] text-gray-400 mt-4">
          Radnim danima 08:00 &ndash; 17:00 &middot; Vikend po dogovoru
        </p>
      </div>
    </div>
  );
}
