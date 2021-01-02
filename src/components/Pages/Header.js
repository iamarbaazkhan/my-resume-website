import React from "react";

const header = (props) => (
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Hello, I'm Arbaaz</div>
      <div className="masthead-heading">Web developer</div>
      <div className="d-flex justify-content-center">
        <a
          class="btn btn-primary btn-social mx-3"
          href="https://www.linkedin.com/in/arbaazansarkhan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in "></i>
        </a>
        <a
          class="btn btn-dark btn-social mx-3"
          href="https://github.com/iamarbaazkhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github "></i>
        </a>
        <a
          class="btn btn-instagram btn-social mx-3"
          href="https://www.instagram.com/arbaaz.khan98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </header>
);

export default header;