import React from "react";
import "../styles/DownloadApp.css";
export default function DownloadApp() {
  return (
    <section id="dapp">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>
              <span className="text-primary">Télécharger</span> gratuitement
              notre application
            </h2>
            <div className="mt-2">
              <p>
                Profitez de votre temps libre pour apprennez une langue
                africaine avec un pârcours complet partout et à tout moment !
              </p>
            </div>
            <div className="play-apple ">
              <div className="d-flex d-lg-inline-block justify-content-center justify-content-lg-start">
                {" "}
                <a href="/">
                  {" "}
                  <img src="/assets/dapp/play.png" alt="" />
                </a>
              </div>
              <div className="d-flex d-lg-inline-block justify-content-center ">
                <a href="/">
                  {" "}
                  <img src="/assets/dapp/app.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
            <div>
              <img src="/assets/dapp/mobile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
