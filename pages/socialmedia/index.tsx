import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Me.module.css'
import profile from "@/public/pics/aboutme/profile.png"
import Paragraph from '../components/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export default function index(){

    return(

        <div>
            
            <Head>
                <title>Mr Rabbit Social Media</title>
                <meta name="description" content="How can we contact Mr. Rabbit?" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">How can we contact Mr. Rabbit?</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="grid grid-cols-4 gap-4 lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">

                        <div className='grid-cols-1 text-center'>

                            <FontAwesomeIcon style={{width:"50px", height:"50px"}} icon={faGithub} /> <br />
                            <Link className='hover:text-blue-500 font-bold' href={"https://github.com/xmrrabbitx"}>Github</Link>

                        </div>
                        <div className='grid-cols-1 text-center'>

                            <FontAwesomeIcon style={{width:"50px", height:"50px", color:"#0e83db"}} icon={faTwitter} /> <br />
                            <Link className='hover:text-blue-500 font-bold' href={"https://twitter.com/xmrrabbittx"}>Twitter</Link>

                        </div>
                        <div className='grid-cols-1 text-center'>
                            
                            <FontAwesomeIcon style={{width:"50px", height:"50px", color:"#e83a23"}} icon={faGoogle} /> <br />
                            <Link className='hover:text-blue-500 font-bold' href={"mailto:xmrrabbitx@gmail.com"}>Gmail</Link>


                        </div>

                        <div className='grid-cols-1 text-center'>
                            
                            <FontAwesomeIcon style={{width:"50px", height:"50px", color:"#f0513c"}} icon={faInstagram} /> <br />
                            <Link className='hover:text-blue-500 font-bold' href={"https://www.instagram.com/xmrrabbitx"}>Instagram</Link>


                        </div>
                        
                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}