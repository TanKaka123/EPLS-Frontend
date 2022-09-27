import './ranking.scss';
import Loading from '../Loading/Loading';
import {ScoresApi} from '../../Api/ScoresApi'
import {ClbApi} from '../../Api/ClbApi';


function Ranking() {    
    const SCORES = ScoresApi()
    const CLB= ClbApi();
  
    const sortDecrPoinnt=()=>{
        for(var i=0;i<SCORES.length-1;i++)
            for ( var j=i+1;j<SCORES.length;j++)
            {   
                if(SCORES[i]['score']['Pts']<SCORES[j]['score']['Pts'])
                {
                    const flag=SCORES[i];
                    SCORES[i]=SCORES[j];
                    SCORES[j]=flag;
                }
                else if (SCORES[i]['score']['Pts']==SCORES[j]['score']['Pts'] && SCORES[i]['score']['GD']<SCORES[j]['score']['GD'])
                {
                    const flag=SCORES[i];
                    SCORES[i]=SCORES[j];
                    SCORES[j]=flag;
                }
            }
    }

    sortDecrPoinnt();

    return (
        
        <div id="ranking">
            <h1 className="title-ranking">Xếp hạng top 7 </h1>
           
           
          { !SCORES ? <div className="center">
                            <Loading/>
                    </div> : 
            <div className="rank_scroll">
                <table className="rank_table">
                    <tr className="table_tittle--rank">
                        <th className="position-rank"></th>
                        <th className='rank_title-clb' >Câu lạc bộ</th>
                        <th >ĐĐ</th>
                        <th >Thắng</th>
                        <th >Hòa</th>
                        <th >Thua</th>
                        <th className="hidden-device">BT</th>
                        <th className="hidden-device">SBT</th>
                        <th >HS</th>
                        <th>Điểm</th>
                        <th >5 trận gần nhất</th>
                    </tr>
    
                {
                     SCORES && SCORES.map((value,key)=>{
                        const LastFiveGame=value['Last5'];
                        var imageTeam='No image';
                        for(var i=0;i<CLB.length;i++)
                        {
                            if(CLB[i]['teamName']==value['teamName'])
                            {
                                imageTeam=CLB[i]['imgTeam'];
                                break;
                            }
                        }
                        return(
                                <tr className="row-table-rank" key={key}>
                                    <td className={(key<4?'color-red':'') + (key==4?'color-blue':'')+(key>4?'font-bold':'')}>{key+1}</td>
                                    <td className='team-rank'>
                                        <img src={imageTeam} alt="" className="rank_img--team" />
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
                                        Object && Object.keys(LastFiveGame).map(function(key, index) {
                                            return(
                                                <div key={index} >
                                                    {
                                                    LastFiveGame[key]=='w' &&  <img src="./wdl/w.png" alt="" />
                                                    || LastFiveGame[key]=='l' &&  <img src="./wdl/l.png" alt=""  />
                                                    || LastFiveGame[key]=='d' &&  <img src="./wdl/d.png" alt=""  />
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
             </div>}
        </div>
    );
}

export default Ranking;