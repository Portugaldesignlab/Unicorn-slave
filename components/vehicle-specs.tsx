"use client"

import { motion } from "framer-motion"

interface VehicleSpecsProps {
  vehicleId: number
}

const vehicleSpecs = {
  1: {
    engine: "Electric Motor",
    power: "150 kW",
    torque: "350 Nm",
    range: "300 km",
    chargingTime: "30 min (20-80%)",
    payload: "1,200 kg",
  },
  2: {
    engine: "Electric Motor",
    power: "180 kW",
    torque: "400 Nm",
    range: "280 km",
    chargingTime: "35 min (20-80%)",
    payload: "1,800 kg",
  },
  3: {
    engine: "Electric Motor",
    power: "220 kW",
    torque: "450 Nm",
    range: "350 km",
    chargingTime: "25 min (20-80%)",
    payload: "1,000 kg",
  },
  4: {
    engine: "Electric Motor",
    power: "250 kW",
    torque: "500 Nm",
    range: "280 km",
    chargingTime: "20 min (20-80%)",
    acceleration: "5.8 sec (0-100 km/h)",
  },
  5: {
    engine: "Electric Motor",
    power: "280 kW",
    torque: "550 Nm",
    range: "250 km",
    chargingTime: "20 min (20-80%)",
    acceleration: "5.2 sec (0-100 km/h)",
  },
  6: {
    engine: "Electric Motor",
    power: "200 kW",
    torque: "400 Nm",
    range: "320 km",
    chargingTime: "25 min (20-80%)",
    passengers: "8",
  },
}

export function VehicleSpecs({ vehicleId }: VehicleSpecsProps) {
  const specs = vehicleSpecs[vehicleId as keyof typeof vehicleSpecs] || {}

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Specifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {Object.entries(specs).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col"
          >
            <span className="text-xs text-muted-foreground capitalize">{key}</span>
            <span className="text-sm font-medium">{value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
