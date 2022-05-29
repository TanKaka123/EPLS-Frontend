import { useState } from "react";
import "./Champion.scss";
type inforChampion = {
  des: string;
  season: string;
  url: string;
};

function Champion({ des, season, url }: inforChampion) {
  return (
    <div>
      <div className="container--champion">
        <div className="content--champion">
            <div className="contents-overlay"></div>
            <img className="contents-image" src={url} />
            <div className="contents-details--year">
              
                <h2 >{season}</h2>
            </div>
            
            <div className="contents-details fadeIn-left">
              
              <h3>{des}</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Champion;
