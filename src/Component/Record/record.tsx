import React, { useState, useEffect } from "react";
import "./record.scss";
import recordApi from "../../Api/recordApi";

function Record() {
  const [listRecord, setListRecord] = useState([]);
  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const res = await recordApi.getAll();
        console.log(res.data);
        setListRecord(res.data);
      } catch (err) {
        console.log("error : ", err);
      }
    };
    fetchRecord();
  }, []);
  const sortRecord = () => {
    for (var i = 0; i <= listRecord.length - 2; i++) {
      for (var j = i + 1; j <= listRecord.length - 1; j++) {
        if (listRecord[i]["position"] > listRecord[j]["position"]) {
          const flag = listRecord[i];
          listRecord[i] = listRecord[j];
          listRecord[j] = flag;
        }
      }
    }
  };
  sortRecord();
  //count first position 
  var position=1;
  const setPosition=()=>{
    position=1;
  }
  return (
    <div id="record">
      <h1 className="title-record">Thành tích cá nhân</h1>
      <div className="list-all-record scrollmenu">
        <div className="table-record">
          <h1 className="title-type-record">Goals</h1>
          { listRecord.map((val, key) => {
            if(val["title"] == "Goals" && position==1){
              position=position+1;
              return (
                <div className="row-record-1st">
                  <div className="">
                  <div className="">
                    <h1 className="position-record-1st">{val["position"]} </h1>
                  </div>
                  

                  <div className="infor-player-record-1st">
                    <h1 className="name-player-record-1st">{val["name"]}</h1>
                    <h1 className="name-clb-record-1st">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record-1st">{val["recordNumber"]}</h1>
                  </div>
                  </div>
                  
                  <div className="badge-image-1st">
                    <img src={val["imgCLB"]} alt="" className="radius-clb-record" />
                  </div>
                </div>
              );
            }
            else if (val["title"] == "Goals" && key != 1) {
              return (
                <div className="row-record">
                  <div className="position-record">
                    <h1 className="">{val["position"]}. </h1>
                  </div>
                  <div className="badge-image">
                    <img src={val["imgCLB"]} alt="" className="" />
                  </div>

                  <div className="infor-player-record">
                    <h1 className="name-player-record">{val["name"]}</h1>
                    <h1 className="name-clb-record">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record">{val["recordNumber"]}</h1>
                  </div>
                </div>
              );
            } 
          })}
        </div>

          {setPosition()}
        <div className="table-record">
          <h1 className="title-type-record">Assists</h1>
          {listRecord.map((val, key) => {
            
           if (val["title"] == "Assists" && position==1 ){
            position=position+1;
              return (
                <div className="row-record-1st">
                  <div className="">
                  <div className="">
                    <h1 className="position-record-1st">{val["position"]} </h1>
                  </div>
                  

                  <div className="infor-player-record-1st">
                    <h1 className="name-player-record-1st">{val["name"]}</h1>
                    <h1 className="name-clb-record-1st">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record-1st">{val["recordNumber"]}</h1>
                  </div>
                  </div>
                  
                  <div className="badge-image-1st">
                    <img src={val["imgCLB"]} alt="" className="radius-clb-record" />
                  </div>
                </div>
              );
              
            }
            else if (val["title"] == "Assists") {
              return (
                <div className="row-record">
                  <div className="position-record">
                    <h1 className="">{val["position"]}. </h1>
                  </div>
                  <div className="badge-image">
                    <img src={val["imgCLB"]} alt="" className="" />
                  </div>

                  <div className="infor-player-record">
                    <h1 className="name-player-record">{val["name"]}</h1>
                    <h1 className="name-clb-record">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record">{val["recordNumber"]}</h1>
                  </div>
                </div>
              );
            } 
          })}
        </div>

        {setPosition()}
        <div className="table-record">
          <h1 className="title-type-record">Passes</h1>
          {listRecord.map((val, key) => {
            
           if (val["title"] == "Passes" && position==1 ){
            position=position+1;
              return (
                <div className="row-record-1st">
                  <div className="">
                  <div className="">
                    <h1 className="position-record-1st">{val["position"]} </h1>
                  </div>
                  

                  <div className="infor-player-record-1st">
                    <h1 className="name-player-record-1st">{val["name"]}</h1>
                    <h1 className="name-clb-record-1st">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record-1st">{val["recordNumber"]}</h1>
                  </div>
                  </div>
                  
                  <div className="badge-image-1st">
                    <img src={val["imgCLB"]} alt="" className="radius-clb-record" />
                  </div>
                </div>
              );
              
            }
            else if (val["title"] == "Passes") {
              return (
                <div className="row-record">
                  <div className="position-record">
                    <h1 className="">{val["position"]}. </h1>
                  </div>
                  <div className="badge-image">
                    <img src={val["imgCLB"]} alt="" className="" />
                  </div>

                  <div className="infor-player-record">
                    <h1 className="name-player-record">{val["name"]}</h1>
                    <h1 className="name-clb-record">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record">{val["recordNumber"]}</h1>
                  </div>
                </div>
              );
            } 
          })}
        </div>
        

        
        {setPosition()}
        <div className="table-record">
          <h1 className="title-type-record">Saves</h1>
          {listRecord.map((val, key) => {
            
           if (val["title"] == "Saves" && position==1 ){
            position=position+1;
              return (
                <div className="row-record-1st">
                  <div className="">
                    <div className="">
                      <h1 className="position-record-1st">{val["position"]} </h1>
                    </div>
                  

                    <div className="infor-player-record-1st">
                      <h1 className="name-player-record-1st">{val["name"]}</h1>
                      <h1 className="name-clb-record-1st">{val["clbName"]}</h1>
                    </div>
                    <div className="">
                      <h1 className="number-record-1st">{val["recordNumber"]}</h1>
                    </div>
                  </div>
                  
                  <div className="badge-image-1st">
                    <img src={val["imgCLB"]} alt="" className="radius-clb-record" />
                  </div>
                </div>
              );
              
            }
            else if (val["title"] == "Saves") {
              return (
                <div className="row-record">
                  <div className="position-record">
                    <h1 className="">{val["position"]}. </h1>
                  </div>
                  <div className="badge-image">
                    <img src={val["imgCLB"]} alt="" className="" />
                  </div>

                  <div className="infor-player-record">
                    <h1 className="name-player-record">{val["name"]}</h1>
                    <h1 className="name-clb-record">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record">{val["recordNumber"]}</h1>
                  </div>
                </div>
              );
            } 
          })}
        </div>


        {setPosition()}
        <div className="table-record">
          <h1 className="title-type-record">Red Cards</h1>
          {listRecord.map((val, key) => {
            
           if (val["title"] == "Red Cards" && position==1 ){
            position=position+1;
              return (
                <div className="row-record-1st">
                  <div className="">
                    <div className="">
                      <h1 className="position-record-1st">{val["position"]} </h1>
                    </div>
                  

                    <div className="infor-player-record-1st">
                      <h1 className="name-player-record-1st">{val["name"]}</h1>
                      <h1 className="name-clb-record-1st">{val["clbName"]}</h1>
                    </div>
                    <div className="">
                      <h1 className="number-record-1st">{val["recordNumber"]}</h1>
                    </div>
                  </div>
                  
                  <div className="badge-image-1st">
                    <img src={val["imgCLB"]} alt="" className="radius-clb-record" />
                  </div>
                </div>
              );
              
            }
            else if (val["title"] == "Red Cards") {
              return (
                <div className="row-record">
                  <div className="position-record">
                    <h1 className="">{val["position"]}. </h1>
                  </div>
                  <div className="badge-image">
                    <img src={val["imgCLB"]} alt="" className="" />
                  </div>

                  <div className="infor-player-record">
                    <h1 className="name-player-record">{val["name"]}</h1>
                    <h1 className="name-clb-record">{val["clbName"]}</h1>
                  </div>
                  <div className="">
                    <h1 className="number-record">{val["recordNumber"]}</h1>
                  </div>
                </div>
              );
            } 
          })}
        </div>
      </div>
    </div>
  );
}

export default Record;
