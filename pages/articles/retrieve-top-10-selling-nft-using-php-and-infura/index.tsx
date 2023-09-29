
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
import apiKey from "@/public/pics/retrieve-top-10-selling-nft-using-php-and-infura/apikey.jpeg"
import infuraSignup from "@/public/pics/retrieve-top-10-selling-nft-using-php-and-infura/infura_signup.jpeg"
import HeaderPic from "@/public/pics/retrieve-top-10-selling-nft-using-php-and-infura/HeaderPic.jpg"
import createApi from "@/public/pics/retrieve-top-10-selling-nft-using-php-and-infura/createApi.jpeg"
import ethEndpoint from "@/public/pics/retrieve-top-10-selling-nft-using-php-and-infura/ethEndpoint.jpeg"

import iconIco from "@/public/logos/logo.ico"
// eslint-disable-next-line react/no-unescaped-entities

export default function index(){

    return(

        <div>
            
            <Head>
                <title>Retrieve Top 10 selling Nfts Using PHP and Infura</title>
                <meta name="description" content="we can now retrieve as many top-selling NFT tokens from a specific contract address as we want in just one line of code." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">Retrieve Top 10 selling Nfts Using PHP and Infura</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        

                    <Image className="rounded max-w-full w-full" src={HeaderPic} alt={"no picture"} />

                    
                    <Paragraph text={<>If you have read my previous articles, you will notice that the previous version of the <Link className="text-blue-500" href="https://github.com/xmrrabbitx/NftHistoryLogs"> NFT history logs </Link> library didnt support the top-selling built-in function to retrieve these kinds of logs. but in the latest update, we can now retrieve as many top-selling NFT tokens from a specific contract address as we want in just one line of code.</>} />
                    <Paragraph text={<>You will retrieve the top 10 selling NFTs in 3 stages: <br />

1. sign up on the infura website <br />

2. setup the provider for the nft history logs library <br />

3. retrieve the top 10 selling NFT in one line of code.</>} />

                    <Paragraph text={<>So, why Infura? <Link className="text-blue-500" href="https://www.infura.io/">Infura</Link> is a good option to start with that supports 100K free requests per day. And yes, it has premium plans, but its free plan is enough for us.</>} />

                    <Paragraph text={<>First of all, sign up for free in <Link className="text-blue-500" href="https://www.infura.io/">Infura</Link>:</>} />

                    <Image className="rounded max-w-full w-full" src={infuraSignup} alt={"no picture"} />

                    <Paragraph text={<>then create a new API key:</>} />

                    <Image className="rounded max-w-full w-full" src={apiKey} alt={"no picture"} />

                    <Paragraph text={<>Choose Web3 API and name your project:</>} />

                    <Image className="rounded max-w-full w-full" src={createApi} alt={"no picture"} />

                    <Paragraph text={<>Copy the url of Ethereum's mainnet. Do not share the API key with anyone.</>} />

                    <Image className="rounded max-w-full w-full" src={ethEndpoint} alt={"no picture"} />

                    <Paragraph text={<>Now it's time to use the real magic. Install the latest version of the <Link className="text-blue-500" href="https://github.com/xmrrabbitx/NftHistoryLogs#installation">NFT history logs library</Link>: <CodeBlock title="" code={String.raw`composer require nfthistory/nfthistorylogs`} description="" />  </>} />
                    
                    <Paragraph text={<>Then import it like this:<CodeBlock title="" code={String.raw`<?php

require 'vendor/autoload.php'

use Nft\History\nftHistory;`} description="" /></>} />

<Paragraph text={<>Then, insert the contract address you want and paste the provider URL that you copied from the Infura website:<CodeBlock title="" code={String.raw`$contractAddress = '0x00B3e138c6e4b233e5DDed8CfeD200f0c82B536c';
$provider = 'https://mainnet.infura.io/v3/<YOUR API KEY>';`} description="" /></>} />

<Paragraph text={<>In this step, create an instance of the nftHistory object:<CodeBlock title="" code={String.raw`$nfthistory = new nftHistory($contractAdress, $provider);`} description="" /></>} />

                    <Paragraph text={<>Now call the topSellNfts() function to retrieve as many top-selling nft tokens as you want:<CodeBlock title="" code={String.raw`$NftHistory->topSellNfts("multiThread", 10);`} description="" /></>} />
                    <Paragraph text={<>In the code above, we retrieve the top-selling NFT tokens of a contract address in one single code. We set the mode on multiTread to decrease the time for retrieving. Also, we set 10, which means retrieve the top 10 selling NFT tokens of a contract address. This option can be different based on your needs.</>} />
                    <Paragraph text={<>The output is: <CodeBlock title="" code={String.raw`array(10) {
  [0]=>
  string(4) "0.40"
  [1]=>
  string(4) "0.25"
  [2]=>
  string(4) "0.21"
  [3]=>
  string(4) "0.19"
  [4]=>
  string(4) "0.15"
  [5]=>
  string(4) "0.12"
  [6]=>
  string(4) "0.11"
  [7]=>
  string(4) "0.11"
  [8]=>
  string(4) "0.10"
  [9]=>
  string(4) "0.09"
}`} description="" /> </>} />
                    <Paragraph text={<>As you can see, we successfully retrieved the top 10 out of 83 NFT token sale logs with a single code. Just remember, the bulk request (multiThread) may lead to a rate limit with some providers. Fortunately, Infura is more resilient than that. use carefully. </>} />
                    <Paragraph text={<>The rest of the functions are <Link className="text-blue-500" href="https://github.com/xmrrabbitx/NftHistoryLogs#usage">here</Link></>} />
                    <Paragraph text={<>I hope this is helpful to you. ^__^</>} />

                    
                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}