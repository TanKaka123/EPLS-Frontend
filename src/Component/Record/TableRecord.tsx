import "./TableRecord.scss";

function TableRecord(props :{data:any,keyRecord:string}) {
    var position=1;
    console.log(props.keyRecord);
    return (
        <div>
          <div className="table--record">
            <h1 className="">{props.keyRecord}</h1>
            { props.data.map((val:any, key:number) => {
              if(val["title"] == props.keyRecord && position==1){
                position=2;
                return (
                  <div className="row_record--1st" key={key}>

                    <div className="">
                      <h1 className="position_record-1st">{val["position"]} </h1>
                      <div className="infor_record-1st">
                        <h1 >{val["name"]}</h1>
                        <h1>{val["clbName"]}</h1>
                      </div>
                      <h1 className="number_record-1st">{val["recordNumber"]}</h1>
                    </div>

                    <div className="badge_image-1st">
                      <img src={val["imgCLB"]} alt="team"  />
                    </div>

                  </div>
                );
              }
              else if (val["title"] == props.keyRecord) {
                return (
                  <div className="row_record"  key={key}>

                    <div className="position_record">
                      <h1 className="">{val["position"]}. </h1>
                    </div>

                    <div className="badge_image">
                      <img src={val["imgCLB"]} alt="team" />
                    </div>

                    <div className="infor__record-player">
                      <h1 >{val["name"]}</h1>
                      <h1 >{val["clbName"]}</h1>
                    </div>

                    <div className="">
                      <h1 className="number_record">{val["recordNumber"]}</h1>
                    </div>

                  </div>
                );
              } 
            })}
          </div>
        </div>
    );
}

export default TableRecord;