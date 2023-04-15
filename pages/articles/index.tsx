import React from 'react';
import AllArticles from '../components/AllArticles';
import Head from 'next/head'

function IndexPage() {


  return (
    <>
     <Head>
            <title>Mr Rabbit Blog - Articles</title>
            <meta name="description" content="Mr Rabbit Personal Blog _ I talk about php and web3" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logos/logo.ico" />
          </Head>
    <div className='container max-w-full'>
        <div className='grid grid-cols-1'>
          <div className='w-12/12'>
            <h2 className='text-center mt-10 text-xl font-semibold'>
              All Articles
            </h2>
          </div>
          <div className='w-12/12 text-center grid grid-cols-3'>
              <div className=' lg:col-span-1 md:col-span-0 sm:col-span-0 col-span-0'>
              </div>
              <div className='lg:col-span-1 lg:ml-0 lg:mr-0 ml-5 mr-5 md:col-span-3 md:mlr-5 sm:col-span-3 col-span-3'>
                <AllArticles />
              </div>
              <div className='lg:col-span-1 md:col-span-0 sm:col-span-0 col-span-0'>
              </div>
          </div>
       </div>
       
      
      </div>
    </>
  );
}

export default IndexPage;
