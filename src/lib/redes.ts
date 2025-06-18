import { redesIcon } from "../utils/redIcons"
import { reWhatsapp } from "../utils/refactor"

interface Red {
  id: number,
  nombre: string,
  link: string,
  icon: React.JSX.Element,
}

export const redes: Red[] = [
  {
    id: 1,
    nombre: "Instagram",
    link: "https://www.instagram.com/colombiaenunsabor/",
    icon: redesIcon.instagram
  },
  {
    id: 2,
    nombre: "Gmail",
    link: "mailto:colombiaenunsabor@gmail.com",
    icon: redesIcon.gmail
  },
  {
    id: 3,
    nombre: "WhatsApp 1",
    link: reWhatsapp("3227665000"),
    icon: redesIcon.whatsapp
  },
  {
    id: 4,
    nombre: "WhatsApp 2",
    link: reWhatsapp("3046234929"),
    icon: redesIcon.whatsapp
  }
]