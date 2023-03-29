import { useState, useEffect } from 'react';
import API from '../api';

export default function Recent(){

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const result = await API.get('/recent');
          setData(result.data);
        };
        fetchData();
      }, []);

       return (
        
        <>
           {data.title}
        </>
       )

}

