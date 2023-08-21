import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Manu from "./Manu";
import "../styles/Navber_Manu.css";
export default function Navber() {
  const [toggle, setToggle] = useState("");
  const handleToggle = () => {
    setToggle("toggler-class");
    if (toggle === "toggler-class") {
      setToggle("remove-toggle");
    }
  };
  const onToggleData = (data) => {
    setToggle(data);
  };
  return (
    <div>
      <div className="container py-4 ">
        <div className="row ">
          <div className="col-1">
            <img className="logo" src={"/assets/logo.svg"} alt="Logo" />
          </div>
          <div className="col-11  justify-content-end d-flex   ">
            <ul className="nav-list">
              <li className="d-inline-block d-none d-md-inline-block">
                <a href="/"> MES COURS</a>
              </li>
              <li className="d-inline-block d-none d-md-inline-block">
                <a href="/"> TARIFS</a>
              </li>
              <li className="d-inline-block d-none d-md-inline-block">
                <a href="/"> POUR LES ÉCOLES</a>
              </li>
              <li className="d-inline-block d-none d-md-inline-block">
                <a href="/">POUR LES PROS</a>
              </li>
              <li className="d-inline-block">
                <button className="connect-btn d-inline-block">
                  JE ME CONNECTE
                </button>
              </li>
              <li className="d-inline-block toggle-btn">
                <span>
                  <HiOutlineMenuAlt1
                    className="toggle-btn"
                    id="toggle-btn"
                    onClick={handleToggle}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`manu-toggle ${toggle} z-3`}>
        <Manu onToggleData={onToggleData} />
      </div>
    </div>
  );
}
