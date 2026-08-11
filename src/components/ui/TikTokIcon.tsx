/**
 * TikTok no existe en lucide-react, así que va como SVG propio.
 * Hereda currentColor para comportarse igual que los íconos de lucide.
 */
export function TikTokIcon({ size = 18, className }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={className}
        >
            <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.76.12v-3.2a5.98 5.98 0 0 0-.76-.05A5.72 5.72 0 0 0 4.15 15.3 5.72 5.72 0 0 0 9.86 21a5.72 5.72 0 0 0 5.71-5.71V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.25-1.48Z" />
        </svg>
    )
}
