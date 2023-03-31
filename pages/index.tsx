import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import iconIco from "@/public/logos/logo.ico"
import Recent from './components/Recent'


export default function Home() {

  
  return (
 
      <>
          <Head>
            <title>Mr Rabbit Blog</title>
            <meta name="description" content="Mr Rabbit Personal Blog _ I will talk about Web3 and Blockchain" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logos/logo.ico" />
          </Head>
        
       <div className='container max-w-full'>
        <div className='grid grid-cols-1'>
          <div className='w-12/12'>
            <h2 className='text-center mt-10 text-xl font-semibold'>
              Recent Articles
            </h2>
          </div>
          <div className='w-12/12 text-center grid grid-cols-3'>
              <div className=' lg:col-span-1 md:col-span-0 sm:col-span-0 col-span-0'>
              </div>
              <div className='lg:ml-0 lg:mr-5 ml-5 mr-5 lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3'>
                <Recent />
              </div>
              <div className='lg:col-span-1 md:col-span-0 sm:col-span-0 col-span-0'>
              </div>
          </div>
       </div>
       
      
      </div>
    </>
  )
}

