import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';

export function ManagersApi() {
    
    const [ListManagers,SetListManagers] = useState([]);

    useEffect(()=>{
        axios.get("http://eplscores.herokuapp.com/api/managers")
        .then(response => response.data)
        .then((data) => {
            SetListManagers(data.data);
        });
    },[])
    return ListManagers ; 
}

 