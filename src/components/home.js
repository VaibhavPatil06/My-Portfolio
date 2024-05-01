import React from "react";

export default function Home() {
  return (
    <>
      <div className="container">
        <header className="d-flex nav flex-wrap justify-content-center py-2 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">
              <h2>VAIBHAV PATIL</h2>
            </span>
          </a>
          <nav>
            <a href="#aboutme" className="link">
              About Me
            </a>
            |
            <a href="#projects" className="link">
              Projects
            </a>
            |
            <a href="#CV" className="link">
              Resume
            </a>
          </nav>
        </header>

        <div className="Hero">
          <br />
          <br />
          <br />
          <div className="sub-Container"></div>
          <div className="subhero">
            <div className="left-container">
              <div id="hello">Hello It’s Me</div>
              <div id="hell">VAIBHAV PATIL</div>
              <p className="Dev">And I’m a Full Stack Developer</p>
              <div className="medias">
                <a href="https://github.com/VaibhavPatil06/">
                  <img src="./assets/github.png" alt="" className="media" />
                </a>
                <a href="https://www.instagram.com/_vaibhav_patil_6?igsh=MWo0cGlwNWl4aXVxMg==">
                  <img src="./assets/insta.png" alt="" className="media" />
                </a>
                <a href="https://www.linkedin.com/in/vaibhav-patil-08368b256/">
                  <img src="./assets/linkdin.png" alt="" className="media" />
                </a>
              </div>
              <p className="content">
                Welcome to my digital space! I am a passionate and dedicated IT
                student on a journey to conquer the digital realm. Here, you
                will find a glimpse into my world of technology, innovation, and
                problem-solving.
              </p>
              <div className="mydata">
                {/* <a href="./" className="resume"></a>
                <a href="./" className="Projects"></a> */}
              </div>
              <img src="./assets/me.png" className="me" alt="me" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
