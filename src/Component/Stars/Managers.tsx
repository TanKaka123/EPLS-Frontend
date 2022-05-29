import "./Managers.scss";

type InforManagers ={
    key:number;
    managerName:string;
    age : number;
    timeAtClb : string;
    avtManager:string;
}
function Managers({key, managerName, age ,  timeAtClb, avtManager}:InforManagers) {
    return (
        <div>
             <div className="info_manager" key={key}>
                <div className="hidden">
                <div className="detail_manager">
                  <h1 className="desc_manager--name">Name </h1>
                  <h1 className="desc_manager--age">Age </h1>
                  <h1 className="desc_manager--age">Tại vị  </h1>
                </div>
                <div className="infor_detail--manager">
                  <h1 className="desc_manager--name"> {managerName}</h1>
                  <h1 className="desc_manager--age">{age}</h1>
                  <h1 className="desc_manager--time">{timeAtClb}</h1>
                </div>
                </div>
                <img src={avtManager} alt="" className="avt_manager" />
                <div className="detail_manager">
                  <h1 className="desc_manager--name">Name </h1>
                  <h1 className="desc_manager--age">Age </h1>
                  <h1 className="desc_manager--age">Tại vị  </h1>
                </div>
                <div className="infor_detail--manager">
                  <h1 className="desc_manager--name"> {managerName}</h1>
                  <h1 className="desc_manager--age">{age}</h1>
                  <h1 className="desc_manager--time">{timeAtClb}</h1>
                </div>
              </div>
        </div>
    );
}

export default Managers;