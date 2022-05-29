import './ranking.scss';
import {ScoresApi} from '../../Api/ScoresApi'
import {ClbApi} from '../../Api/ClbApi';

function Ranking() {    
    const scores = ScoresApi()
    const clb= ClbApi();
  
    const sortDecrPoinnt=()=>{
        for(var i=0;i<scores.length-1;i++)
            for ( var j=i+1;j<scores.length;j++)
            {
                if(scores[i]['score']['Pts']<scores[j]['score']['Pts'])
                {
                    const flag=scores[i];
                    scores[i]=scores[j];
                    scores[j]=flag;
                }
                else if (scores[i]['score']['Pts']==scores[j]['score']['Pts'] && scores[i]['score']['GD']<scores[j]['score']['GD'])
                {
                    const flag=scores[i];
                    scores[i]=scores[j];
                    scores[j]=flag;
                }
            }
    }

    sortDecrPoinnt();

    return (
        <div id="ranking">
            <h1 className="title-ranking">Xếp hạng top 7 </h1>
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
                    scores.map((value,key)=>{
                        const LastFiveGame=value['Last5'];
                        var imageTeam='No image';
                        for(var i=0;i<clb.length;i++)
                        {
                            if(clb[i]['teamName']==value['teamName'])
                            {
                                imageTeam=clb[i]['imgTeam'];
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
                                        Object.keys(LastFiveGame).map(function(key, index) {
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
             </div>
        </div>
    );
}

export default Ranking;