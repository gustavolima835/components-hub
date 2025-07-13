"use client";

import Image from "next/image";

const memories = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    alt: "Família reunida para foto",
    borderColor: "border-pink-400",
    size: "w-48 h-32",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    alt: "Casamento ao pôr do sol",
    borderColor: "border-blue-400",
    size: "w-32 h-32",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3",
    alt: "Show de música com fogos de artifício",
    borderColor: "border-yellow-400",
    size: "w-40 h-48",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3",
    alt: "Piquenique no parque",
    borderColor: "border-red-400",
    size: "w-44 h-36",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3",
    alt: "Viagem de barco",
    borderColor: "border-purple-400",
    size: "w-36 h-36",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3",
    alt: "Casal na praia",
    borderColor: "border-green-400",
    size: "w-38 h-44",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3",
    alt: "Acampamento na natureza",
    borderColor: "border-orange-400",
    size: "w-42 h-28",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3",
    alt: "Passeio de balão",
    borderColor: "border-cyan-400",
    size: "w-36 h-40",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3",
    alt: "Amigos no festival",
    borderColor: "border-indigo-400",
    size: "w-44 h-32",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3",
    alt: "Nadar com golfinhos",
    borderColor: "border-amber-400",
    size: "w-40 h-36",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3",
    alt: "Esqui na montanha",
    borderColor: "border-pink-500",
    size: "w-48 h-32",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3",
    alt: "Fotografia de paisagem",
    borderColor: "border-blue-500",
    size: "w-32 h-32",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3",
    alt: "Caminhada na floresta",
    borderColor: "border-yellow-500",
    size: "w-40 h-48",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3",
    alt: "Cidade à noite",
    borderColor: "border-red-500",
    size: "w-44 h-36",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3",
    alt: "Praia tropical",
    borderColor: "border-purple-500",
    size: "w-36 h-36",
  },
];

export default function MemoriesGallery() {
  const duplicatedMemories = [...memories, ...memories];

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden rounded-2xl">
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center gap-y-[-10px]">
          <MemoriesRow 
            memories={duplicatedMemories} 
            direction="left"
            speed="45s"
            className="z-10 -mb-8"
          />
          
          <MemoriesRow 
            memories={duplicatedMemories} 
            direction="right"
            speed="60s"
            rotationDirection="negative"
            className="z-20"
          />
          
          <MemoriesRow 
            memories={duplicatedMemories} 
            direction="left"
            speed="50s"
            className="z-10 -mt-8"
          />
        </div>
      
        <VinetaOverlay />
      </div>
    </div>
  );
}

function VinetaOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-green-500 to-transparent z-20" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-green-500 to-transparent z-20" />
    </div>
  );
}

interface MemoriesRowProps {
  memories: typeof memories;
  direction: "left" | "right";
  speed: string;
  rotationDirection?: 'positive' | 'negative';
  className?: string;
}

function MemoriesRow({ memories, direction, speed, rotationDirection = 'positive', className }: MemoriesRowProps) {
  const animationDirection = direction === "left" ? "animate-scrollLeft" : "animate-scrollRight";
  
  return (
    <div className={`flex gap-3 items-center z-20 ${animationDirection} ${className}`} style={{ animationDuration: speed }}>
      {memories.map((memory, index) => (
        <MemoryCard 
          key={`row-${memory.id}-${index}`} 
          memory={memory} 
          index={index}
          rotationDirection={rotationDirection}
        />
      ))}
    </div>
  );
}

interface MemoryCardProps {
  memory: typeof memories[0];
  index: number;
  rotationDirection?: 'positive' | 'negative';
}

function MemoryCard({ memory, index, rotationDirection = 'positive' }: MemoryCardProps) {
  const baseRotation = rotationDirection === 'positive' 
    ? ((index % 4) - 1) * 1.5 
    : -((index % 4) - 1) * 1.5;

  return (
    <div
      className={`relative ${memory.size} ${memory.borderColor} border-4 rounded-2xl overflow-hidden bg-white flex-shrink-0 shadow-2xl transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-3xl group`}
      style={{
        transform: `rotate(${baseRotation}deg)`,
        transformOrigin: "center center",
      }}
    >
      <Image 
        src={memory.src} 
        alt={memory.alt} 
        fill
        className="object-cover scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+PC9zdmc+"
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20">
        <span className="text-white font-bold text-sm opacity-0 px-2 text-center transition-opacity duration-300 group-hover:opacity-100">
          {memory.alt}
        </span>
      </div>
    </div>
  );
}