import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/public/logos/logo.jpeg"
import styles from '@/styles/Header.module.css'


export default function Header() {
    return (
        <header>
            
            <div className='container max-w-full' >
            <div className='grid grid-cols-2 gap-1 mt-10'> 

                <div className='lg:pl-16 md:pl-16 sm:pl-2 pl-2  lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 flex flow-row'>
                    <div className='justify-left basis-50'>
                    <Image className="inline rounded-md " src={Logo} alt="no logo is here" width={51}  height={51} />
                    </div>
                    <Link href={"/"} className={`${styles.title} ml-3 mt-3.5 items-center basis-2/4`}>
                    Mr Rabbit Blog
                    </Link>
                </div>

                <div className='w-12/12 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pr-28 pt-5 lg:text-base md:text-base text-sm flex lg:justify-end justify-center '>
                    <span>
                        <Link href="/">
                            Home
                        </Link>
                        <Link className='ml-9' href="/articles">
                            Articles
                        </Link>
                        <Link className='ml-9' href="/socialmedia">
                            Social media
                        </Link>
                        <Link className='ml-9' href="/aboutme">
                            about me
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    </header>
    )
}