import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="signature">
      <footer>
        {" "}
        👩🏾‍💻 Open-source code by:{" "}
        <a href="https://github.com/Sem-the-dev/weather-react">
          Semhar Tesfu
        </a>
        <br />
        💻 Hosted on:{" "}
        <a href="https://serene-noyce-0f2ef9.netlify.app/">Netlify</a>
        <br />
        📸 Photo by:
        <a href="https://www.pexels.com/photo/white-clouds-and-blue-sky-907485/">
          Ithalu Dominguez{" "}
        </a>
      </footer>
    </div>
  );
}
