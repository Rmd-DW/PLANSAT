"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import FilterPanel from "@/components/filter-panel"
import ChartSection from "@/components/chart-section"
import LoadingScreen from "@/components/loading-screen"
import { useMobile } from "@/hooks/use-mobile"
import { Menu } from "lucide-react"
import type { YearData } from "@/types/data-types"
import { mockData } from "@/data/mock-data"
import MapÑuble from "@/components/map-nuble"
import Link from "next/link"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState<number>(2017)
  const [selectedCommune, setSelectedCommune] = useState<string>("Todas")
  const [activeSection, setActiveSection] = useState<string>("inicio")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const isMobile = useMobile()

  // Cerrar sidebar al cambiar de sección en móvil
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  // Filter data based on selections
  const filteredData = mockData.filter((item) => {
    return (
      (selectedYear === 0 || item.year === selectedYear) &&
      (selectedCommune === "Todas" || item.commune === selectedCommune)
    )
  })

  // Get years data for charts
  const getYearData = (): YearData[] => {
    const years = [1986, 2007, 2017]
    return years.map((year) => {
      const yearData = mockData.filter((item) => item.year === year)

      // Calculate total area by vegetation type
      const vegetationData = {
        "Bosque Nativo": 0,
        "Bosque Mixto": 0,
        Matorral: 0,
        "Matorral Arborescente": 0,
        "Matorral-Pradera": 0,
        Praderas: 0,
      }

      yearData.forEach((item) => {
        vegetationData[item.vegetationType] += item.area
      })

      return {
        year,
        data: vegetationData,
      }
    })
  }

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} minDisplayTime={3000} />
  }

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Barra de navegación móvil */}
      {isMobile && (
        <div className="bg-white border-b py-2 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-gray-100 mr-2">
              <Menu size={24} />
            </button>
            <Link href="/dashboard">
              <h1 className="text-lg font-bold text-primary cursor-pointer">PLANSAT</h1>
            </Link>
          </div>
          <div className="text-sm font-medium">Dashboard</div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`
          ${isMobile ? "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out" : "relative"} 
          ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        {isMobile && <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />}
        <div className={`relative ${isMobile ? "h-full" : "h-screen"} z-50`}>
          <Sidebar
            activeSection={activeSection}
            setActiveSection={handleSectionChange}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          {!isMobile && (
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
              Mapa interactivo de Impacto de Incendios
            </h1>
          )
          
          
          
          }

          <FilterPanel
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedCommune={selectedCommune}
            setSelectedCommune={setSelectedCommune}
            isMobile={isMobile}
          />

          <div className="mt-4 md:mt-6">
            <div className="flex flex-col gap-6">
              <div
                className={`transition-all duration-300 ${
                  sidebarCollapsed ? "h-[400px] md:h-[600px]" : "h-[300px] md:h-[500px]"
                } rounded-lg overflow-hidden border`}
              >
                <MapÑuble data={filteredData} year={selectedYear} selectedCommune={selectedCommune} />
              </div>
              <ChartSection filteredData={filteredData} yearData={getYearData()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
