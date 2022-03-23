import React from "react";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner-contain">
      <img src="./Banner/banner1.png" alt="" className="banner" />
      <div className="text-banner">
        <h1 className="title-banner">EPL SCORES</h1>
        <p className="line"></p>
        <h1 className="desc-banner">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          obcaecati beatae earum nemo vero hic laboriosam accusamus là đất
        </h1>
      </div>
    </div>
  );
}

export default Banner;
