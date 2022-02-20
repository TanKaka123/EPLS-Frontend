import React from "react";
import "./header.scss";

function header() {
  return (
    <div>
      <div className="container">
        <header id="header">
          <img src="./logo.png" alt="" className="logo" />
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#">Xếp hạng</a>
              </li>
              <li>
                <a href="#">Chỉ số</a>
              </li>
              <li>
                <a href="#">Ngôi sao</a>
              </li>
              <li>
                <a href="#">Khác</a>
              </li>
            </ul>
          </nav>
          <div className="modeColor">OBJECT</div>
        </header>
      </div>
    </div>
  );
}

export default header;
