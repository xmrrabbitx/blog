import { useState, useEffect } from 'react';
import styles from '@/styles/Recent.module.css'
import Link from 'next/link';
import {RecentList} from "../../lib/ListRecentPosts"

export default function Recent() {

  interface Data {
    [key: string]: string;
  }


  const [recentItem, setRecentItem] = useState<Data>({});
  
  useEffect(() => {
    const listData = RecentList(); // Call the component function and get the data
    setRecentItem(listData); // Store the data in the state
  }, []);

/*
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
*/

  const dataArray:any = Object.entries(recentItem); 

  const groups = Array.from(
    { length: Math.ceil(dataArray.length / 3) },
    (_, i) => dataArray.slice(i * 3, i * 3 + 3)
  );


  return (
    <div className="lg:w-7/12 w-12/12 "  key="recent">
      
      {groups.map((value,key) => (
        <Link key={key} className='' href={`/articles/${value[0]?.[1].replace(/[^a-zA-Z0-9-]/g, '')}`}>

        <div className=' bg-white rounded-md p-8 mt-5 drop-shadow-sm'>
          {value.map((item:any,index:any) => (
            
              <div key={index}>
                {item[0].includes("title-") ? (
             
                  <div className='lg:text-lg md:text-lg sm:text-base text-base font-bold'>
                    <Link  key={index} className='hover:text-blue-500' href={`/articles/${item[1].replace(/[^a-zA-Z0-9-]/g, '')}`}>
                   
                    {item[1].replace(/(?:^|\-)(\w)/g, (match: string) => match.toUpperCase()).replace(/\-/g, ' ')}
                      
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
