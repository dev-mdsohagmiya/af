import React from "react";
import Navber from "./components/Navber";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import About from "./sections/About";
import AboutClients from "./components/AboutClients";
import AskQuestions from "./sections/AskQuestions";
import DownloadApp from "./sections/DownloadApp";

export default function Layout() {
  return (
    <div>
      <Navber />
      <div>
        <Hero />
      </div>
      <div>
        <DownloadApp />
      </div>
      <div>
        <AskQuestions />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
