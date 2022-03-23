import React, { useEffect, useState } from "react";
import "./star.scss";
import clbApi from "../../Api/clbApi";
import playerApi from "../../Api/playerApi";
import managerApi from "../../Api/managerApi";
import * as flag from "../Flag/Flag";


function Star() {
  const [listClbs, setListClbs] = useState([]);
  const [listTeamPlayer, setListTeamPlayer] = useState("");
  const [listplayer, setListPlayer] = useState([]);
  const [listManagers,setListManager]=useState([])
  useEffect(() => {
    const fetchClbs = async () => {
      try {
        const res = await clbApi.getAll();
        console.log(res.data);
        setListClbs(res.data);
        setListTeamPlayer(res.data[0]["teamName"]);
      } catch (err) {
        console.log("error : ", err);
      }
    };
   
    const fetchPlayers = async () => {
      try {
        const res = await playerApi.getAll();
        console.log(res.data);
        setListPlayer(res.data);
      } catch (err) {
        console.log("error : ", err);
      }
    };
    const fetchManagers = async () => {
      try {
        const res = await managerApi.getAll();
        console.log(res.data);
        setListManager(res.data);
      } catch (err) {
        console.log("error : ", err);
      }
    };
    fetchPlayers();
    fetchClbs();
    fetchManagers();
  }, []);
 
  console.log(listClbs[0]);
  return (
    <div id="star">
      <h1 className="title-star">Ngôi sao</h1>
      <div className="list-icon-clb">
        {listClbs.map((val, key) => {
          console.log(typeof key);
          return (
            <div className="">
              <img
                src={val["imgTeam"]}
                alt=""
                className="icon-clb"
                onClick={() => {
                  setListTeamPlayer(val["teamName"]);
                  console.log(listTeamPlayer);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="list-manager">
      {listManagers.map((val, key) => {
        console.log('manager : ',listTeamPlayer,' ', val["team"])
          if (listTeamPlayer == val["team"])
            return (
              <div className="info-manager">
                <div className="hidden">
                <div className="detail-manager">
                  <h1 className="desc-manager-name">Name </h1>
                  <h1 className="desc-manager-age">Age </h1>
                  <h1 className="desc-manager-age">Tại vị  </h1>
                </div>
                <div className="infor-detail-manager">
                  <h1 className="desc-manager-name"> {val["managerName"]}</h1>
                  <h1 className="desc-manager-age">{val["age"]}</h1>
                  <h1 className="desc-manager-time">{val["timeAtClb"]}</h1>
                </div>
                </div>
                <img src={val["avtManager"]} alt="" className="avt-manager" />
                <div className="detail-manager">
                  <h1 className="desc-manager-name">Name </h1>
                  <h1 className="desc-manager-age">Age </h1>
                  <h1 className="desc-manager-age">Tại vị  </h1>
                </div>
                <div className="infor-detail-manager">
                  <h1 className="desc-manager-name"> {val["managerName"]}</h1>
                  <h1 className="desc-manager-age">{val["age"]}</h1>
                  <h1 className="desc-manager-time">{val["timeAtClb"]}</h1>
                </div>
              </div>
            );
        })}
      </div>
      <div className="list-player">
        {listplayer.map((val, key) => {
          console.log(listTeamPlayer, " and ");
          if (listTeamPlayer == val["team"])
            return (
              <div className="info-player">
                <img src={val["avtPlayer"]} alt="" className="avt-player" />
                <h1 className="desc-player-name">{val["playerName"]}</h1>
                <h1 className="desc-player-role">{val["role"]}</h1>
                <div className="nation"> 
                 {val["nationality"] =='Wales' && <flag.Wales/>}
                 {val["nationality"] =='England' && <flag.England/>}
                 {val["nationality"] =='Uruguay' && <flag.Uruguay/>}
                 {val["nationality"] =='Spain' && <flag.Spain/>}
                 {val["nationality"] =='Portugal' && <flag.Potugal/>}
                 {val["nationality"] =='Japan' && <flag.Japan/>}
                 {val["nationality"] =='Italy' && <flag.Italy/>}
                 {val["nationality"] =='Ireland' && <flag.Iceland/>}
                 {val["nationality"] =='France' && <flag.France/>}
                 {val["nationality"] =='Egypt' && <flag.Egypt/>}
                 {val["nationality"] =='Crotia' && <flag.Crotia/>}
                 {val["nationality"] =='Brazil' && <flag.Brazil/>}
                 {val["nationality"] =='Argentina' && <flag.Argentina/>}
                 {val["nationality"] =='Denmark' && <flag.Denmark/>}
                 {val["nationality"] =='Senegal' && <flag.Senegal/>}
                 {val["nationality"] =='Belgium' && <flag.Belgium/>}
                 {val["nationality"] =='Netherlands' && <flag.Netherlands/>}
                  <h1 className="desc-player-nationality">{val["nationality"]}</h1>
                  
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Star;
