import React from "react";

export default function footer() {
  return (
    <div>
      <div className=" align-items-center text-light">
        <center>
          <h2>Click here to download CV :</h2>
          <a
            className="btn btn-danger content-download button-main button-scheme mx-5 text-light"
            href="assets/Vaibhav Patil.pdf"
            download=""
            role="button"
          >
            Download CV
          </a>
        </center>
      </div>
      <footer className="py-3 my-4 text-light">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-light">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#aboutme" className="nav-link px-2 text-body-light">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link px-2 text-body-light">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#CV    " className="nav-link px-2 text-body-light">
              Resume
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
