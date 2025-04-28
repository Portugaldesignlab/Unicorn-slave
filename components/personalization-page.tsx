"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Palette, Sliders, Layers, Zap, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/components/logo"
import { PageHeader } from "@/components/page-header"

const exteriorOptions = [
  {
    id: "color",
    name: "Paint Colors",
    description: "Choose from our range of premium paint finishes",
    icon: Palette,
    image: "/images/unicorn-van.png",
  },
  {
    id: "wheels",
    name: "Wheel Options",
    description: "Customize your wheels for style and performance",
    icon: Sliders,
    image: "/images/unicorn-chassis.png",
  },
  {
    id: "body",
    name: "Body Kits",
    description: "Enhance your vehicle's appearance with custom body kits",
    icon: Layers,
    image: "/images/unicorn-pickup.png",
  },
]

const interiorOptions = [
  {
    id: "seats",
    name: "Seating",
    description: "Premium materials and configurations for maximum comfort",
    icon: Zap,
    image: "/images/front-interior.png",
  },
  {
    id: "tech",
    name: "Technology",
    description: "Advanced tech options for connectivity and entertainment",
    icon: Shield,
    image: "/images/back-interior.png",
  },
  {
    id: "lighting",
    name: "Ambient Lighting",
    description: "Set the mood with customizable interior lighting",
    icon: Sparkles,
    image: "/images/front-interior.png",
  },
]

export function PersonalizationPage() {
  const [activeTab, setActiveTab] = useState("exterior")

  return (
    <div className="flex flex-col min-h-screen bg-[#333333]">
      <PageHeader />

      <main className="flex-1 py-8 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">PERSONALIZATION</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Make your UNICORN uniquely yours with our extensive range of personalization options. From exterior
              finishes to interior details, create a vehicle that reflects your style.
            </p>

            <Tabs defaultValue="exterior" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="exterior">Exterior</TabsTrigger>
                <TabsTrigger value="interior">Interior</TabsTrigger>
              </TabsList>

              <TabsContent value="exterior" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {exteriorOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-card rounded-lg overflow-hidden border border-border/20 hover:border-primary/30 transition-colors group flex flex-col h-full"
                    >
                      <div className="relative pt-[56.25%] w-full bg-black/10">
                        <Image
                          src={option.image || "/placeholder.svg"}
                          alt={option.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <option.icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold">{option.name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{option.description}</p>
                        <div className="mt-auto">
                          <Button variant="outline" size="sm" className="group/btn w-full">
                            Explore Options
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="interior" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {interiorOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-card rounded-lg overflow-hidden border border-border/20 hover:border-primary/30 transition-colors group flex flex-col h-full"
                    >
                      <div className="relative pt-[56.25%] w-full bg-black/10">
                        <Image
                          src={option.image || "/placeholder.svg"}
                          alt={option.name}
                          fill
                          className="object-cover p-2"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <option.icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold">{option.name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{option.description}</p>
                        <div className="mt-auto">
                          <Button variant="outline" size="sm" className="group/btn w-full">
                            Explore Options
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Contact our personalization team for custom options.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                CONTACT PERSONALIZATION TEAM
              </Button>
            </div>
          </div>
        </div>
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
