"use client"
import type React from "react"
import { useCallback, useRef, useState, useEffect } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import type { FireData } from "@/types/data-types"
import { Loader } from "lucide-react"

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
}

const centerÑuble = { lat: -36.75, lng: -72.5 }

const nubleBounds = {
  north: -36.0,
  south: -37.2,
  east: -71.0,
  west: -73.2,
}

const GOOGLE_MAPS_API_KEY = "AIzaSyAXP7VF9NyzRmoKoJrJKy4oaSLAW3KmGO0"

const TOUCHPOINT_SVG_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/touchpoint-TvZw64XPwiM6cmiMieuiR0vc8RWmyM.svg"

// Aquí simplificado: tu JSON completo iría igual que antes
// GeoJSON embebido con las 21 comunas de Ñuble
const nubleComunasGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "San Nicolás",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.2139, -36.4992],
            [-72.1139, -36.4992],
            [-72.1139, -36.3992],
            [-72.2139, -36.3992],
            [-72.2139, -36.4992],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Chillán",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.1534, -36.6063],
            [-72.0534, -36.6063],
            [-72.0534, -36.5063],
            [-72.1534, -36.5063],
            [-72.1534, -36.6063],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Chillán Viejo",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.1883, -36.6372],
            [-72.0883, -36.6372],
            [-72.0883, -36.5372],
            [-72.1883, -36.5372],
            [-72.1883, -36.6372],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pemuco",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.1517, -36.9767],
            [-72.0517, -36.9767],
            [-72.0517, -36.8767],
            [-72.1517, -36.8767],
            [-72.1517, -36.9767],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "El Carmen",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.0811, -36.8994],
            [-71.9811, -36.8994],
            [-71.9811, -36.7994],
            [-72.0811, -36.7994],
            [-72.0811, -36.8994],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pinto",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.9431, -36.7003],
            [-71.8431, -36.7003],
            [-71.8431, -36.6003],
            [-71.9431, -36.6003],
            [-71.9431, -36.7003],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "San Ignacio",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.0817, -36.8092],
            [-71.9817, -36.8092],
            [-71.9817, -36.7092],
            [-72.0817, -36.7092],
            [-72.0817, -36.8092],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Quillón",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.5192, -36.7381],
            [-72.4192, -36.7381],
            [-72.4192, -36.6381],
            [-72.5192, -36.6381],
            [-72.5192, -36.7381],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Bulnes",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.3484, -36.7421],
            [-72.2484, -36.7421],
            [-72.2484, -36.6421],
            [-72.3484, -36.6421],
            [-72.3484, -36.7421],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Yungay",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.0656, -37.1211],
            [-71.9656, -37.1211],
            [-71.9656, -37.0211],
            [-72.0656, -37.0211],
            [-72.0656, -37.1211],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "San Carlos",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.0081, -36.4244],
            [-71.9081, -36.4244],
            [-71.9081, -36.3244],
            [-72.0081, -36.3244],
            [-72.0081, -36.4244],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "San Fabián",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.6008, -36.5539],
            [-71.5008, -36.5539],
            [-71.5008, -36.4539],
            [-71.6008, -36.4539],
            [-71.6008, -36.5539],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Coihueco",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.8807, -36.6278],
            [-71.7807, -36.6278],
            [-71.7807, -36.5278],
            [-71.8807, -36.5278],
            [-71.8807, -36.6278],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ñiquén",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.9519, -36.2917],
            [-71.8519, -36.2917],
            [-71.8519, -36.1917],
            [-71.9519, -36.1917],
            [-71.9519, -36.2917],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ninhue",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.4481, -36.4019],
            [-72.3481, -36.4019],
            [-72.3481, -36.3019],
            [-72.4481, -36.3019],
            [-72.4481, -36.4019],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Portezuelo",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.4833, -36.5294],
            [-72.3833, -36.5294],
            [-72.3833, -36.4294],
            [-72.4833, -36.4294],
            [-72.4833, -36.5294],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ránquil",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.6039, -36.6519],
            [-72.5039, -36.6519],
            [-72.5039, -36.5519],
            [-72.6039, -36.5519],
            [-72.6039, -36.6519],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Cobquecura",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-73.05, -36.2],
            [-72.95, -36.2],
            [-72.95, -36.1],
            [-73.05, -36.1],
            [-73.05, -36.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Treguaco",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.7167, -36.4333],
            [-72.6167, -36.4333],
            [-72.6167, -36.3333],
            [-72.7167, -36.3333],
            [-72.7167, -36.4333],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Quirihue",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.5914, -36.2828],
            [-72.4914, -36.2828],
            [-72.4914, -36.1828],
            [-72.5914, -36.1828],
            [-72.5914, -36.2828],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Coelemu",
        region: "Ñuble",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-72.7542, -36.4863],
            [-72.6542, -36.4863],
            [-72.6542, -36.3863],
            [-72.7542, -36.3863],
            [-72.7542, -36.4863],
          ],
        ],
      },
    },
  ],
}

