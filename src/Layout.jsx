import React from "react";
import Navber from "./components/Navber";
import Hero from "./sections/Hero";

export default function Layout() {
  return (
    <div>
      <Navber />
      <div>
        <Hero />
      </div>
    </div>
  );
}
