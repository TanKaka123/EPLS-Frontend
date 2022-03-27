import React, { useState } from "react";
import './interesting.scss';
import champion from './champion.json'

function interesting() {
  return (
    <div id="other">
      <h1 className="title-other">Những nhà vô địch</h1>
      <div className="list-champion">
      {
      
          champion.map((value,key)=>{
            const [displayDesc,setDisplayDesc]=useState(" ")
            return(
              <div className="img-overlay">
              
                <img src={value['url']} alt="" className="img-champ" onMouseOver={()=>setDisplayDesc(value['url'])} onMouseOut={()=>setDisplayDesc(' ')}/>
                {displayDesc==value['url'] && <h1 className="des-champion">{value['des']}</h1>}
                {displayDesc==' ' && <h1 className="des-champion-season">{value['season']}</h1>
                }
              </div>
            );
          })
       
      }
       </div>
    </div>
  );
}

export default interesting;
