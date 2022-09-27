import axios from 'axios';
import  { useEffect, useState } from 'react';

export function PlayersApi() {
    
    const [ListPlayer,SetListPlayer] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/players`)
        .then(response => response.data)
        .then((data) => {
            SetListPlayer(data.data);
        });
    },[])
    return ListPlayer ; 
}

