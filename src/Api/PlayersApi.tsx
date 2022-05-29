import axios from 'axios';
import  { useEffect, useState } from 'react';

export function PlayersApi() {
    
    const [ListPlayer,SetListPlayer] = useState([]);

    useEffect(()=>{
        axios.get("https://eplscores.herokuapp.com/api/players")
        .then(response => response.data)
        .then((data) => {
            SetListPlayer(data.data);
        });
    },[])
    return ListPlayer ; 
}

