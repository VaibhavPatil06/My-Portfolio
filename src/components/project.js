import React from "react";

export default function project() {
  return (
    <div className="container ">
      <center>
        <h1 className="text-light mb-4 mt-2 ">PROJECTS</h1>
      </center>

      <div className="row mb-2 pr-container">
        <div className="col-md-6">
          <div className="row g-0 border bg-light rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column ">
              <a
                href="https://github.com/VaibhavPatil06/Online-Voting-System"
                className="text-reset"
              >
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  <h3>Online Voting System</h3>
                </strong>
                <h6 className="mb-0">
                  HTML5, CSS3, EJS, Node.js, Express.js, Mysql, Bootstrap.
                </h6>
                <br />
                <p className="card-text mb-auto">
                  Modern online voting systems enhance accessibility, security,
                  and efficiency, revolutionizing the electoral process.
                </p>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src="./assets/vote.png"
                alt=" "
                width="350px "
                height="250px"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border bg-light rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <a
                href="https://github.com/VaibhavPatil06/just-trial"
                className="text-reset"
              >
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  <h4>College Fest Organizing Website</h4>
                </strong>
                <h6 className="mb-0">
                  HTML5, CSS3, EJS, Node.js, Express.js, Mysql, Tailwind CSS.
                </h6>
                <br />
                <p className="mb-auto">
                  Efficient college fest management system streamlines event
                  planning, coordination, and execution for memorable
                  experiences.
                </p>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src="./assets/college.png"
                alt=""
                width="350px"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2 pr-container">
        <div className="col-md-6">
          <div className="row g-0 border bg-light rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <a
                href="https://github.com/VaibhavPatil06/Login-System-with-Database-CRUD-application"
                className="text-reset"
              >
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  <h4> Simple Login System with CRUD Operations</h4>
                </strong>
                <h6 className="mb-0">
                  HTML5, CSS3, Javascript, Node.js, Express.js, Mysql.
                </h6>

                <p className="card-text mb-auto pt-1">
                  A simple login system with CRUD operations ensures secure
                  access and efficient data management.
                </p>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="./assets/login.png" alt="" width="400px" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border bg-light rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <a
                href="https://www.linkedin.com/posts/vaibhav-patil-08368b256_webdevelopment-javascript-html-activity-7169665083801780224-EyfD?utm_source=share&utm_medium=member_desktop"
                className="text-reset"
              >
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  <h4>Simpal Calculator using javascript</h4>
                </strong>
                <h6 className="mb-0">HTML5, CSS3 & Javascript.</h6>
                <br />
                <p className="mb-auto">
                  A simple calculator using JavaScript for basic arithmetic
                  operations.
                  <br />
                  Click here
                </p>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="./assets/cal.png" alt="" width="260px" height="100%" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border bg-light rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <a
                href="https://vaibhavpatil06.github.io/designhill-clone-/"
                className="text-reset"
              >
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  <h4>Clone Of designhill website</h4>
                </strong>
                <h6 className="mb-0">HTML5, Tailwind CSS & Javascript.</h6>
                <br />
                <p className="mb-auto">
                  Enhancing the skills towards frontend development <br />
                  Click Here
                </p>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                src="./assets/clone.png"
                alt=""
                width="260px"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
