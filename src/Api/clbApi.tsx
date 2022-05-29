import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';

export function ClbApi() {
    
    const [ListClb,SetListClb] = useState([]);

    useEffect(()=>{
        axios.get("https://eplscores.herokuapp.com/api/clb")
        .then(response => response.data)
        .then((data) => {
            SetListClb(data.data);
        });
    },[])
    return ListClb ;
}

