import React from "react";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [field1, setField1] = useState("0");
  const [field2, setField2] = useState("0");
  const [entry_id, setEntry_id] = useState("0");
  const [created_at, setCreated_at] = useState("");
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/2209584/feeds/last.json"
        );
        const jsonData = await response.json();
        setField1(jsonData.field1 ?? "0");
        setField2(jsonData.field2 ?? "0");
        setEntry_id(jsonData.entry_id ?? "0");
        setCreated_at(jsonData.created_at ?? "");

        if (jsonData.created_at) {
          const formattedDateTime = format(
            new Date(jsonData.created_at),
            "yyyy-MM-dd (HH:mm:ss)"
          );
          setFormattedDateTime(formattedDateTime);
        } else {
          setFormattedDateTime("");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 10000); // Update data every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const iframeInterval = setInterval(() => {
      const iframes = document.getElementsByTagName("iframe");
      for (let i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src;
      }
    }, 7000); // Refresh iframes every 7 seconds

    return () => clearInterval(iframeInterval);
  }, []);

  return (
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
          {/* partial:partials/_sidebar.html */}
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
                    {/*change to offline or busy as needed*/}
                  </div>
                  <div className="nav-profile-text d-flex flex-column">
                    <span className="font-weight-bold mb-2">SIOTICS CLUB</span>
                    <span className="text-secondary text-small">
                      Administrator
                    </span>
                  </div>
                  <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                </a>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <span className="menu-title">Dashboard</span>
                  <i className="mdi mdi-home menu-icon" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servo">
                  <span className="menu-title">Servo Controller</span>
                  <i className="mdi mdi-home menu-icon" />
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
                    <i className="mdi mdi-home" />
                  </span>{" "}
                  Dashboard
                </h3>
              </div>
              <div className="row">
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-danger card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src="./assets/images/dashboard/circle.svg"
                        className="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 className="font-weight-normal mb-3">
                        Stats{" "}
                        <i className="mdi mdi-chart-line mdi-24px float-right" />
                      </h4>
                      <h3 className="mb-5">Temperature: {field1} °C</h3>
                      <h6 className="card-text">Increased by 60%</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-info card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src="./assets/images/dashboard/circle.svg"
                        className="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 className="font-weight-normal mb-3">
                        Stats {" "}
                        <i className="mdi mdi-bookmark-outline mdi-24px float-right" />
                      </h4>
                      <h3 className="mb-5">Humidity: {field2} %</h3>
                      <h6 className="card-text">Decreased by 10%</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-success card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src="./assets/images/dashboard/circle.svg"
                        className="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 className="font-weight-normal mb-3">
                        Stats {" "}
                        <i className="mdi mdi-diamond mdi-24px float-right" />
                      </h4>
                      <h3 className="mb-5">Total Data: {entry_id}</h3>
                      <h6 className="card-text">
                        Last Updated: {formattedDateTime}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="clearfix">
                        <iframe
                          src="https://thingspeak.com/channels/2209584/charts/1?bgcolor=%23ffffff&color=%23f6c23e&dynamic=true&results=60&title=Temperature+Cart&type=spline&update=5"
                          width="100%"
                          height="250px"
                          frameborder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <iframe
                        src="https://thingspeak.com/channels/2209584/charts/2?bgcolor=%23ffffff&color=%2336b9cc&dynamic=true&results=60&title=Humidity+Cart&type=spline&update=5"
                        width="100%"
                        height="250px"
                        frameborder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
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
  );
};

export default Dashboard;
