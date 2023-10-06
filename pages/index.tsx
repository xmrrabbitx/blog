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
            <meta name="description" content="I talk mostly about Web3 and Blockchain." />
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
              <div className='flex w-12/12 text-center'>
                  <div className='lg:w-2/12 w-0'>
                  </div>
                  <div className='flex items-center justify-center lg:w-8/12 w-12/12  ml-5 mr-5 md:mlr-5 '>
                    <Recent />
                  </div>
                  <div className='lg:w-2/12 w-0 '>
                  </div>
              </div>
            </div>
          </div>
      </>
  )
}

