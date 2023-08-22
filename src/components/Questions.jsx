import React from "react";
import "../styles/Questions.css";
import ToggleTabs from "./ToggleTabs";

export default function Questions() {
  return (
    <div>
      {/* Tabs */}
      <div id="ques">
        <div className="d-flex justify-content-center ques-tabs mt-4 mb-4">
          <button className="btn-1 bg-primary text-white">General</button>
          <button className="mx-2 btn-1">Support</button>
          <button className="btn-1">Product</button>
        </div>
      </div>
      {/* Tabs Data */}
      <div>
        <ToggleTabs />
      </div>
    </div>
  );
}
