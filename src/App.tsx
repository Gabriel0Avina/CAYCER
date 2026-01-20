import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from '@/pages/Home';
import { Contact } from '@/pages/Contact';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { Services } from '@/pages/Services';
import { Catalog } from '@/pages/Catalog';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
        </Routes>
        <FloatingWhatsApp />
      </Router>
    </HelmetProvider>
  );
}

export default App;
