"use client"
import { Check, ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { useState } from "react"

// Modificar el componente FilterPanel para eliminar los filtros de vegetación y nivel de impacto

// Actualizar la interfaz de props para eliminar los props relacionados con vegetación y nivel de impacto
interface FilterPanelProps {
  selectedYear: number
  setSelectedYear: (year: number) => void
  selectedCommune: string
  setSelectedCommune: (commune: string) => void
  isMobile?: boolean
}

// Actualizar la función del componente para eliminar los parámetros no utilizados
export default function FilterPanel({
  selectedYear,
  setSelectedYear,
  selectedCommune,
  setSelectedCommune,
  isMobile = false,
}: FilterPanelProps) {
  const [yearOpen, setYearOpen] = useState(false)
  const [communeOpen, setCommuneOpen] = useState(false)
  const [isPanelExpanded, setIsPanelExpanded] = useState(!isMobile)

  const years = [
    { value: 1986, label: "1986" },
    { value: 2007, label: "2007" },
    { value: 2017, label: "2017" },
  ]

  const communes = [
    { value: "Todas", label: "Todas las comunas" },
    { value: "Chillán", label: "Chillán" },
    { value: "Chillán Viejo", label: "Chillán Viejo" },
    { value: "Bulnes", label: "Bulnes" },
    { value: "Coelemu", label: "Coelemu" },
    { value: "Coihueco", label: "Coihueco" },
    { value: "El Carmen", label: "El Carmen" },
    { value: "Ninhue", label: "Ninhue" },
    { value: "Ñiquén", label: "Ñiquén" },
    { value: "Pemuco", label: "Pemuco" },
    { value: "Pinto", label: "Pinto" },
    { value: "Portezuelo", label: "Portezuelo" },
    { value: "Quillón", label: "Quillón" },
    { value: "Quirihue", label: "Quirihue" },
    { value: "Ránquil", label: "Ránquil" },
    { value: "San Carlos", label: "San Carlos" },
    { value: "San Fabián", label: "San Fabián" },
    { value: "San Ignacio", label: "San Ignacio" },
    { value: "San Nicolás", label: "San Nicolás" },
    { value: "Treguaco", label: "Treguaco" },
    { value: "Yungay", label: "Yungay" },
  ]

  const togglePanel = () => {
    setIsPanelExpanded(!isPanelExpanded)
  }

  return (
    <div className="relative bg-card rounded-lg border">
      {/* Pestaña para plegar/desplegar */}
      <div
        className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-card border border-t-0 rounded-b-lg px-4 py-1 cursor-pointer flex items-center gap-1 shadow-sm hover:bg-muted transition-colors"
        onClick={togglePanel}
      >
        <span className="text-xs font-medium">Filtros</span>
        {isPanelExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </div>

      {/* Contenido del panel */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isPanelExpanded ? "max-h-[500px] opacity-100 p-3 md:p-4" : "max-h-0 opacity-0 p-0",
        )}
      >
        <h2 className="font-medium mb-2">Filtros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {/* Year Filter */}
          <div>
            <Label className="mb-1 block">Año</Label>
            <Popover open={yearOpen} onOpenChange={setYearOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={yearOpen} className="w-full justify-between">
                  {selectedYear ? selectedYear : "Seleccionar año"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Buscar año..." />
                  <CommandList>
                    <CommandEmpty>No se encontraron resultados.</CommandEmpty>
                    <CommandGroup>
                      {years.map((year) => (
                        <CommandItem
                          key={year.value}
                          value={year.label}
                          onSelect={() => {
                            setSelectedYear(year.value)
                            setYearOpen(false)
                          }}
                        >
                          <Check
                            className={cn("mr-2 h-4 w-4", selectedYear === year.value ? "opacity-100" : "opacity-0")}
                          />
                          {year.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Commune Filter */}
          <div>
            <Label className="mb-1 block">Comuna</Label>
            <Popover open={communeOpen} onOpenChange={setCommuneOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={communeOpen}
                  className="w-full justify-between"
                >
                  {selectedCommune || "Seleccionar comuna"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Buscar comuna..." />
                  <CommandList>
                    <CommandEmpty>No se encontraron resultados.</CommandEmpty>
                    <CommandGroup>
                      {communes.map((commune) => (
                        <CommandItem
                          key={commune.value}
                          value={commune.label}
                          onSelect={() => {
                            setSelectedCommune(commune.value)
                            setCommuneOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedCommune === commune.value ? "opacity-100" : "opacity-0",
                            )}
                          />
                          {commune.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
