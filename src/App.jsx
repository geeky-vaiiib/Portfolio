import { Navigation } from "./components/sections/Navigation.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { Footer } from "./components/sections/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
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
