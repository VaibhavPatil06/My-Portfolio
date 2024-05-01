import "./App.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Project from "./components/project.js";
import Footer from "./components/footer.js";

function App() {
  let sections = document.querySelectorAll("section");
  // let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      // let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        // navLinks.forEach((link) => {
        //   link.classList.remove("active");
        //   document
        //     .querySelector("header nav a[href*=" + id + "]")
        //     .classList.add("active");
        // });
      }
    });
  };

  return (
    <div>
      <section id="home">
        {" "}
        <Home />
      </section>
      <section id="aboutme">
        {" "}
        <About />
      </section>
      <section id="projects">
        {" "}
        <Project />
      </section>
      <section id="CV">
        {" "}
        <Footer />
      </section>
    </div>
  );
}

export default App;
