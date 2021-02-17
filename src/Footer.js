import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="signature">
      <p>
        {" "}
        👩🏾‍💻 Open-source code by:{" "}
        <a href="https://github.com/Sem-the-dev/weather-app-2020">
          Semhar Tesfu
        </a>
        <br />
        💻 Hosted on:{" "}
        <a href="https://dreamy-mccarthy-bfff51.netlify.app/">Netlify</a>
        <br />
        📸 Photo by:
        <a href="https://www.pexels.com/photo/white-clouds-and-blue-sky-907485/">
          Ithalu Dominguez{" "}
        </a>
      </p>
    </div>
  );
}
