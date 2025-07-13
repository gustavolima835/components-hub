"use client"

import { forwardRef, useImperativeHandle, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const selectedIcon = new L.DivIcon({
  className: "custom-marker selected",
  html: `
    <div style="
      width: 20px;
      height: 20px;
      background: #ef4444;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      position: relative;
    ">
      <div style="
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "></div>
    </div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
})

const defaultIcon = new L.DivIcon({
  className: "custom-marker default",
  html: `
    <div style="
      width: 16px;
      height: 16px;
      background: #3b82f6;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    "></div>
  `,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})

interface Location {
  id: number
  name: string
  country: string
  coordinates: [number, number]
  zoom: number
  description: string
}

interface MapComponentProps {
  center: [number, number]
  zoom: number
  locations: Location[]
  selectedLocation: Location
}

function MapController() {
  const map = useMap()
  return null
}

const MapComponent = forwardRef<any, MapComponentProps>(({ center, zoom, locations, selectedLocation }, ref) => {
  const mapRef = useRef<L.Map | null>(null)

  useImperativeHandle(ref, () => ({
    flyTo: (center: [number, number], zoom: number, options?: any) => {
      if (mapRef.current) {
        mapRef.current.flyTo(center, zoom, {
          duration: 2,
          easeLinearity: 0.1,
          ...options,
        })
      }
    },
  }))

  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg relative">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <MapController />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={location.id === selectedLocation.id ? selectedIcon : defaultIcon}
          >
            <Popup closeButton={false} className="modern-popup" offset={[0, -10]}>
              <div className="p-3 min-w-[200px]">
                <h3 className="font-semibold text-gray-900 text-base mb-1">{location.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{location.country}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <button
          onClick={() => mapRef.current?.zoomIn()}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors flex items-center justify-center text-gray-700 hover:text-gray-900"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <button
          onClick={() => mapRef.current?.zoomOut()}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors flex items-center justify-center text-gray-700 hover:text-gray-900"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
          border: none !important;
          padding: 0 !important;
        }
        
        .leaflet-popup-tip {
          background: white !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        .leaflet-popup-content {
          margin: 0 !important;
          border-radius: 12px !important;
        }
        
        .leaflet-container {
          background: #f8fafc !important;
        }
        
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .leaflet-control-attribution {
          display: none !important;
        }
      `}</style>
    </div>
  )
})

MapComponent.displayName = "MapComponent"

export default MapComponent
