"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Battery, Zap, Clock, MapPin, CreditCard, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Logo } from "@/components/logo"

export function ChargingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <div className="flex flex-col min-h-screen bg-[#333333]">
      <PageHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
            <Image
              src="/images/unicorn-van.png"
              alt="UNICORN Charging"
              fill
              className="object-cover object-center opacity-20"
              priority
            />
          </div>
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">CHARGING SOLUTIONS</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Fast, convenient, and accessible charging solutions for your UNICORN electric vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  FIND CHARGING STATIONS
                </Button>
                <Button size="lg" variant="outline">
                  HOME CHARGING OPTIONS
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Charging Stats */}
        <section className="py-12 bg-card">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Battery className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">30 min</h3>
                <p className="text-muted-foreground">20-80% charge at fast charging stations</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">350 kW</h3>
                <p className="text-muted-foreground">Maximum charging power supported</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">8 hours</h3>
                <p className="text-muted-foreground">Full charge with home Level 2 charger</p>
              </div>
            </div>
          </div>
        </section>

        {/* Charging Options */}
        <section ref={ref} className="py-12 md:py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CHARGING OPTIONS</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from a variety of charging solutions to fit your lifestyle and needs.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemVariants} className="bg-card rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/unicorn-van.png"
                    alt="Home Charging"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Home Charging</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Charge your UNICORN overnight at home with our range of home charging solutions. Easy to install and
                    use, our home chargers provide a convenient way to keep your vehicle ready for your daily commute.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Level 2 Charging</h4>
                        <p className="text-sm text-muted-foreground">7.2 kW - 11 kW power output</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Wifi className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Smart Features</h4>
                        <p className="text-sm text-muted-foreground">App control and scheduling</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">EXPLORE HOME CHARGERS</Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-card rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/unicorn-pickup.png"
                    alt="Public Charging"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Public Charging</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Access our growing network of public charging stations for fast charging on the go. With thousands
                    of stations across the country, you'll never be far from a charge.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Extensive Network</h4>
                        <p className="text-sm text-muted-foreground">10,000+ stations nationwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Easy Payment</h4>
                        <p className="text-sm text-muted-foreground">Tap to charge with RFID or app</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">FIND CHARGING STATIONS</Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Charging Map */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CHARGING NETWORK</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our extensive charging network ensures you're never far from a charge.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden border border-border/20">
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-center">
                  <p className="text-lg mb-4">Interactive charging map</p>
                  <Button>OPEN INTERACTIVE MAP</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/20 py-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <p className="text-sm text-muted-foreground">© 2025 UNICORN SLAVE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
