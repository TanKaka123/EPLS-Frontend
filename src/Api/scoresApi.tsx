import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';

export function ScoresApi() {
    
    const [ListScores,SetListScores] = useState([]);

    useEffect(()=>{
        axios.get("https://eplscores.herokuapp.com/api/scores")
        .then(response => response.data)
        .then((data) => {
            SetListScores(data.data);
        });
    },[])
    return ListScores ; 
}

