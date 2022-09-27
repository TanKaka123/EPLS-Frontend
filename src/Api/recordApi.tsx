import axios from 'axios';
import  { useEffect,  useState } from 'react';

export function RecordApi() {
    
    const [ListRecord,SetListRecord] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/records`)
        .then(response => response.data)
        .then((data) => {
            SetListRecord(data.data);
        });
    },[])
    return ListRecord ; 
}

