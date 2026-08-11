import { Link, useLocation } from "react-router-dom"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Thermometer, FlaskConical, CheckCircle2, Pill, Apple, HeartPulse } from "lucide-react"
import { useState, useEffect } from "react"
import logo from "@/assets/logo.png"
import { trackConversion } from "@/lib/analytics"

export function Navbar() {
    const scrolled = useScroll(20)
    const [isOpen, setIsOpen] = useState(false)
    // Sección desplegada en el menú móvil; solo una a la vez para mantenerlo corto
    const [openSection, setOpenSection] = useState<string | null>(null)
    const location = useLocation()
    const isHome = location.pathname === "/"

    // Effect to lock scroll on mobile menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
            setOpenSection(null)
        }
        // Libera el bloqueo si el componente se desmonta con el menú abierto
        return () => { document.body.style.overflow = "unset" }
    }, [isOpen])

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        {
            name: "Servicios",
            href: "/servicios",
            hasDropdown: true,
            dropdownItems: [
                { name: "Calificación", href: "/servicios/calificacion", icon: CheckCircle2, description: "Equipos e instalaciones" },
                { name: "Calibración", href: "/servicios/calibracion", icon: Thermometer, description: "Calibración certificada" },
                { name: "Validación", href: "/servicios/validacion", icon: FlaskConical, description: "Procesos y sistemas" },
            ]
        },
        {
            name: "Sectores",
            href: "/sectores/farmaceutico",
            hasDropdown: true,
            dropdownItems: [
                { name: "Farmacéutico", href: "/sectores/farmaceutico", icon: Pill, description: "Cadena de frío y validación" },
                { name: "Alimenticio", href: "/sectores/alimenticio", icon: Apple, description: "Inocuidad y control térmico" },
                { name: "Químico", href: "/sectores/quimico", icon: FlaskConical, description: "Precisión de proceso" },
                { name: "Hospitalario", href: "/sectores/hospitalario", icon: HeartPulse, description: "Equipos clínicos" },
            ]
        },
        { name: "Productos", href: "/catalogo" },
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/preguntas-frecuentes" },
        { name: "Contacto", href: "/contacto" },
    ]

    // Determine navbar styling based on page and scroll state
    const isTransparent = isHome && !scrolled && !isOpen

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
                (!isTransparent && !isOpen) && "bg-slate-900/60 backdrop-blur-xl shadow-lg border-white/10 text-white supports-[backdrop-filter]:bg-slate-900/40",
                isOpen && "bg-[#0f172a] transition-none", // Solid background applied immediately when menu is open
                scrolled && "h-16" // Slightly smaller on scroll
            )}
        >
            <div className={cn("container mx-auto px-6 flex justify-between items-center transition-all duration-300", scrolled ? "h-16" : "h-20")}>
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl border border-white/20 shadow-inner group-hover:bg-white transition-all duration-300">
                        <img
                            src={logo}
                            alt="Caycer Logo"
                            className="h-9 w-auto object-contain transition-all"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.href}
                                className={cn(
                                    "text-sm font-medium transition-all hover:text-cyan relative tracking-wide flex items-center gap-1 py-4",
                                    isTransparent ? "text-white/90" : "text-slate-200"
                                )}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                                <span className={cn(
                                    "absolute bottom-2 left-0 w-0 h-0.5 bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all group-hover:w-full",
                                    link.hasDropdown ? "group-hover:w-[calc(100%-20px)]" : ""
                                )}></span>
                            </Link>

                            {/* Dropdown Menu */}
                            {link.hasDropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-64">
                                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden backdrop-blur-xl">
                                        {link.dropdownItems?.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center text-brand group-hover/item:bg-brand group-hover/item:text-white transition-colors">
                                                    <item.icon size={20} className="" />
                                                </div>
                                                <div>
                                                    <div className="text-slate-900 font-semibold text-sm group-hover/item:text-brand transition-colors">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-xs text-slate-500 font-light">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    {/* Invisible bridge to prevent closing when moving to dropdown */}
                                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                                </div>
                            )}
                        </div>
                    ))}
                    <a
                        href="https://wa.me/523335071061?text=Hola%20Caycer,%20me%20gustar%C3%ADa%20solicitar%20cotizaci%C3%B3n."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackConversion("contacto_whatsapp", { origen: "navbar_escritorio" })}
                        className="ml-4"
                    >
                        <Button
                            variant="cta"
                            className="font-bold tracking-wide bg-cyan text-slate-900 hover:bg-cyan-hover shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 border border-white/10"
                        >
                            COTIZAR AHORA
                        </Button>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden relative z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn("p-2 rounded-xl transition-colors border border-transparent text-white hover:bg-white/10", !isTransparent && "hover:border-white/10")}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={cn(
                // overflow-y-auto: el menú crece más que la pantalla en móviles y el
                // body está bloqueado, así que debe poder desplazarse por dentro.
                "fixed inset-0 bg-[#0f172a] z-40 transition-transform duration-500 pt-28 px-6 pb-12 md:hidden flex flex-col gap-6 overflow-y-auto overscroll-contain",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {navLinks.map((link) => {
                    const expandida = openSection === link.name
                    return (
                        <div key={link.name}>
                            {/* El texto navega; la flecha despliega la sección */}
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <Link
                                    to={link.href}
                                    className="text-3xl font-display font-light text-white hover:text-cyan tracking-wider"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.hasDropdown && (
                                    <button
                                        type="button"
                                        onClick={() => setOpenSection(expandida ? null : link.name)}
                                        aria-expanded={expandida}
                                        aria-label={`${expandida ? "Contraer" : "Expandir"} ${link.name}`}
                                        className="p-2 -mr-2 text-white/50 hover:text-cyan transition-colors"
                                    >
                                        <ChevronDown
                                            size={24}
                                            className={cn("transition-transform duration-300", expandida && "rotate-180")}
                                        />
                                    </button>
                                )}
                            </div>
                            {link.hasDropdown && (
                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    expandida ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <div className="pl-4 space-y-4 border-l border-white/10 ml-1">
                                            {link.dropdownItems?.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="block text-xl font-light text-slate-300 hover:text-cyan transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
                <a
                    href="https://wa.me/523335071061?text=Hola%20Caycer,%20me%20gustar%C3%ADa%20solicitar%20cotizaci%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion("contacto_whatsapp", { origen: "navbar_movil" })}
                    className="w-full mt-4"
                >
                    <Button variant="cta" className="w-full text-lg py-7 bg-cyan text-slate-900 font-bold rounded-xl shadow-lg shadow-cyan/20">
                        SOLICITAR COTIZACIÓN
                    </Button>
                </a>
            </div>
        </header>
    )
}
