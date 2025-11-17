import { Navigation } from "./components/sections/Navigation.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { Footer } from "./components/sections/Footer.jsx";
import Ribbons from "./components/Ribbons.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Full-screen ribbon cursor effect */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: 9999
      }}>
        <Ribbons
          baseThickness={30}
          colors={['#ffffff']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
      
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
