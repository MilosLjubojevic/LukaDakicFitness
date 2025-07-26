import { Button } from "@/components/ui/button"
import { Play, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-lime-300 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="text-green-900 block">Body & Mind</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Achieve your fitness goals with personalized training programs designed just for you. Get stronger,
                fitter, and more confident with expert guidance.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 from 200+ clients</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-900 hover:bg-green-700 text-lg px-8 py-3">
                Start Your Journey
              </Button>
             
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Professional fitness trainer"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Clients Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
