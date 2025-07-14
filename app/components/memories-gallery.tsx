"use client";

import Image from "next/image";
import { useMemo } from "react";

const memories = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    alt: "Família reunida",
    borderColor: "border-pink-400",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    alt: "Casamento ao pôr do sol",
    borderColor: "border-blue-400",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3",
    alt: "Show com fogos",
    borderColor: "border-yellow-400",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3",
    alt: "Piquenique",
    borderColor: "border-red-400",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3",
    alt: "Barco",
    borderColor: "border-purple-400",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3",
    alt: "Praia",
    borderColor: "border-green-400",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3",
    alt: "Acampamento",
    borderColor: "border-orange-400",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3",
    alt: "Balão",
    borderColor: "border-cyan-400",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3",
    alt: "Festival",
    borderColor: "border-indigo-400",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3",
    alt: "Golfinhos",
    borderColor: "border-amber-400",
  },
];

export default function MemoriesGallery() {
  const columns = useMemo(() => {
    const sizeOptions = [
      "w-96 h-72",
      "w-72 h-96",
      "w-80 h-60",
      "w-60 h-80",
      "w-64 h-48",
    ];

    const cols = memories.map(() => {
      const count = Math.floor(Math.random() * 2) + 3;
      const picked = [...memories]
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map((mem) => ({
          ...mem,
          size: sizeOptions[Math.floor(Math.random() * sizeOptions.length)],
        }));
      return picked;
    });
    return [...cols, ...cols];
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl bg-green-500 overflow-hidden py-6">
      <div className="flex justify-center items-center pt-8">
        <h1 className="text-6xl font-medium text-white">
          <span className="text-black">Explore a</span> Galeria de Momentos
        </h1>
      </div>

      <div
        className="absolute inset-0 top-44 flex items-start gap-8 whitespace-nowrap animate-marquee"
        style={{ animationDuration: "60s" }}
      >
        {columns.map((col, idx) => (
          <div key={idx} className="inline-flex flex-col gap-8">
            {col.map((mem, j) => (
              <div
                key={j}
                className={`relative flex-shrink-0 ${mem.size} ${mem.borderColor} border-8 rounded-2xl overflow-hidden bg-white shadow-2xl`}
              >
                <Image
                  src={mem.src}
                  alt={mem.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
