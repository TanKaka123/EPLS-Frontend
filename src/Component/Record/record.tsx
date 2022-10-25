import "./record.scss";
import { RecordApi } from "../../api/recordApi";
import Loading from "../loading/Loading";
import TableRecord from "./TableRecord";

function Record() {
  const record = RecordApi();

  const sortRecord = () => {
    for (var i = 0; i <= record.length - 2; i++) {
      for (var j = i + 1; j <= record.length - 1; j++) {
        if (record[i]["position"] > record[j]["position"]) {
          const flag = record[i];
          record[i] = record[j];
          record[j] = flag;
        }
      }
    }
  };
  sortRecord();

  return (
    <div id="record">
      <h1 className="title-record">Thành tích cá nhân</h1>
      {!record ? (
        <div className="center">
          <Loading />
        </div>
      ) : (
        <div className="list-all-record ">
          <TableRecord data={record} keyRecord={"Goals"} />
          <TableRecord data={record} keyRecord={"Assists"} />
          <TableRecord data={record} keyRecord={"Passes"} />
          <TableRecord data={record} keyRecord={"Saves"} />
          <TableRecord data={record} keyRecord={"Red Cards"} />
        </div>
      )}
    </div>
  );
}

export default Record;
