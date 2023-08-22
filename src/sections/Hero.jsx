import React from "react";
import "../styles/Hero.css";
import "../App.css";
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container container">
        <div className="row  ">
          <div className="col-12 col-lg-7  ">
            <div className="card-1">
              <div className=" ">
                <h1>
                  Apprendre
                  <span> une langue </span> africaine
                  <span> en lignes</span>
                </h1>
              </div>
              <p>
                Immerse yourself in your new language from the first lesson.{" "}
                <br className="d-none d-lg-block" /> you diving into the
                language as soon as you start learning it.
              </p>
              <div className="button-group d-flex d-lg-block justify-content-center ">
                <button className="btn1" id="btn1">
                  Je me lance
                </button>
                <button className="btn1" id="btn2">
                  Je m’inscris
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex  d-lg-flex justify-content-end ">
            <div className="card-2">
              <div className="image">
                <img
                  src="/assets/hero/herobg.svg"
                  className="image-bg"
                  alt=""
                />
                <img src="/assets/hero/photo.png" className="photo" alt="" />
              </div>
            </div>
          </div>
          {/* <div className="rocket">
            <img src="/assets/hero/rocket.png" className="img-1" alt="" />
            <small className="img-1-text text-white">Bambara</small>

            <img src="/assets/hero/rocket.png" className="img-2" alt="" />
            <small className="img-2-text text-white">Lingala</small>
            <img src="/assets/hero/rocket.png" className="img-3" alt="" />
            <small className="img-3-text text-white ">Wolof</small>
          </div> */}
        </div>
      </div>
    </section>
  );
}
