"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gauge, Zap, Timer, Award } from "lucide-react"

export function RacingEdition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section ref={ref} className="py-16 md:py-24 bg-background border-t border-border/20">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium text-sm">PERFORMANCE SERIES</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                RACING 78
                <br />
                <span className="text-primary">PERFORMANCE EDITION</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Experience the thrill of motorsport heritage with our limited-run RACING 78 edition. Engineered for
                performance, designed to turn heads.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Gauge className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">250 kW</h4>
                    <p className="text-sm text-muted-foreground">Peak Power</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">500 Nm</h4>
                    <p className="text-sm text-muted-foreground">Torque</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Timer className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">5.8 sec</h4>
                    <p className="text-sm text-muted-foreground">0-100 km/h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Limited</h4>
                    <p className="text-sm text-muted-foreground">Production Run</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  RESERVE NOW
                </Button>
                <Button size="lg" variant="outline" className="group">
                  EXPLORE SPECS
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent z-10"></div>
              <Image
                src="/images/racing-78-new.png"
                alt="UNICORN RACING 78 Edition"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
