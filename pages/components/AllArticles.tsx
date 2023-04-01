import { useState, useEffect } from 'react';
import styles from '@/styles/Recent.module.css'
import Link from 'next/link';
import { AllList } from '@/lib/ListRecentPosts';


export default function AllArticles() {

  interface Data {
    [key: string]: string;
  }


  const [recentItem, setRecentItem] = useState<Data>({});
  
  useEffect(() => {
    const listData = AllList(); // Call the component function and get the data
    setRecentItem(listData); // Store the data in the state
  }, []);

  const dataArray:any = Object.entries(recentItem); 

  const groups = Array.from(
    { length: Math.ceil(dataArray.length / 3) },
    (_, i) => dataArray.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className=""  key="recent">
      
      {groups.map((value,key) => (
        <Link key={key} className='' href={`/articles/${value[0]?.[1]}`}>
          
        <div className=' bg-white rounded-md p-4 mt-5 drop-shadow-sm'>
          {value.map((item:any,index:any) => (
            
              <div key={index}>
                {item[0].includes("title-") ? (

                  <div className='lg:text-lg md:text-lg sm:text-base text-base font-bold'>
                    <Link  key={index} className='hover:text-blue-500' href={`/articles/${item[1]}`}>
                      
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
