"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = [
  {
    id: 1,
    src: "/5.5.png",
    title: "Virada Cultural",
    description:
      "A Virada Cultural 2025 celebrou 20 anos com 24 horas de arte, música e diversidade espalhadas por toda São Paulo.",
  },
  {
    id: 2,
    src: "/4.4.png",
    title: "Ponte Estaiada",
    description:
      "Um dos cartões postais mais modernos de São Paulo, conectando a cidade com sua arquitetura única.",
  },
  {
    id: 3,
    src: "/3.3.png",
    title: "Festival Eletrônico",
    description:
      "A energia contagiante dos festivais que movimentam as noites paulistanas com música e luzes.",
  },
  {
    id: 4,
    src: "/2.2.png",
    title: "Arte Urbana",
    description:
      "A expressão artística que colore as ruas e muros da maior metrópole do Brasil.",
  },
  {
    id: 5,
    src: "/1.1.png",
    title: "Skyline Moderno",
    description:
      "A vista panorâmica que revela a grandiosidade arquitetônica da metrópole paulista.",
  },
];

export default function ExpandableCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="flex items-center flex-col gap-8 justify-center h-full relative bg-cover bg-center bg-no-repeat w-full rounded-2xl"
      style={{
        backgroundImage: `url('/images/gradient-background.jpeg')`,
      }}
    >
      <div className="relative z-10 w-2/3">
        <div className="flex flex-col justify-between">
          <div className="flex-1 text-[#292929]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-2 animate-fade-in">
              O Espectro Paulistano
            </h1>
          </div>

          <div className="animate-fade-in-delay-2 flex flex-row justify-between items-center text-[#292929]">
            <p className="text-lg md:text-xl leading-snug max-w-2xl animate-fade-in-delay">
              Os principais eventos prestigiados pela população da cidade de São
              Paulo, trazidos pela Secretaria Municipal de Cultura
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-[#292929]/10 border-[#292929]/30 text-[#292929] hover:bg-[#292929]/20 hover:border-[#292929]/50 backdrop-blur-sm transition-all duration-300 px-8 py-3 text-lg font-medium hover:scale-105"
            >
              Ver mais
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[500px] w-2/3 rounded-3xl overflow-hidden gap-2 justify-center">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative cursor-pointer overflow-hidden rounded-2xl"
            initial={false}
            animate={{
              width: activeIndex === index ? "100%" : "30%",
            }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onHoverStart={() => setActiveIndex(index)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${image.src})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8"
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 30,
              }}
              transition={{
                duration: 0.1,
                delay: activeIndex === index ? 0.5 : 0,
              }}
            >
              <h2 className="text-white text-3xl font-bold mb-1 leading-tight">
                {image.title}
              </h2>
              <p className="text-white/90 text-base leading-relaxed max-w-md">
                {image.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
