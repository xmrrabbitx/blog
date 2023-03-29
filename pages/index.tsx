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
            <h2 className='justify-left mt-10 lg:ml-72 text-xl font-semibold'>
              Recent Articles
            </h2>
          </div>
          <div className='w-12/12 text-center'>
              
          <Recent />
              
          </div>
       </div>
       
      
      </div>
    </>
  )
}

