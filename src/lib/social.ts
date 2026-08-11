import { Facebook, Instagram, Youtube } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { TikTokIcon } from "@/components/ui/TikTokIcon"

export interface SocialProfile {
    name: string;
    url: string;
    /** Ícono de lucide, o el SVG propio de TikTok. */
    Icon: LucideIcon | typeof TikTokIcon;
}

/**
 * Perfiles oficiales. Fuente única: alimenta los íconos del footer y el
 * `sameAs` del schema de la home, que es la señal con la que Google confirma
 * que el sitio y esas cuentas son la misma entidad. Si divergen, la señal se
 * debilita, así que ambos consumidores leen de aquí.
 */
export const socialProfiles: SocialProfile[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61568053790628",
        Icon: Facebook,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/caycer.ing/",
        Icon: Instagram,
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@caycer.ing",
        Icon: TikTokIcon,
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@CaycerIngenier%C3%ADayMetrolog%C3%ADa",
        Icon: Youtube,
    },
]

/** URLs para el `sameAs` del schema. */
export const socialUrls = socialProfiles.map((p) => p.url)
