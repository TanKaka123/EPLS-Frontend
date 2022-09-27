import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';

export function ScoresApi() {
    
    const [ListScores,SetListScores] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/scores`)
        .then(response => response.data)
        .then((data) => {
            SetListScores(data.data);
        });
    },[])
    return ListScores ; 
}

