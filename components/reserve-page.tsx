"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PageHeader } from "@/components/page-header"
import { Logo } from "@/components/logo"

const vehicleOptions = [
  {
    id: "cargo-van",
    name: "CARGO VAN",
    description: "Efficient delivery. Maximum capacity.",
    image: "/images/unicorn-van.png",
    price: "$49,900",
    features: ["300 km range", "9.3 cubic meters cargo space", "1,200 kg payload", "Fast charging"],
  },
  {
    id: "chassis-cab",
    name: "CHASSIS CAB",
    description: "Versatile platform. Endless possibilities.",
    image: "/images/unicorn-chassis.png",
    price: "$45,900",
    features: ["280 km range", "Adaptable platform", "Heavy-duty frame", "Multiple wheelbase options"],
  },
  {
    id: "offroad-pickup",
    name: "OFFROAD PICKUP",
    description: "Conquer any terrain. Unlimited adventure.",
    image: "/images/unicorn-pickup.png",
    price: "$59,900",
    features: ["350 km range", "All-wheel drive", "Increased ground clearance", "Off-road suspension"],
  },
]

export function ReservePage() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleOptions[0].id)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const selectedVehicleData = vehicleOptions.find((v) => v.id === selectedVehicle)

  return (
    <div className="flex flex-col min-h-screen bg-[#333333]">
      <PageHeader />

      <main className="flex-1 py-8 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">RESERVE YOUR UNICORN</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Secure your place in line with a fully refundable deposit of $1,000.
            </p>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-6">Step 1: Choose Your Vehicle</h2>

                <RadioGroup
                  value={selectedVehicle}
                  onValueChange={setSelectedVehicle}
                  className="grid grid-cols-1 gap-6"
                >
                  {vehicleOptions.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className={`bg-card rounded-lg border ${
                        selectedVehicle === vehicle.id ? "border-primary" : "border-border/20"
                      } overflow-hidden transition-colors`}
                    >
                      <RadioGroupItem
                        value={vehicle.id}
                        id={vehicle.id}
                        className="sr-only"
                        aria-label={vehicle.name}
                      />
                      <label htmlFor={vehicle.id} className="flex flex-col md:flex-row cursor-pointer overflow-hidden">
                        <div className="relative md:w-1/3 h-48 md:h-auto bg-black/10">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold">{vehicle.name}</h3>
                              <p className="text-muted-foreground">{vehicle.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold">{vehicle.price}</div>
                              <p className="text-xs text-muted-foreground">Starting price</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                            {vehicle.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-auto pt-4">
                            {selectedVehicle === vehicle.id ? (
                              <div className="text-primary font-medium flex items-center">
                                Selected <Check className="ml-2 h-4 w-4" />
                              </div>
                            ) : (
                              <div className="text-muted-foreground">Click to select</div>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    CONTINUE
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-6">Step 2: Your Information</h2>

                <div className="bg-card rounded-lg border border-border/20 p-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-full md:w-1/3 h-48">
                      <Image
                        src={selectedVehicleData?.image || ""}
                        alt={selectedVehicleData?.name || ""}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold">{selectedVehicleData?.name}</h3>
                      <p className="text-muted-foreground mb-4">{selectedVehicleData?.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xl font-bold">{selectedVehicleData?.price}</div>
                          <p className="text-xs text-muted-foreground">Starting price</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setStep(1)} className="text-xs">
                          Change Vehicle
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border/20 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                      CONTINUE TO PAYMENT
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-card rounded-lg border border-border/20 p-8 md:p-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Reservation Complete!</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Thank you for reserving your UNICORN {selectedVehicleData?.name}. We've sent a confirmation to your
                    email with all the details. Our team will be in touch shortly with next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                      VIEW RESERVATION
                    </Button>
                    <Button variant="outline" size="lg">
                      RETURN TO HOME
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
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
