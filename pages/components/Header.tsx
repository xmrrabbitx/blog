import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/logos/logo.png"
import styles from '@/styles/Header.module.css'

export default function Header() {
    return (
        <header>
            <div className='container max-w-full' >
            <div className='grid grid-cols-2 gap-1 mt-10'> 

                <div className='pl-16 flex flow-row'>
                    <div className='justify-left basis-50'>
                    <Image className="inline rounded-md " src={Logo} alt="no logo" width={50}  height={50} />
                    </div>
                    <div className={`${styles.title} ml-3 mt-3.5 items-center basis-2/4`}>
                    Mr Rabbit Blog
                    </div>
                </div>

                <div className='w-12/12 pr-28 pt-5 text-base flex justify-end'>
                    <span>
                        <Link href="/">
                            Home
                        </Link>
                        <Link className='ml-9' href="/articles">
                            Articles
                        </Link>
                        <Link className='ml-9' href="">
                            
                        </Link>
                        <Link className='ml-9' href="">
                        
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    </header>
    )
}