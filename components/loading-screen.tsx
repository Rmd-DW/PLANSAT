"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onLoadComplete?: () => void
  minDisplayTime?: number
}

export default function LoadingScreen({ onLoadComplete, minDisplayTime = 3000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Inicializando...")

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, minDisplayTime / 120) // Distribuir el progreso a lo largo del tiempo mínimo

    // Cambiar mensajes según el progreso
    const messageInterval = setInterval(() => {
      if (progress < 30) {
        setMessage("Cargando datos de incendios...")
      } else if (progress < 60) {
        setMessage("Preparando visualización...")
      } else if (progress < 90) {
        setMessage("Casi listo...")
      } else {
        setMessage("Iniciando dashboard...")
      }
    }, 1000)

    // Completar la carga después del tiempo mínimo
    const timer = setTimeout(() => {
      if (onLoadComplete) {
        onLoadComplete()
      }
    }, minDisplayTime)

    return () => {
      clearInterval(interval)
      clearInterval(messageInterval)
      clearTimeout(timer)
    }
  }, [onLoadComplete, minDisplayTime, progress])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #520DC2 0%, #3B0A8F 50%, #250659 100%)",
      }}
    >
      {/* Logo con animación de entrada */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-24 w-80 mb-12"
      >
        <Link href="/dashboard">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FE1MGS6isFplG4BZ1WYezlE61Ypq3j.png"
            alt="PLANSAT Logo"
            fill
            className="object-contain brightness-0 invert cursor-pointer"
          />
        </Link>
      </motion.div>

      {/* Mensaje de carga con animación */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-lg mb-6"
      >
        {message}
      </motion.div>

      {/* Barra de progreso */}
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      {/* Animación de puntos pulsantes */}
      <div className="flex justify-center space-x-3 mt-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-3 w-3 rounded-full bg-white"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Texto de pie de página */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 text-white/60 text-sm"
      >
        Monitoreo y Análisis de Impacto de Incendios Forestales
      </motion.div>
    </div>
  )
}
