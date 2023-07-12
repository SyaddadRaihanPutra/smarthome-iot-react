import React from "react";
import { Link } from "react-router-dom";

function Servo() {
  return (
    <div>
      <>
        <div className="container-scroller">
          <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="/">
                <h3 className="fw-bold" style={{ letterSpacing: "3px" }}>
                  SIOTICS <span className="text-danger">•</span>
                </h3>
              </a>
              <a className="navbar-brand brand-logo-mini" href="/">
                <img src="./assets/images/logo-mini.svg" alt="logo" />
              </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
              <button
                className="navbar-toggler navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
              >
                <span className="mdi mdi-menu" />
              </button>
              <div className="search-field d-none d-md-block"></div>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item d-none d-lg-block full-screen-link">
                  <a className="nav-link">
                    <i className="mdi mdi-fullscreen" id="fullscreen-button" />
                  </a>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span className="mdi mdi-menu" />
              </button>
            </div>
          </nav>
          {/* partial */}
          <div className="container-fluid page-body-wrapper">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item nav-profile">
                  <a href="#" className="nav-link">
                    <div className="nav-profile-image">
                      <img
                        src="./assets/images/SMKN1-JAKARTA.png"
                        alt="profile"
                      />
                      <span className="login-status online" />
                    </div>
                    <div className="nav-profile-text d-flex flex-column">
                      <span className="font-weight-bold mb-2">
                        SIOTICS CLUB
                      </span>
                      <span className="text-secondary text-small">
                        Administrator
                      </span>
                    </div>
                    <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <span className="menu-title">Dashboard</span>
                    <i className="mdi mdi-home menu-icon" />
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/servo">
                    <span className="menu-title">Servo Control</span>
                    <i className="mdi mdi-cast-off menu-icon" />
                  </Link>
                </li>
              </ul>
            </nav>
            {/* partial */}
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="page-header">
                  <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                      <i className="mdi mdi-cast-off" />
                    </span>{" "}
                    Servo Control Page
                  </h3>
                </div>
                <div className="row">
                  <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="clearfix" style={{ height: "50vh" }}>
                          <iframe src="https://servo-iot.netlify.app/" width="100%" height="100%"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <div className="container-fluid d-flex justify-content-center">
                  <span
                    className="text-muted text-center"
                    style={{ letterSpacing: "1px" }}
                  >
                    Copyright ©{" "}
                    <a
                      href="http://siotics.org/"
                      className="text-decoration-none"
                      target="_blank"
                    >
                      SIOTICS
                    </a>{" "}
                    2023
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Servo;
