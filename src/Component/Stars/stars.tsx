import { useState } from "react";
import "./star.scss";
import { ClbApi } from "../../api/clbApi";
import { PlayersApi } from "../../api/playersApi";
import { ManagersApi } from "../../api/managersApi";
import Managers from "./Managers";
import * as flag from "../../assets/icon/Flag";

function Star() {
  const clb = ClbApi();
  const manager = ManagersApi();
  const player = PlayersApi();
  const [listTeamPlayer, setListTeamPlayer] = useState("Arsenal");

  return (
    <div id="star">
      <h1 className="title--star">Ngôi sao</h1>
      <div className="list_icon--clb">
        {clb.map((val, key) => {
          return (
            <div key={key}>
              <img
                src={val["imgTeam"]}
                alt="team"
                className="icon--clb"
                onClick={() => {
                  setListTeamPlayer(val["teamName"]);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="list--manager">
        {manager.map((val, key) => {
          if (listTeamPlayer == val["team"])
            return (
              <Managers
                key={key}
                managerName={val["managerName"]}
                age={val["age"]}
                timeAtClb={val["timeAtClb"]}
                avtManager={val["avtManager"]}
              />
            );
        })}
      </div>
      <div className="list--player">
        {player.map((val, key) => {
          if (listTeamPlayer == val["team"])
            return (
              <div className="info--player" key={key}>
                <img src={val["avtPlayer"]} alt="" className="avt--player" />
                <h1 className="desc--player--name">{val["playerName"]}</h1>
                <h1 className="desc--player--role">{val["role"]}</h1>
                <div className="nation">
                  {val["nationality"] == "Wales" && <flag.Wales />}
                  {val["nationality"] == "England" && <flag.England />}
                  {val["nationality"] == "Uruguay" && <flag.Uruguay />}
                  {val["nationality"] == "Spain" && <flag.Spain />}
                  {val["nationality"] == "Portugal" && <flag.Potugal />}
                  {val["nationality"] == "Japan" && <flag.Japan />}
                  {val["nationality"] == "Italy" && <flag.Italy />}
                  {val["nationality"] == "Ireland" && <flag.Iceland />}
                  {val["nationality"] == "France" && <flag.France />}
                  {val["nationality"] == "Egypt" && <flag.Egypt />}
                  {val["nationality"] == "Crotia" && <flag.Crotia />}
                  {val["nationality"] == "Brazil" && <flag.Brazil />}
                  {val["nationality"] == "Argentina" && <flag.Argentina />}
                  {val["nationality"] == "Denmark" && <flag.Denmark />}
                  {val["nationality"] == "Senegal" && <flag.Senegal />}
                  {val["nationality"] == "Belgium" && <flag.Belgium />}
                  {val["nationality"] == "Netherlands" && <flag.Netherlands />}
                  {val["nationality"] == "SouthKorea" && <flag.SouthKorea />}
                  {val["nationality"] == "Sweden" && <flag.Sweden />}
                  {val["nationality"] == "Jamaica" && <flag.Jamaica />}
                  <h1 className="desc--player--nationality">
                    {val["nationality"]}
                  </h1>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Star;
