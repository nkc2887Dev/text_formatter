import React from "react";
import { MODE } from "../constants/constant";

interface NavbarProps {
  title: string;
  mode: string;
  toggle: any;
}

const Navbar: React.FC<NavbarProps> = ({ title, mode, toggle }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={() => toggle()}
          />
          <label
            className={`custom-control-label text-${
              mode === MODE.DARK ? MODE.LIGHT : MODE.DARK
            }`}
            htmlFor="customSwitch1"
          >
            {mode === MODE.DARK ? "Enable light mode" : "Enable dark mode"}
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
