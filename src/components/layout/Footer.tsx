import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react"
import logo from "@/assets/logo.png"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Certs */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <div className="bg-white/95 p-2 rounded-lg shadow-sm inline-block">
                                <img src={logo} alt="Caycer Logo" className="h-12 w-auto object-contain" />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Expertos en Metrología, Calificación y Validación. Laboratorio acreditado bajo la norma <span className="text-cyan font-medium">NMX-EC-17025-IMNC-2018</span>.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {/* Social Icons */}
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan hover:text-white transition-all text-slate-400"><Facebook size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan hover:text-white transition-all text-slate-400"><Linkedin size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan hover:text-white transition-all text-slate-400"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Navegación</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/servicios" className="hover:text-cyan transition-colors">Servicios</Link></li>
                            <li><Link to="/contacto" className="hover:text-cyan transition-colors">Cotizar</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-cyan shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-white transition-colors leading-relaxed">
                                    Batalla de Puebla 3643, Col. El Tapatío,<br />
                                    San Pedro Tlaquepaque, Jal. CP 45588
                                </span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Phone className="w-5 h-5 text-cyan shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col gap-1 group-hover:text-white transition-colors">
                                    <span>33 32 60 16 57</span>
                                    <span>33 32 60 16 58</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <MessageCircle className="w-5 h-5 text-cyan shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-white transition-colors">33 35 07 10 61 (WhatsApp)</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Mail className="w-5 h-5 text-cyan shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col gap-1 group-hover:text-white transition-colors">
                                    <span>ventas@caycer.com.mx</span>
                                    <span>ventas2@caycer.com.mx</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden relative group border border-slate-700">
                        {/* Placeholder Map Image/Iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.460833139265!2d-103.3101!3d20.6101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1fb55555555%3A0x5555555555555555!2sBatalla%20de%20Puebla%203643%2C%20El%20Tapat%C3%ADo%2C%2045588%20Tlaquepaque%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1715555555555!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                            title="Ubicación Caycer"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} CAYCER. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link to="/terminos" className="hover:text-white">Términos y Condiciones</Link>
                        <Link to="/cookies" className="hover:text-white">Política de Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
