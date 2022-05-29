import axios from 'axios';
import  { useEffect,  useState } from 'react';

export function RecordApi() {
    
    const [ListRecord,SetListRecord] = useState([]);

    useEffect(()=>{
        axios.get("https://eplscores.herokuapp.com/api/records")
        .then(response => response.data)
        .then((data) => {
            SetListRecord(data.data);
        });
    },[])
    return ListRecord ; 
}

