import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';

export function ClbApi() {
    
    const [ListClb,SetListClb] = useState([]);
   
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/clb`)
        .then(response => response.data)
        .then((data) => {
            SetListClb(data.data);
        });
    },[])
    return ListClb ;
}

