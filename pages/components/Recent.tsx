import { useState, useEffect } from 'react';

export default function Recent(){

       const [data, setData] =  useState<Item[]>([]);

      const d = def();

     
  
       interface Item {
              title: string;
              date: string;
       
       };

       useEffect(() => {
              const fetchData = async () => {
                const response = await fetch('http://localhost:3000/api/recent');
                const jsonData = await response.json();
                setData(jsonData);
              };
          
              fetchData();
            }, []);
          
         

       return (
        
        <>
             
             {Object.keys(data).map(key => (
        <div key={key}>
          <p>{key}: {data[key]}</p>
        </div>
      ))}
              
        </>
       )

}

export async function def(){

     return "hahahah";
}