import { useState, useEffect } from 'react';
import styles from '@/styles/Recent.module.css'
import Link from 'next/link';
/*
interface Item {
  title: string;
  description:string
  date: string;
}
*/

export default function Recent() {

  interface Data {
    [key: string]: string;
  }

  const [recentItem, setRecentItem] = useState<Data>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/recent');
        const data:any = await response.json();

        setRecentItem(data);

      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const dataArray:any = Object.entries(recentItem); 

  const groups = Array.from(
    { length: Math.ceil(dataArray.length / 3) },
    (_, i) => dataArray.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className="">
      
    {groups.map((value,key) => (
      <Link className='' href={`/articles/${value[0][1]}`}>
        <div className=' bg-white rounded-md p-4 mt-5'>
          {value.map((item:any,index:any) => (
            
              <div>
                {item[0].includes("title-") ? (

                  <div className='text-lg font-bold'>
                    <Link className='hover:text-blue-500' href={`/articles/${item[1]}`}>
                      
                      {item[1].replace(/-/g, " ")}
                      
                      </Link>
                  </div>
                  
                ):(

                  <div className='text-justify pt-1'>
                      {item[1]}
                  </div>

                )}
              </div>
            
          ))}
        </div>
      </Link>
    ))}

    </div>
  );
}
