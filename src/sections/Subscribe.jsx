import SubscribeFrom from "../components/SubscribeFrom";
import "../styles/Subscribe.css";
import React from "react";

export default function Subscribe() {
  return (
    <section id="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="d-flex justify-content-center">
              <h2 className="">subscribe for updates</h2>
            </div>
            <div className="d-flex justify-content-center">
              <p className=" text-center">
                Lorem ipsum dolor sit amet consectetur. Quisque dolor
                scelerisque aliquet pulvinar vitae ante erat. Amet morbi posuere
                leo turpis ipsum. Senectus maecenas eros consectetur integer
                habitasse quisque.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="px-4">
              <SubscribeFrom />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
