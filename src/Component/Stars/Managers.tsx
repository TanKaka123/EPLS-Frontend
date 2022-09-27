import "./Managers.scss";

interface props{
    key:number;
    managerName:string;
    age : number;
    timeAtClb : string;
    avtManager:string;
}
function Managers(InforManagers : props) {
    return (
        <div>
             <div className="info_manager" key={InforManagers.key}>
                <div className="hidden">
                <div className="detail_manager">
                  <h1 className="desc_manager--name">Name </h1>
                  <h1 className="desc_manager--age">Age </h1>
                  <h1 className="desc_manager--age">Tại vị  </h1>
                </div>
                <div className="infor_detail--manager">
                  <h1 className="desc_manager--name"> {InforManagers.managerName}</h1>
                  <h1 className="desc_manager--age">{InforManagers.age}</h1>
                  <h1 className="desc_manager--time">{InforManagers.timeAtClb}</h1>
                </div>
                </div>
                <img src={InforManagers.avtManager} alt="" className="avt_manager" />
                <div className="detail_manager">
                  <h1 className="desc_manager--name">Name </h1>
                  <h1 className="desc_manager--age">Age </h1>
                  <h1 className="desc_manager--age">Tại vị  </h1>
                </div>
                <div className="infor_detail--manager">
                  <h1 className="desc_manager--name"> {InforManagers.managerName}</h1>
                  <h1 className="desc_manager--age">{InforManagers.age}</h1>
                  <h1 className="desc_manager--time">{InforManagers.timeAtClb}</h1>
                </div>
              </div>
        </div>
    );
}

export default Managers;