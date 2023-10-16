import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Me.module.css'
import profile from "@/public/pics/aboutme/profile.jpeg"
import Paragraph from '../components/Paragraph'



export default function index(){

    return(

        <div>
            
            <Head>
                <title>About Mr Rabbit</title>
                <meta name="description" content="What do we know about mrrabbit?" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">What do we know about mrrabbit?</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="grid grid-cols-2 gap-4 lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">

                        <Image className='rounded-md xl:col-span-1 col-span-6 xl:w-52 lg:w-46 md:w-32 sm:w-full xl:h-52 lg:h-46 md:h-32 sm:h-full h-28 w-28' src={profile} alt='no profile'  />
                        <Paragraph text={<>Im Mr. Rabbit, a programmer interested in blockchain. <br /> I write about Web3 and PHP, and sometimes I do the hardest thing of all: thinking. Animal lovers mostly loved Kitty ^__^ . <br /> My expertise is in php, laravel, JS, NextJS, and Tailwind.</>}/>
                        
                        
                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}