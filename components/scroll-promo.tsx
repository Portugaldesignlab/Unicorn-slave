"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ScrollPromo() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      {
        // Trigger when element is 20% visible
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.2,
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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section ref={ref} className="w-full py-16 overflow-hidden border-t border-border/20 relative">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ scale: 1.1, rotate: -2 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/unicorn72.png"
            alt="UNICORN 22 Special Edition Van"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
      </div>

      {/* Content overlay */}
      <motion.div
        className="max-w-6xl mx-auto px-6 relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants} className="order-1">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium text-sm">LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                UNICORN 22
                <br />
                <span className="text-primary">SPECIAL EDITION</span>
              </h2>
              <p className="text-white/80 text-lg max-w-md">
                Experience the perfect blend of utility and style with our limited-run UNICORN 22 cargo van. Engineered
                for performance, designed for attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  RESERVE NOW
                </Button>
                <Button size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-white/60">*Offer valid until June 30, 2025. Terms and conditions apply.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-2 hidden md:block">
            {/* This column is intentionally empty to create space for the content */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
