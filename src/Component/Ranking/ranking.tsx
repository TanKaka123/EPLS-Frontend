import React,{useEffect, useState} from 'react';
import './ranking.scss';
import scoresApi from '../../Api/scoresApi'
import clbApi from '../../Api/clbApi';

function Ranking() {
    const [listRank,setListRank]=useState([]);
    const [listClbs, setListClbs] = useState([]);

    useEffect(
        ()=>{
            const fetchScores=async ()=>{
                try{
                    const res= await scoresApi.getAll();
                    setListRank(res.data)

                }catch(err){
                    console.log("err : ",err);
                }
            }
            const fetchClbs = async () => {
                try {
                  const res = await clbApi.getAll();
                  setListClbs(res.data);
                } catch (err) {
                  console.log("error : ", err);
                }
              };
            fetchScores();
            fetchClbs();
        },[]        
    );
  
    const sortDecrPoinnt=()=>{
        for(var i=0;i<listRank.length-1;i++)
            for ( var j=i+1;j<listRank.length;j++)
            {
                console.log(listRank[i])
                if(listRank[i]['score']['Pts']<listRank[j]['score']['Pts'])
                {
                    const flag=listRank[i];
                    listRank[i]=listRank[j];
                    listRank[j]=flag;
                }
                else if (listRank[i]['score']['Pts']==listRank[j]['score']['Pts'] && listRank[i]['score']['GD']<listRank[j]['score']['GD'])
                {
                    const flag=listRank[i];
                    listRank[i]=listRank[j];
                    listRank[j]=flag;
                }
            }
    }
    sortDecrPoinnt()
    return (
        <div id="ranking">
            <h1 className="title-ranking">Xếp hạng top 7 </h1>
            <div className="scroll-rank">
            <table className="table-rank">
                                <tr className="tittle-table-rank">
                                    <th className="position-rank"></th>
                                    <th className="">Câu lạc bộ</th>
                                    <th className="">ĐĐ</th>
                                    <th className="">Thắng</th>
                                    <th className="">Hòa</th>
                                    <th className="">Thua</th>
                                    <th className="hidden-device">BT</th>
                                    <th className="hidden-device">SBT</th>
                                    <th className="">HS</th>
                                    <th>Điểm</th>
                                    <th className="">5 trận gần nhất</th>
                                </tr>

            { }    
            {
                listRank.map((value,key)=>{
                   // const lastFiveGame =value['score']['Last5'];
                   
                    const LastFiveGame=value['Last5'];
                    var imageTeam='No image';
                    for(var i=0;i<listClbs.length;i++)
                    {
                        if(listClbs[i]['teamName']==value['teamName'])
                        {
                            imageTeam=listClbs[i]['imgTeam'];
                            break;
                        }
                    }

                    console.log("result : ",imageTeam);
                   // console.log(listClbs[0]['teamName'])
                    return(
                            <tr className="row-table-rank" key={key}>
                                <td className={(key<4?'color-red':'') + (key==4?'color-blue':'')+(key>4?'font-bold':'')}>{key+1}</td>
                                <td className='team-rank'>
                                    <img src={imageTeam} alt="" className="img-team-ranking" />
                                    {value['teamName']}
                                </td>
                                <td className='all-points'>{value['score']['PI']}</td>
                                <td className='all-points'>{value['score']['W']}</td>
                                <td className='all-points'>{value['score']['D']}</td>
                                <td className='all-points'>{value['score']['L']}</td>
                                <td className='all-points hidden-device'>{value['score']['F']}</td>
                                <td className='all-points hidden-device'>{value['score']['A']}</td>
                                <td className='all-points'>{value['score']['GD']}</td>
                                <td className='rank-scores all-points'>{value['score']['Pts']}</td>
                                <td className="list-five-match">
                                   {
                                    Object.keys(LastFiveGame).map(function(key, index) {
                                        return(
                                            <div key={index} >
                                                  {
                                                  LastFiveGame[key]=='w' &&  <img src="./wdl/w.png" alt="" className="icon-result"/>
                                                  || LastFiveGame[key]=='l' &&  <img src="./wdl/l.png" alt="" className="icon-result" />
                                                  || LastFiveGame[key]=='d' &&  <img src="./wdl/d.png" alt="" className="icon-result" />
                                                }
                                            </div>
                                        );
                                      })
                                    
                                    }
                                </td>
                            </tr>
                    );
                })
            }
             </table>
             </div>
        </div>
    );
}

export default Ranking;