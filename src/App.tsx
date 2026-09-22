import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionProvider } from './providers/MotionProvider';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer';
import { WebGLCanvas } from './webgl/WebGLCanvas';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { CaseStudy } from './pages/CaseStudy';
import { KnowUs } from './pages/KnowUs';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MotionProvider>
        <div className="averra-app">
          {/* Optional shared WebGL background layer */}
          <WebGLCanvas />
          {/* Reusable autonomous Navbar */}
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="/know-us" element={<KnowUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </MotionProvider>
    </BrowserRouter>
  );
};

export default App;
