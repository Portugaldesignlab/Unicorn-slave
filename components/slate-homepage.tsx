"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { useMobile } from "@/hooks/use-mobile"

const vehicles = [
  {
    id: 1,
    name: "CARGO VAN",
    description: "EFFICIENT DELIVERY.\nMAXIMUM CAPACITY.",
    image: "/images/unicorn-van.png",
    mobilePosition: "20% 50%", // Show front grill
    mobileScale: "translateY(60px) scale(1.1)",
  },
  {
    id: 2,
    name: "CHASSIS CAB",
    description: "VERSATILE PLATFORM.\nENDLESS POSSIBILITIES.",
    image: "/images/unicorn-chassis.png",
    mobilePosition: "40% 50%", // Center the chassis
    mobileScale: "translateY(40px) scale(1.15)",
  },
  {
    id: 3,
    name: "OFFROAD PICKUP",
    description: "CONQUER ANY TERRAIN.\nUNLIMITED ADVENTURE.",
    image: "/images/unicorn-pickup.png",
    mobilePosition: "30% 50%", // Show more of the front
    mobileScale: "translateY(50px) scale(1.2)",
  },
]

export function SlateHomepage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const currentVehicle = vehicles[currentIndex]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)
    }, 8000)

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

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50 // minimum distance to be considered a swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left, go to next
        handleNext()
      } else {
        // Swipe right, go to previous
        handlePrevious()
      }
    }
  }

  // Simple slide and fade variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.6 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "tween", duration: 0.8, ease: "easeIn" },
        opacity: { duration: 0.6 },
      },
    }),
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#333333]" style={{ backgroundColor: "#333333" }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border/20 bg-[#333333]">
        <Link href="/" className="flex items-center">
          <Logo className="scale-90 sm:scale-100" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3 py-1 h-8">
            RESERVE
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Personalization
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Charging
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Merch
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign in
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">RESERVE</Button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#333333] border-b border-border/20"
          >
            <nav className="flex flex-col py-2">
              <Link
                href="#"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
              >
                Personalization
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
              >
                Charging
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
              >
                Merch
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
              >
                Sign in
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex flex-col flex-1 bg-[#333333]">
        {/* Hero Carousel Section */}
        <div
          className="relative h-[calc(100vh-57px)] sm:h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden bg-[#333333]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ backgroundColor: "#333333" }}
        >
          {/* Text Overlay */}
          <div className="absolute top-8 sm:top-0 left-4 sm:left-0 right-4 sm:p-4 md:p-12 lg:p-16 z-10 max-w-xs sm:max-w-sm md:max-w-3xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-2"
              >
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold whitespace-pre-line">
                  {currentVehicle.description}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vehicle Image */}
          <div className="relative w-full h-full flex items-center justify-center bg-[#333333]">
            <div className="carousel-container bg-[#333333]" style={{ backgroundColor: "#333333" }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`image-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center bg-[#333333]"
                >
                  <div className="vehicle-container bg-[#333333]" style={{ backgroundColor: "#333333" }}>
                    <Image
                      src={currentVehicle.image || "/placeholder.svg"}
                      alt={currentVehicle.name}
                      width={1600}
                      height={900}
                      className="vehicle-image"
                      style={
                        isMobile
                          ? {
                              objectPosition: currentVehicle.mobilePosition,
                              transform: currentVehicle.mobileScale,
                              maxWidth: "180%",
                              width: "180%",
                            }
                          : {}
                      }
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows - Larger touch targets on mobile */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-4 md:left-8 z-10 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-border transition-colors touch-manipulation"
            aria-label="Previous vehicle"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-8 z-10 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-border transition-colors touch-manipulation"
            aria-label="Next vehicle"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Mobile Swipe Indicator - Only visible on mobile */}
          {isMobile && (
            <div className="absolute bottom-24 left-0 right-0 flex justify-center items-center z-10 pointer-events-none swipe-indicator">
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5], x: [-20, 20, -20] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-white/90"
              >
                Swipe to explore
              </motion.div>
            </div>
          )}

          {/* Bottom Bar - Simplified for mobile */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-border/20 p-3 sm:p-6 flex items-center justify-between bg-[#333333]/80 backdrop-blur-sm">
            <div className="text-base sm:text-xl font-medium truncate max-w-[30%] sm:max-w-none">
              {currentVehicle.name}
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              {vehicles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="focus:outline-none p-2 sm:p-0"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={cn("dot", currentIndex === index && "active")} />
                </button>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              {currentIndex + 1}/{vehicles.length}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
