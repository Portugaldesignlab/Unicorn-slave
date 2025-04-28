"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles } from "lucide-react"

const vehicles = [
  {
    id: 1,
    name: "RACING 75",
    image: "/images/racing-78-new.png", // Updated to use the new Racing 78 image
    category: "Performance",
    description: "Track-inspired performance with racing heritage",
    features: ["Advanced electric powertrain", "Premium interior materials", "Cutting-edge technology"],
  },
  {
    id: 2,
    name: "CARGO VAN",
    image: "/images/unicorn-van.png",
    category: "Commercial",
    description: "Versatile cargo solution for every business",
    features: ["Advanced electric powertrain", "Premium interior materials", "Cutting-edge technology"],
  },
  {
    id: 3,
    name: "ART EDITION",
    image: "/images/art-edition-van-new.png",
    category: "Limited Edition",
    description: "Express yourself with this unique mobile canvas",
    features: ["Artist collaboration design", "Limited production run", "Certificate of authenticity"],
    special: true,
  },
]

export function VehicleLineup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">VEHICLE LINEUP</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse range of vehicles designed to meet your specific needs, from commercial applications to
            performance and self-expression.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {vehicles.map((vehicle) =>
            vehicle.special ? (
              // Special Edition Card with full-width image
              <motion.div
                key={vehicle.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-yellow-500/10 to-pink-500/10 rounded-lg overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 transition-colors group flex flex-col h-full col-span-1 md:col-span-2 lg:col-span-1 relative"
              >
                {/* Special Edition Badge */}
                <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Star className="h-3 w-3" fill="currentColor" />
                  LIMITED EDITION
                </div>

                {/* Full-width image container */}
                <div className="w-full aspect-[16/9] relative">
                  <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-contain" />

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-yellow-500/20 blur-xl"></div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-pink-500/20 blur-xl"></div>
                </div>

                {/* Content area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                  </div>

                  <p className="text-white/90 text-lg mb-6">{vehicle.description}</p>

                  <div className="space-y-3 mb-6">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black border-0 w-full">
                      RESERVE NOW
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full group/btn">
                      EXPLORE
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Standard Card
              <motion.div
                key={vehicle.id}
                variants={itemVariants}
                className="bg-card rounded-lg overflow-hidden border border-border/20 hover:border-primary/30 transition-colors group flex flex-col h-full"
              >
                <div className="relative pt-[56.25%] w-full bg-black/10">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-muted-foreground mb-4">{vehicle.description}</p>
                  <div className="space-y-2 mb-4">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="group/btn w-full">
                      Explore {vehicle.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </motion.div>

        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">VIEW ALL MODELS</Button>
        </div>
      </div>
    </section>
  )
}
