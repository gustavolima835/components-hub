"use client";

import MapComponent from "@/components/map-component";
import { useState, useRef } from "react";
import CulturalEventCard from "./cultural-event-card";

const locations = [
  {
    id: 1,
    name: "MASP",
    country: "Brasil",
    coordinates: [-23.561414, -46.655881] as [number, number],
    zoom: 17,
    description:
      "Museu de Arte de São Paulo Assis Chateaubriand, na Avenida Paulista.",
  },
  {
    id: 2,
    name: "Centro Cultural São Paulo",
    country: "Brasil",
    coordinates: [-23.5747, -46.6352] as [number, number],
    zoom: 17,
    description:
      "Espaço multicultural com biblioteca, exposições e apresentações.",
  },
  {
    id: 3,
    name: "Theatro Municipal",
    country: "Brasil",
    coordinates: [-23.5455, -46.6388] as [number, number],
    zoom: 17,
    description:
      "Um dos principais teatros do Brasil, com arquitetura histórica.",
  },
  {
    id: 4,
    name: "Museu da Língua Portuguesa",
    country: "Brasil",
    coordinates: [-23.5346, -46.6333] as [number, number],
    zoom: 17,
    description: "Museu interativo dedicado à língua portuguesa.",
  },
  {
    id: 5,
    name: "Pinacoteca de São Paulo",
    country: "Brasil",
    coordinates: [-23.5342, -46.6325] as [number, number],
    zoom: 17,
    description: "Um dos mais importantes museus de arte do Brasil.",
  },
  {
    id: 6,
    name: "Instituto Tomie Ohtake",
    country: "Brasil",
    coordinates: [-23.5672, -46.7033] as [number, number],
    zoom: 17,
    description: "Espaço para arte contemporânea e arquitetura.",
  },
  {
    id: 7,
    name: "Museu do Ipiranga",
    country: "Brasil",
    coordinates: [-23.5856, -46.6091] as [number, number],
    zoom: 17,
    description: "Museu Paulista da USP, marco da Independência do Brasil.",
  },
];

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const mapRef = useRef<any>(null);

  const handleLocationSelect = (location: (typeof locations)[0]) => {
    setSelectedLocation(location);
    if (mapRef.current) {
      mapRef.current.flyTo(location.coordinates, location.zoom);
    }
  };

  return (
    <div className="h-full rounded-2xl bg-gray-50 p-6">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Localizações
              </h2>
              <div className="space-y-3">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelect(location)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedLocation.id === location.id
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="font-medium text-gray-900">
                      {location.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {location.country}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col ">
            <div className="h-[300px]">
              <MapComponent
                ref={mapRef}
                center={selectedLocation.coordinates}
                zoom={selectedLocation.zoom}
                locations={locations}
                selectedLocation={selectedLocation}
              />
            </div>
            <div className="overflow-auto">

            <div className="py-6 flex gap-6 w-[2000px] overflow-y-auto">
              <CulturalEventCard />
              <CulturalEventCard />
              <CulturalEventCard />
              <CulturalEventCard />
              <CulturalEventCard />
              <CulturalEventCard />
              <CulturalEventCard />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
