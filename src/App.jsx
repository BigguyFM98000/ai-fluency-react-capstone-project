import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="skills" element={<SkillsPage/>} />
        <Route path="projects" element={<ProjectsPage/>} />
        <Route path="contact" element={<ContactPage/>} />
      </Route>
    </Routes>
  )
}

export default App
