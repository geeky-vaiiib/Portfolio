import { Navigation } from "./components/sections/Navigation.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { ProjectDetail } from "./components/sections/ProjectDetail.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { Footer } from "./components/sections/Footer.jsx";
import { CursorLabel } from "./components/CursorLabel.jsx";
import { useHashRoute } from "./lib/useHashRoute.js";

export default function App() {
  const slug = useHashRoute();

  return (
    <>
      <Navigation onDetail={!!slug} />
      <main id="main-content">
        {slug ? (
          <ProjectDetail key={slug} slug={slug} />
        ) : (
          <>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <CursorLabel />
    </>
  );
}
