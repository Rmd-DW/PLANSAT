"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, Map, Shield, ChevronRight, Flame, LineChart, Mail, Phone, MapPin, FileText, Code, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FE1MGS6isFplG4BZ1WYezlE61Ypq3j.png"
                alt="PLANSAT Logo"
                width={120}
                height={32}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>
          {/* <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Acerca de
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Características
            </Link>
            <Link href="#modules" className="text-sm font-medium hover:text-primary">
              Módulos
            </Link>
          </nav> */}
          <div className="flex items-center gap-4">
            <Link href="/loading">
              <Button>Acceder</Button>
            </Link>
          </div>
        </div>
      </header>

{/* Hero Section */}
<section className="relative isolate">
  {/* Imagen de fondo clara y visible */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
    style={{ backgroundImage: "url('/images/textura2.png')" }}
  />

  {/* Capa de color violeta con blending para tono PLANSAT */}
  <div className="absolute inset-0 -z-10 bg-[#3B0DC2]/40 mix-blend-multiply" />

  {/* Capa de brillo y contraste */}
  <div className="absolute inset-0 -z-10 bg-white/70 mix-blend-overlay" />

  {/* Capa de gradiente superior para legibilidad */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/70 to-white/90" />

  {/* Contenido centrado */}
  <div className="container relative z-10 py-20 flex flex-col items-center text-center space-y-6">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
      Monitoreo y Análisis de Impacto <br /> de incendios Forestales
    </h1>
    <p className="text-sm md:text-base text-black/80 max-w-xl">
      PLANSAT proporciona herramientas avanzadas para el análisis de vegetación afectada
      por incendios forestales en la región de Ñuble, Chile
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/loading">
        <Button size="lg" className="w-full sm:w-auto">
          Comenzar ahora →
        </Button>
      </Link>
      <Link href="#features">
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          Ver módulos
        </Button>
      </Link>
    </div>
  </div>
</section>



      {/* Features Section */}
      <section id="features" className="container py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4">Características Principales</h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
            PLANSAT ofrece herramientas avanzadas para el análisis y monitoreo de incendios forestales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Visualización Geoespacial</h3>
                <p className="text-muted-foreground">
                  Mapas interactivos que muestran la distribución de incendios y áreas afectadas en la Región de Ñuble.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Análisis Estadístico</h3>
                <p className="text-muted-foreground">
                  Gráficos y estadísticas detalladas sobre la evolución de incendios y tipos de vegetación afectada.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Generación de Reportes</h3>
                <p className="text-muted-foreground">
                  Creación de informes personalizados en formato PDF con datos detallados para toma de decisiones.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Monitoreo de Impacto</h3>
                <p className="text-muted-foreground">
                  Seguimiento del impacto de incendios en diferentes tipos de vegetación y ecosistemas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Análisis Temporal</h3>
                <p className="text-muted-foreground">
                  Comparación de datos históricos para identificar patrones y tendencias en incendios forestales.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Soporte Técnico</h3>
                <p className="text-muted-foreground">
                  Asistencia especializada para usuarios y capacitación en el uso de la plataforma.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-12 md:py-24 bg-muted/50">
        <div className="container">
           <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4">Mapa Interactivo región del Ñuble</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
               Visualice datos geoespaciales de incendios forestales en la región del Ñuble 
               contamos con filtros avanzados, mapa interactivo, linea de tiempo  que muestra la 
               distribución  de las áreas afectadas.
            </p>
            <Link href="/loading">
              <Button size="lg" className="w-full sm:w-auto mt-6">
              Acceder al Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
           </Button>
         </Link>
          </div>

          <div className="mt-8 bg-card rounded-lg border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                
                <ul className="space-y-2 text-sm text-gray-700">
                 <li className="flex items-center gap-2">
                 <ChevronRight className="h-4 w-4 text-[#5E17EB]" />
                   <span className="text-[#5E17EB] font-medium">Visualizador interactivo de incendios en la Región del Ñuble</span>
                 </li>
                 <li className="flex items-center gap-2">
                 <ChevronRight className="h-4 w-4 text-[#5E17EB]" />
                <span className="text-[#5E17EB] font-medium">Filtros por año, comuna y tipo de vegetación</span>
                </li>
               <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#5E17EB]" />
                <span className="text-[#5E17EB] font-medium">Datos de evolución y recuperación vegetal en el tiempo</span>
                 </li>
               </ul>

              </div>
              <div className="bg-muted relative min-h-[300px]">
               <Image
                 src="/images/imagen_hero.png"
                 alt="Mockup visual conceptual del dashboard PLANSAT"
                 fill
                 className="object-cover w-full h-full"
                 priority
               />
             </div>
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#400A97] to-[#7F42E2] text-white py-12 md:py-24">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
      {/* Columna principal: logo y descripción */}
      <div className="md:col-span-2">
        <Link href="/dashboard">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FE1MGS6isFplG4BZ1WYezlE61Ypq3j.png"
            alt="PLANSAT Logo"
            width={120}
            height={32}
            className="object-contain mb-4 invert brightness-0"
          />
        </Link>
        <p className="text-sm text-white/80 max-w-sm">
          Plataforma de análisis de vegetación afectada por incendios forestales en la Región de Ñuble, Chile.
        </p>
      </div>

      {/* Columnas adicionales */}
      <div>
        <h3 className="font-medium mb-4 text-white">Navegación</h3>
        <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition">
      <Map className="w-4 h-4" />
      <Link href="/dashboard">Dashboard</Link>
    </li>
        </ul>
      </div>

      <div>
  <h3 className="font-medium mb-4 text-white">Recursos</h3>
  <ul className="space-y-2">
    <li className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
      <FileText className="w-4 h-4" />
      <Link href="#">Documentación</Link>
    </li>
    <li className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
      <Code className="w-4 h-4" />
      <Link href="#">API</Link>
    </li>
    <li className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
      <HelpCircle className="w-4 h-4" />
      <Link href="#">Preguntas frecuentes</Link>
    </li>
  </ul>
</div>

      <div>
        <h3 className="font-medium mb-4 text-white">Contacto</h3>
        <ul className="space-y-2 text-white/80">
        <li className="flex items-center gap-2 text-sm">
      <Mail className="w-4 h-4" />
      info@plansat.cl
    </li>
    <li className="flex items-center gap-2 text-sm">
      <Phone className="w-4 h-4" />
      +56 42 123 4567
    </li>
    <li className="flex items-center gap-2 text-sm">
      <MapPin className="w-4 h-4" />
      Valparaíso, V Región, Chile
    </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-white/70">© 2025 PLANSAT. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>




    </div>
  )
}
