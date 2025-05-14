# 🌱 PLANSAT – Plataforma de Monitoreo de Incendios Forestales en Ñuble

PLANSAT es una plataforma web interactiva diseñada para visualizar, analizar y reportar datos geoespaciales sobre incendios forestales en la Región del Ñuble, Chile. Su objetivo es entregar herramientas claras para la toma de decisiones ambientales mediante visualizaciones, filtros dinámicos y mapas satelitales con capas de vegetación y afectación.

---

## 🚧 Estado del Proyecto

> **Fase actual: Desarrollo Inicial (v0)**  
> Se han construido las siguientes secciones base:
- ✅ **Landing Page** con enfoque informativo, visual y accesible.
- ✅ **Dashboard Interactivo** con integración de Google Maps, marcadores personalizados y datos simulados.

Próximas etapas:
- 🔜 Integración de base de datos real (PostgreSQL / API REST)
- 🔜 Generación de reportes en PDF
- 🔜 Vista comparativa histórica y proyección de recuperación vegetal

---

## 🚀 Funcionalidades principales

- 🗺️ **Mapa interactivo** con marcadores y polígonos por comuna.
- 🌲 Visualización de **datos históricos y proyectados** sobre vegetación e incendios.
- 📊 **Gráficos dinámicos** por tipo de vegetación, comuna y año.
- 🔍 **Filtros por comuna, año y cobertura vegetal.**
- 📝 Generación de reportes en PDF (próximamente).
- ♿ **Accesibilidad y diseño inclusivo.**

---

## 🧑‍💻 Tecnologías utilizadas

- **Frontend**: React + Next.js + Tailwind CSS
- **Mapas**: Google Maps JavaScript API
- **Visualizaciones**: Chart.js
- **Estilo y componentes**: Shadcn/ui + Tailwind
- **Backend (futuro)**: Node.js + PostgreSQL
- **Mock data**: GeoJSON embebido

---

## 📦 Instalación y desarrollo local

```bash
# Clona el repositorio
git clone https://github.com/Rmd-DW/PLANSAT.git
cd PLANSAT

# Instala las dependencias
npm install

# Ejecuta en modo desarrollo
npm run dev

