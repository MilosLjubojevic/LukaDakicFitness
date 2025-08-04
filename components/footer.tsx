import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-12"
      role="contentinfo"
      aria-label="Podnožje sajta"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand and Social */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-green-600">FitCoach Pro</div>
            <p className="text-gray-400">
              Menjamo živote kroz personalizovane treninge i savete o ishrani.
            </p>
            <div className="flex space-x-4" aria-label="Društvene mreže">
             
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400 cursor-pointer" />
              </a>
             
            
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Usluge</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Individualni treninzi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Grupni treninzi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Saveti o ishrani
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Mentalni wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Brzi Linkovi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-green-600 transition-colors">
                  O meni
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-600 transition-colors">
                  Usluge
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-green-600 transition-colors">
                  Utisci
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-600 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ulica Fitnesa 123</li>
              <li>Beograd, Srbija</li>
              <li>+381 64 123 4567</li>
              <li>luka@fitcoachpro.rs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 FitCoach Pro. Sva prava zadržana. |{" "}
            <a href="#" className="hover:text-green-600">
              Politika privatnosti
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-green-600">
              Uslovi korišćenja
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
