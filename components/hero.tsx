'use client'
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
      role="region"
      aria-label="Početna sekcija - Fitnes transformacija"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Sertifikovani personalni trener</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transformiši svoje
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block mt-2">
                  Telo i Um
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl" lang="sr">
                Ostvari svoje fitnes ciljeve uz personalizovane planove treninga. Postani jači, izdržljiviji i sigurniji
                uz stručnu podršku i motivaciju.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-fit" aria-label="Ocena zadovoljstva klijenata">
              <div className="flex gap-1" role="img" aria-label="Ocena 4.9 od 5 zvezdica">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="border-l border-gray-200 pl-3">
                <div className="text-lg font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">100+ klijenata</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Započni svoj fitnes put"
                title="Započni svoj fitnes put sada"
                onClick={() => {
                  const el = document.getElementById("usluge");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Započni svoj put
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">7+</div>
                <div className="text-sm text-gray-600">Godina iskustva</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Zadovoljnih klijenata</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Sertifikata</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-delayed">
            {/* Main Image with glow effect */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img
                src="/DakicPozira.jpg"
                alt="Luka Dakić - Profesionalni fitnes trener"
                className="relative rounded-3xl shadow-2xl w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Stats Card */}
            <div
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm animate-float"
              aria-label="Broj uspešno transformisanih klijenata"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    100+
                  </div>
                  <div className="text-gray-600 font-medium">Transformisanih klijenata</div>
                </div>
              </div>
            </div>

            
           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.2s backwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}