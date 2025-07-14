import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CulturalEventCard() {
  return (
    <div className="w-[320px] bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-[200px]">
        <Image
          src="/ferreira.gif"
          alt="Shakespeare & Rock'n Roll performance"
          fill
          className="object-cover"
        />

        <div className="absolute top-3 left-3">
          <Badge className="text-white px-3 py-1 text-sm font-medium">Musical</Badge>
        </div>

      </div>
        <div className="bg-gray-900 to-transparent p-4">
          <h2 className="text-white text-lg font-semibold">Shakespeare & Rock'n Roll</h2>
          <p className="text-white/90 text-sm font-light">C.T. Cultural Cidade Tiradentes</p>
          <p className="text-white/90 text-sm font-light">11 de julho, às 20h</p>
        </div>

      <div>
        <Button className="w-full bg-white text-black font-medium py-3 rounded-b-lg">
          Evento gratuito
        </Button>
      </div>
    </div>
  )
}
