import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import About from "./Pages/About.jsx";
import Skill from "./Pages/Skill.jsx";
import Service from "./Pages/Service.jsx";
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";
import Gallery, { productInfoLoader } from "./Pages/Gallery.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Login from "./Pages/Login.jsx";
import Resume from "./Pages/Resume.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="sunilkumar" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="skill" element={<Skill />} />
      <Route path="service" element={<Service />} />
      <Route path="project" element={<Project />} />
      <Route loader={productInfoLoader} path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="login" element={<Login />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
