import { About } from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "MBAH-NDAM TSOMELOU Pavel";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
