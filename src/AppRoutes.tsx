import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Contact } from '@/pages/Contact';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { Services } from '@/pages/Services';
import { Catalog } from '@/pages/Catalog';
import { About } from '@/pages/About';
import { FAQ } from '@/pages/FAQ';
import { SectorDetail } from '@/pages/SectorDetail';
import { Terms } from '@/pages/Terms';
import { Cookies } from '@/pages/Cookies';
import { NotFound } from '@/pages/NotFound';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

/**
 * Árbol de rutas compartido entre el cliente (BrowserRouter en App.tsx)
 * y el prerender del build (StaticRouter en entry-server.tsx).
 */
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
        <Route path="/sectores/:slug" element={<SectorDetail />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  );
}
