import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-green-600">FitCoach Pro</div>
            <p className="text-gray-400">
              Transforming lives through personalized fitness training and nutrition coaching.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Group Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Nutrition Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Wellness Coaching
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-green-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-green-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street</li>
              <li>City, State 12345</li>
              <li>(555) 123-4567</li>
              <li>alex@fitcoachpro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FitCoach Pro. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
