"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface VehicleFeaturesProps {
  vehicleId: number
}

const vehicleFeatures = {
  1: [
    "Cargo capacity: 9.3 cubic meters",
    "Payload: 1,200 kg",
    "Sliding side door",
    "Rear barn doors",
    "Integrated roof rack mounts",
    "LED cargo area lighting",
  ],
  2: [
    "Adaptable platform",
    "Heavy-duty frame",
    "Multiple wheelbase options",
    "High payload capacity",
    "Integrated mounting points",
    "Commercial-grade components",
  ],
  3: [
    "All-wheel drive",
    "Increased ground clearance",
    "Off-road suspension",
    "Skid plates",
    "Recovery points",
    "All-terrain tires",
  ],
  4: [
    "Performance-tuned suspension",
    "Aerodynamic body kit",
    "Racing livery",
    "Lightweight wheels",
    "Sport exhaust system",
    "Limited slip differential",
  ],
  5: [
    "Track-focused suspension",
    "Heritage racing livery",
    "Lightweight construction",
    "Aerodynamic enhancements",
    "Performance data logging",
    "Competition-ready",
  ],
  6: [
    "Custom art wrap",
    "Limited edition",
    "Premium audio system",
    "Ambient interior lighting",
    "Unique wheel design",
    "Numbered plaque",
  ],
}

export function VehicleFeatures({ vehicleId }: VehicleFeaturesProps) {
  const features = vehicleFeatures[vehicleId as keyof typeof vehicleFeatures] || []

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Key Features</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2"
          >
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
