import AboutClients from "../components/AboutClients";
import "../styles/About.css";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div>
        <div className=" container">
          <div className="d-flex justify-content-center ">
            <h2>
              This is What <span className="text-primary">Media Saying</span>{" "}
              About Us
            </h2>
          </div>
          <div className="d-flex justify-content-center text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
              Ut enim ad minim veniam
            </p>
          </div>
          <div className="py-3 py-lg-5">
            <AboutClients />
          </div>
        </div>
      </div>
    </section>
  );
}
