import "./Header.scss";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();



  return (
    <div className="header">
      <div className="header__con1">
        <div
          className="header__logo"
          onClick={() => {
            nav("/");
          }}
        >DriveCalc</div>
      </div>
      <ul className="header__con2">
        <NavLink
          className={`header__link $
          {
            activeLink === "page1" ? "active" : ""
          }`
        }
          to="/carlist"
          //onClick={}
        >
          <li className="header__link-content">Your Car</li>
        </NavLink>
        <NavLink
          className={`header__link $
          {
            activeLink === "Page2" ? "active" : ""
          }`
        }
          to="/trip"
          onClick={(e) => {

          }}
        >
          <li className="header__link-content">Your Trip</li>
        </NavLink>
      </ul>
    </div>
  );
}
