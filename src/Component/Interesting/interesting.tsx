import React, { useEffect, useState } from "react";
import './interesting.scss';
import champion from './champion.json'
import Champion from "./Champion";


function Interesting() {

  return (
    <div id="other">
      <h1 className="title-other">Những nhà vô địch</h1>
      <h3 className="note">click ảnh để xem chi tiết về nhà vô địch</h3>
      <div className="list-champion">
      {
          champion.map((value,key)=>{
            return(
              <div className="img-overlay" key={key}>       
                <Champion des={value['des']} season={value['season']} url={value['url']}  />
              </div>
            );
          })
      }
       </div>
    </div>
  );
}

export default Interesting;
