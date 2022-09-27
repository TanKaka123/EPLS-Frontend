import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';

export function ManagersApi() {
    
    const [ListManagers,SetListManagers] = useState([]);
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/managers`)
        .then(response => response.data)
        .then((data) => {
            SetListManagers(data.data);
        });
    },[])
    return ListManagers ; 
}

 