"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const images = [
  {
    id: 1,
    src: "https://media.discordapp.net/attachments/1392158678408368128/1393352124653633666/5.5.png?ex=68742d49&is=6872dbc9&hm=ce3d4cd7a5d3eceb6fc09831fecd16880037975129aac2ec9bdaf2649aa4f1a6&=&format=webp&quality=lossless&width=1128&height=846",
    title: "Virada Cultural",
    description:
      "A Virada Cultural 2025 celebrou 20 anos com 24 horas de arte, música e diversidade espalhadas por toda São Paulo.",
  },
  {
    id: 2,
    src: "https://media.discordapp.net/attachments/1392158678408368128/1393352123818708992/4.4.png?ex=68742d49&is=6872dbc9&hm=734183c58a967078d79da81088699c57d8e3db655a920a2f2720c3f346810a45&=&format=webp&quality=lossless",
    title: "Ponte Estaiada",
    description: "Um dos cartões postais mais modernos de São Paulo, conectando a cidade com sua arquitetura única.",
  },
  {
    id: 3,
    src: "https://media.discordapp.net/attachments/1392158678408368128/1393352123147620372/3.3.png?ex=68742d49&is=6872dbc9&hm=e834410042036bf05f38f51f8a7f786b27e09e67e8a45883a6a8d9199ac95e2b&=&format=webp&quality=lossless",
    title: "Festival Eletrônico",
    description: "A energia contagiante dos festivais que movimentam as noites paulistanas com música e luzes.",
  },
  {
    id: 4,
    src: "https://media.discordapp.net/attachments/1392158678408368128/1393352122413744280/2.2.png?ex=68742d49&is=6872dbc9&hm=24cc226e547afbd2c917620b1013abb2f4c98a99831274c2abd56fa4c40e3b9b&=&format=webp&quality=lossless",
    title: "Skyline Moderno",
    description: "A vista panorâmica que revela a grandiosidade arquitetônica da metrópole paulista.",
  },
  {
    id: 5,
    src: "https://media.discordapp.net/attachments/1392158678408368128/1393352126117183588/1.1.png?ex=68742d4a&is=6872dbca&hm=c5b9f94453760e04761b910bed8507b837d3581da30b60b37cb1c102951ee8ac&=&format=webp&quality=lossless",
    title: "Arte Urbana",
    description: "A expressão artística que colore as ruas e muros da maior metrópole do Brasil.",
  },
]

export default function ExpandableCards() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div
      className="flex items-center justify-center h-full p-8 relative bg-cover bg-center bg-no-repeat w-full rounded-2xl"
      style={{
        backgroundImage: `url('/images/gradient-background.jpeg')`,
      }}
    >
      <div className="flex h-[500px] w-full rounded-3xl overflow-hidden gap-2 justify-center">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative cursor-pointer overflow-hidden rounded-2xl"
            initial={false}
            animate={{
              width: activeIndex === index ? "30%" : "8%",
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
              <h2 className="text-white text-3xl font-bold mb-1 leading-tight">{image.title}</h2>
              <p className="text-white/90 text-base leading-relaxed max-w-md">{image.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