const comunasCenters = nubleComunasGeoJson.features.map((feature) => {
  const coords = feature.geometry.coordinates[0]
  const lats = coords.map((coord) => coord[1])
  const lngs = coords.map((coord) => coord[0])
  const centerLat = lats.reduce((a, b) => a + b) / lats.length
  const centerLng = lngs.reduce((a, b) => a + b) / lngs.length

  return {
    name: feature.properties.name,
    position: { lat: centerLat, lng: centerLng },
  }
})

interface MapÑubleProps {
  data: FireData[]
  year: number
  selectedCommune: string
}

const MapÑuble = ({ data, year, selectedCommune }: MapÑubleProps) => {
  const mapRef = useRef<google.maps.Map | null>(null)
  const [loading, setLoading] = useState(true)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [markers, setMarkers] = useState<React.ReactNode[]>([])
  const controlAdded = useRef(false) // 👈 evitar duplicación del control

  const createRegionControl = (map: google.maps.Map) => {
    const controlDiv = document.createElement("div")
    controlDiv.className = "bg-white border border-gray-300 shadow-md rounded px-3 py-1 text-sm font-medium text-[#666666] cursor-pointer"
    controlDiv.innerText = "Región Ñuble"
    controlDiv.style.marginTop = "10px"
    controlDiv.style.marginRight = "10px"
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(controlDiv)
  }

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return

    const filteredComunas = comunasCenters.filter((comuna) =>
      selectedCommune === "Todas" || comuna.name === selectedCommune
    )

    const comunasMarkers = filteredComunas.map((comuna, index) => {
      const customIcon = {
        url: TOUCHPOINT_SVG_URL,
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 15),
      }

      const exactPosition = comuna.position

      return (
        <Marker
          key={`comuna-${index}`}
          position={exactPosition}
          icon={customIcon}
          title={comuna.name}
          onClick={() => {
            if (mapRef.current) {
              const infoWindow = new google.maps.InfoWindow({
                content: `<div style="font-family: Sora;"><h3>${comuna.name}</h3><p>Datos disponibles próximamente</p></div>`,
              })
              infoWindow.setPosition(exactPosition)
              infoWindow.open(mapRef.current)
            }
          }}
        />
      )
    })

    setMarkers(comunasMarkers)
  }, [mapLoaded, selectedCommune, data])

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map

    try {
      map.data.addGeoJson(nubleComunasGeoJson)

      map.data.setStyle({
        visible: false,
        fillOpacity: 0,
        strokeWeight: 0,
      })

      if (!controlAdded.current) {
        createRegionControl(map) // ✅ solo una vez
        controlAdded.current = true
      }

      setMapLoaded(true)
    } catch (error) {
      console.error("Error al añadir GeoJSON al mapa:", error)
    }

    setLoading(false)
  }, [])

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
          <Loader className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerÑuble}
          zoom={9}
          onLoad={onLoad}
          options={{
            mapTypeId: "terrain",
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
            restriction: {
              latLngBounds: nubleBounds,
              strictBounds: true,
            },
            minZoom: 8,
            maxZoom: 15,
          }}
        >
          {mapLoaded && markers}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapÑuble
