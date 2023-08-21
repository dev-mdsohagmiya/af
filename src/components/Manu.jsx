import React from "react";
import "../styles/Navber_Manu.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Manu(props) {
  const { onToggleData } = props;

  const handleToggle = () => {
    onToggleData("remove-toggle");
  };
  return (
    <div className="manu">
      <div className="">
        <div className="close-manu p-3 d-flex justify-content-end">
          <span>
            <AiFillCloseCircle
              className="close-manu-btn"
              onClick={handleToggle}
            />
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <img className="logo" src={"/assets/logo.svg"} alt="Logo" />
        </div>
        <div>
          {" "}
          <ul className="nav-list">
            <li className=" ">
              <a href="/"> MES COURS</a>
            </li>
            <hr />
            <li className="">
              <a href="/"> TARIFS</a>
            </li>
            <hr />
            <li className=" ">
              <a href="/"> POUR LES ÉCOLES</a>
            </li>
            <hr />
            <li className="">
              <a href="/">POUR LES PROS</a>
            </li>
            <hr />
            <li className=" d-flex justify-content-center ">
              <button className="connect-btn d-inline-block">
                JE ME CONNECTE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
