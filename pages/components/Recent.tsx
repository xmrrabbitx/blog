import { useState, useEffect } from 'react';

export default function Recent(){

       //const hand = def();

       const [data, setData] = useState([]);

       useEffect(() => {
              const fetchData = async () => {
                const res = await fetch('http://localhost:3000/api/recent');
                const data = await res.json();
                setData(data);
              };
              fetchData();
            }, []);

       return (
        
        <>
        {data.title}
        </>
       )

}

/*
export async function def(){

       const res = await fetch('http://localhost:3000/api/recent');
       const data = await res.json();

       return data;
}
*/