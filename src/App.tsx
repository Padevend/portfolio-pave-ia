import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/ui/navbar";
import { Footer } from "./components/sections/Footer";
import LoadingFallback from "./components/ui/loadingFallback";

// ── Lazy Loading des pages ────────────────────────────────────────────────
const HomePage = lazy(() => import("./pages/Home_page"));
const SkillsPage = lazy(() => import("./pages/skills_page"));
const ExperiencePage = lazy(() => import("./pages/experiences_page"));
const ProjectsPage = lazy(() => import("./pages/projects_pages"));
const Contact = lazy(() => import("./pages/contact_page"));
const Blog = lazy(() => import("./pages/blog_page"));
const ArticlePage = lazy(() => import("./pages/article_page"));
const NotFound = lazy(() => import("./components/sections/notfound"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Suspense avec fallback pendant le chargement */}
      <Suspense
        fallback={
          <LoadingFallback />
        }
      >
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
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
