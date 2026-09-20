import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import SkillsPage from "./pages/Skills.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactPage from "./pages/Contact.jsx";

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
