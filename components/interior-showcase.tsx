"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation, Smartphone, Wifi, Maximize2, Shield, Zap } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function InteriorShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 }) // Reduced threshold for mobile
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section
      ref={ref}
      className="py-12 md:py-24 bg-[#1a1a1a]"
      style={{ backgroundColor: "#1a1a1a" }} // Force background color
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">INTERIOR EXPERIENCE</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            DESIGNED FOR
            <br />
            <span className="text-primary">COMFORT & CONTROL</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-4">
            Every UNICORN vehicle features a thoughtfully designed interior that combines intuitive technology with
            driver-focused comfort and versatile space.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:gap-12"
        >
          {/* Driver's Cockpit Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] w-full">
              <Image
                src="/images/front-interior.png"
                alt="UNICORN Driver's Cockpit"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority // Added priority loading
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Driver-Focused Cockpit</h3>
              <p className="text-muted-foreground">
                The UNICORN's driver-focused cockpit combines intuitive controls with advanced technology, putting
                everything you need within easy reach.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">12.3" Touchscreen Display</h4>
                    <p className="text-sm text-muted-foreground">
                      The large central touchscreen features high-resolution maps with real-time traffic updates,
                      intuitive controls, and customizable layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Digital Instrument Cluster</h4>
                    <p className="text-sm text-muted-foreground">
                      The fully digital instrument panel provides essential driving information with customizable
                      displays and clear, easy-to-read graphics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Wifi className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ergonomic Steering Wheel</h4>
                    <p className="text-sm text-muted-foreground">
                      The UNICORN-branded steering wheel features integrated controls for audio, phone, and driver
                      assistance systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cargo Space Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2 relative overflow-hidden rounded-lg aspect-[4/3] w-full">
              <Image
                src="/images/back-interior.png"
                alt="UNICORN Cargo Space"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority // Added priority loading
              />
            </div>
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Versatile Cargo Space</h3>
              <p className="text-muted-foreground">
                Transform your UNICORN to meet any challenge with a thoughtfully designed cargo area that offers
                exceptional versatility and capacity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Maximize2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Flexible Loading Space</h4>
                    <p className="text-sm text-muted-foreground">
                      With up to 3,400 liters of cargo capacity and a completely flat loading floor, the UNICORN adapts
                      to whatever you need to transport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Premium Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Durable, high-quality materials throughout the cargo area ensure long-lasting performance even
                      with heavy use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Integrated Tie-Down Points</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple tie-down points and storage compartments help secure cargo and keep your items organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interior Highlights - Simplified for mobile */}
          <motion.div variants={itemVariants} className="mt-8 md:mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Interior Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-border/10">
                <h4 className="font-medium text-lg mb-2">Ambient Lighting</h4>
                <p className="text-sm text-muted-foreground">
                  Customizable ambient lighting creates the perfect atmosphere for any journey, with multiple color
                  options and brightness settings.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-border/10">
                <h4 className="font-medium text-lg mb-2">Climate Control</h4>
                <p className="text-sm text-muted-foreground">
                  Tri-zone automatic climate system ensures optimal comfort for all passengers, with dedicated controls
                  for driver, front passenger, and rear seats.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-border/10 sm:col-span-2 md:col-span-1">
                <h4 className="font-medium text-lg mb-2">Premium Audio</h4>
                <p className="text-sm text-muted-foreground">
                  Immersive sound system with spatial audio technology delivers concert-quality sound throughout the
                  cabin.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 md:mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              EXPLORE INTERIOR OPTIONS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
