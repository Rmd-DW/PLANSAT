"use client"

import { useState } from "react"
import type { FireData, YearData } from "@/types/data-types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronUp, ChevronDown } from "lucide-react"

interface ChartSectionProps {
  filteredData: FireData[]
  yearData: YearData[]
}

export default function ChartSection({ filteredData, yearData }: ChartSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <Card className="transition-all duration-300">
      <CardHeader
        className="p-3 md:p-4 flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <CardTitle className="text-base md:text-lg">Datos de Áreas Afectadas</CardTitle>
        <button className="p-1 rounded-full hover:bg-muted">
          {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </button>
      </CardHeader>
      <div className={`overflow-hidden transition-all duration-300 ${isCollapsed ? "max-h-0" : "max-h-[500px]"}`}>
        <CardContent className="p-2 md:p-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border px-3 py-2 text-left">Comuna</th>
                  <th className="border px-3 py-2 text-left">Tipo de Vegetación</th>
                  <th className="border px-3 py-2 text-right">Área (ha)</th>
                  <th className="border px-3 py-2 text-center">Año</th>
                  <th className="border px-3 py-2 text-center">Nivel de Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="border px-3 py-4 text-center text-muted-foreground">
                    Cargando datos desde la API...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
