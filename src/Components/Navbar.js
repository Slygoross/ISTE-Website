import image1 from "../Images/ISTE.png";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={image1} alt="ISTE logo" width="auto" height="50px"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Announcements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
