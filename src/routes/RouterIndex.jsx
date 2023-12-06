import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import NavBar from "../pages/nav-bar/NavBar";
import Contact from "../pages/contact/Contact";
import NavbarMobile from "../components/navbar-mobile/NavbarMobile";
import PageLogoMobile from "../components/navbar-mobile/PageLogoMobile";
import Gallery from "../pages/gallery/Gallery";

const RouterIndex = () => {
  return (
    <>
      <NavBar />
      <PageLogoMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <NavbarMobile />
    </>
  );
};

export default RouterIndex;
