import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import HomePage from "./pages/Home_page";
import SkillsPage from "./pages/skills_page";
import { Footer } from "./components/sections/Footer";
import ExperiencePage from "./pages/experiences_page";
import ProjectsPage from "./pages/projects_pages";
import NotFound from "./components/sections/notfound";
import Contact from "./pages/contact_page";
import Blog from "./pages/blog_page";
import ArticlePage from "./pages/article_page";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticlePage />} /> 

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
