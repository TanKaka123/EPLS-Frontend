import React from "react";
import Ball from "./Ball"
import "./banner.scss";

function Banner() {
  return (
    <div className="banner-contain">
      <img src="./Banner/banner.png" alt="banner" className="banner" />
      <div className="text-banner">
        <h1 className="title-banner">EPL SCORES</h1>
        <p className="line"></p>
        <ul className="banner-desc">
          <li> <Ball/>  <p>Bảng xếp hạng và thông số </p></li>
          <li> <Ball/> <p> Thành tích cá nhân </p></li>
          <li> <Ball/> <p> Huấn luyện viên và những ngôi sao </p></li>
          <li> <Ball/> <p> Những nhà vô địch </p></li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
