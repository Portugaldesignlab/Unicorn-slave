"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const vehicles = [
  {
    id: 1,
    name: "Magma Edition",
    image: "/images/magma.webp",
    color: "Gray with Orange Accents",
  },
  {
    id: 2,
    name: "Standard Edition",
    image: "/images/sku1.webp",
    color: "Slate Gray",
  },
  {
    id: 3,
    name: "Crimson Edition",
    image: "/images/red-truck.webp",
    color: "Vibrant Red",
  },
  {
    id: 4,
    name: "Silver Sport",
    image: "/images/silver-truck.webp",
    color: "Silver with Orange Trim",
  },
  {
    id: 5,
    name: "Safari Open-Air",
    image: "/images/safari.webp",
    color: "Desert Sand",
  },
  {
    id: 6,
    name: "Racing 77",
    image: "/images/racing77.webp",
    color: "Racing Green",
  },
  {
    id: 7,
    name: "Midnight SUV",
    image: "/images/midnight.webp",
    color: "Midnight Black",
  },
  {
    id: 8,
    name: "Mulch Ado",
    image: "/images/mulch-ado.webp",
    color: "White with Custom Graphics",
  },
]

export function VehicleGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useMobile()

  const currentVehicle = vehicles[currentIndex]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)
  }

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length)
  }

  const handleThumbnailClick = (index: number) => {
    setIsAutoPlaying(false)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-xl aspect-[16/9] mb-6">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={currentVehicle.image || "/placeholder.svg"}
                alt={currentVehicle.name}
                fill
                className="object-contain"
                priority
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white"
              >
                <h2 className="text-2xl font-bold">{currentVehicle.name}</h2>
                <p className="text-gray-200">{currentVehicle.color}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative cursor-pointer rounded-md overflow-hidden aspect-square border-2",
              currentIndex === index ? "border-primary" : "border-transparent",
            )}
          >
            <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
            {currentIndex === index && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button variant="outline" onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="flex items-center gap-2">
          {isAutoPlaying ? "Pause Slideshow" : "Play Slideshow"}
        </Button>
      </div>
    </div>
  )
}
