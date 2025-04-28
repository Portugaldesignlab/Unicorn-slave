"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Palette, Sparkles, Users, Heart } from "lucide-react"

export function ArtEdition() {
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
    <section
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      }}
    >
      {/* Subtle color accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-[10%] w-[30%] h-full bg-gradient-to-b from-purple-500/30 to-transparent"></div>
        <div className="absolute top-0 right-[20%] w-[20%] h-full bg-gradient-to-b from-orange-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-[30%] w-[40%] h-[60%] bg-gradient-to-t from-pink-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white font-medium text-sm">LIMITED EDITION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white">
            ART EDITION
            <span className="block text-yellow-300 mt-2">EXPRESS YOURSELF</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Image - Larger on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              {/* Shadow effect */}
              <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent blur-md"></div>

              {/* Main image */}
              <div className="relative z-10">
                <Image
                  src="/images/art-edition-van-new.png"
                  alt="UNICORN ART EDITION"
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-30"></div>
              <div className="absolute bottom-1/3 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-xl opacity-30"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10">
              <p className="text-white/90 text-lg mb-6">
                Turn heads with our most expressive vehicle yet. The Art Edition transforms your ride into a moving
                masterpiece that celebrates creativity and individuality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-300/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Palette className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Artist Collaboration</h4>
                    <p className="text-sm text-white/70">Designed by renowned digital artists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-300/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Unique Design</h4>
                    <p className="text-sm text-white/70">No two vehicles are exactly alike</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-300/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">8 Passengers</h4>
                    <p className="text-sm text-white/70">Spacious interior for friends and family</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-300/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Collector's Item</h4>
                    <p className="text-sm text-white/70">Limited production of 100 units</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-300 hover:bg-yellow-400 text-black border-0 w-full sm:w-auto">
                  RESERVE YOUR ART EDITION
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  EXPLORE GALLERY
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm">
            <span className="text-yellow-300">*</span> Each Art Edition vehicle comes with a certificate of authenticity
            and exclusive owner benefits
          </p>
        </div>
      </div>
    </section>
  )
}
