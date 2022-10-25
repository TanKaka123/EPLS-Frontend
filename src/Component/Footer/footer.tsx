import React from "react";
import { Github, Linkedin, Facebook, Instagram, Gmail } from "../../assets/icon/icon";
import "./footer.scss";

function footer() {
  return (
    <div className="footer-contain">
      <img src="./logo.png" alt="" className="logo-footer" />
      <h1 className="title-contact">CONTACT</h1>
      <p className="line-footer"></p>
      <div className="group-icon-contact">
        <a
          className="icon-contact"
          href="https://github.com/TanKaka123"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          className="icon-contact"
          href="https://www.linkedin.com/in/nguyenhongtan/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          className="icon-contact"
          href="https://www.facebook.com/hongtan1422002/ "
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          className="icon-contact"
          href="https://www.instagram.com/hong_tan__/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="icon-contact"
          href="mailto:hongtan1422002@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Gmail />
        </a>
      </div>
      <div className="copyright">
        <p className="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM10.1205 14.9554C7.66518 14.9554 6.25 13.3214 6.25 10.6049V9.4375C6.25 6.70089 7.66518 5.04464 10.1183 5.04464C12.2232 5.04464 13.75 6.39955 13.75 8.33482C13.75 8.39286 13.7031 8.43973 13.6451 8.43973H12.3795C12.2857 8.43973 12.2098 8.3683 12.2009 8.27455C12.1116 7.16964 11.308 6.41295 10.125 6.41295C8.66741 6.41295 7.84598 7.49554 7.84598 9.4375V10.6116C7.84598 12.5246 8.66964 13.5938 10.125 13.5938C11.3036 13.5938 12.1049 12.8862 12.2009 11.8571C12.2098 11.7656 12.2857 11.6942 12.3795 11.6942H13.6473C13.7054 11.6942 13.7522 11.7411 13.7522 11.7991C13.7522 13.6429 12.2188 14.9554 10.1205 14.9554Z"
              fill="white"
            />
          </svg>
        </p>

        <p className="">The copyright 2022</p>
      </div>
    </div>
  );
}

export default footer;
