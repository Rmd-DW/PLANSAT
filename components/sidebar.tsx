"use client"

import { Home, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isMobile?: boolean
  onClose?: () => void
  isCollapsed?: boolean
  onToggleCollapse?: () => void
}

export default function Sidebar({
  activeSection,
  setActiveSection,
  isMobile = false,
  onClose,
  isCollapsed = false,
  onToggleCollapse,
}: SidebarProps) {
  const menuItems = [{ id: "inicio", label: "Inicio", icon: Home }]

  // Estado local para manejar el colapso si no se proporciona desde fuera
  const [localCollapsed, setLocalCollapsed] = useState(false)

  // Usar el estado proporcionado o el local
  const collapsed = onToggleCollapse ? isCollapsed : localCollapsed

  // Función para alternar el colapso
  const toggleCollapse = () => {
    if (onToggleCollapse) {
      onToggleCollapse()
    } else {
      setLocalCollapsed(!localCollapsed)
    }
  }

  return (
    <div className={`bg-card border-r h-full flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <Link href="/dashboard">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-FE1MGS6isFplG4BZ1WYezlE61Ypq3j.png"
              alt="PLANSAT Logo"
              width={150}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>
        )}
        {collapsed && (
          <div className="mx-auto">
            <Link href="/dashboard">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
            </Link>
          </div>
        )}
        {isMobile && onClose && !collapsed && (
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        )}
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                } ${collapsed ? "justify-center" : ""}`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`p-4 border-t text-sm text-muted-foreground ${collapsed ? "text-center" : ""}`}>
        {!collapsed && <p>© 2025 PLANSAT</p>}
      </div>

      {/* Botón para colapsar/expandir la sidebar */}
      <button
        onClick={toggleCollapse}
        className="absolute -right-3 top-20 bg-card border rounded-full p-1 shadow-md hover:bg-muted"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  )
}
