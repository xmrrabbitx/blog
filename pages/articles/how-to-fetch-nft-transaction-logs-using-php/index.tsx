
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
import koalaPic from "@/public/pics/how-to-fetch-nft-transaction-logs-using-php/kuddle koala 6466.jpeg"
import iconIco from "@/public/logos/logo.ico"
import HeaderPic from "@/public/pics/how-to-fetch-nft-transaction-logs-using-php/HeaderPic.jpeg"

export default function index(){

    return(

        <div>
            
            <Head>
                <title>How to Fetch NFT Transaction Logs Using PHP</title>
                <meta name="description" content="how to access Ethereum Netwok easily using php " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">How to Fetch NFT Transaction Logs Using PHP</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        
                        <Image className="rounded max-w-full w-full" src={HeaderPic} alt={"no picture of koala"} />

                        <Paragraph text="You may have experienced entering an NFT market and wanting to find out the number of people who have transferred a specific NFT. Some markets put the transaction history information of each NFT on the website, but some do not. Perhaps one of the reasons is the high volume of transactions made on each smart contract." />
                        <Paragraph text={<>If the latter is the case, then the second option in front of you is the <Link className="text-blue-500" href="https://etherscan.io/">Etherscan.io</Link> website. This website makes it easier for us to track NFT smart contracts. It is a very powerful tool, but it is not enough. When you want to check an NFT with a specific ID, you will have a problem, although it provides the possibility of filtering transactions based on specific event signatures such as transfer or approval but not more detailed filtering! Especially if you are in the web development space and need non-graphical tools.</>} />
                        <Paragraph text={<>The third way is to use the Web3 library. Unfortunately, most <Link className="text-blue-500" href="https://github.com/web3p/web3.php">web3 php</Link> libraries are not stable and do not have features as good as web3js.</>} />
                        <Paragraph text={<>With your options laid out, You are definitely looking for a way to get Ethereum logs more easily and filter their information in more detail. The <Link className="text-blue-500" href="https://github.com/xmrrabbitx/NftHistoryLogs">Nft History Logs</Link> library allows you to use the eth_getLogs method with the help of endpoints such as alchemy, infura, or any network where you want to receive the logs of a specific smart contract address according to the event signature.</>} />
                        <Paragraph text={<>You may ask why we should not use an SDK like SDK Alchemy instead of this library. There are several specific reasons:</>} />
                        <Paragraph text={<>1. Most of these SDKs are written by JavaScript <br/>
                                        2. These SDKs only work with their own dedicated network; for example, the alchemy SDK only works with the alchemy network, which may not be your choice and actually takes away your free will.<br/>
                                        3. Most Web3 PHP libraries are not stable and have many problems!</>} />
                        <Paragraph text={<>To start using this library, type the following command to install it: <CodeBlock title="" code="composer require nfthistory/nfthistorylogs v0.0.1" description=""/></>} />

                        <Paragraph text={<>Now import the library and create a new instance: <CodeBlock title="" code={String.raw`<?php

require 'vendor/autoload.php'

use Nft\History\nftHistory;

$contractAdress = '0x7F0159D3A639a035797e92861d9F414246735568'

$provider = 'https://cloudflare-eth.com'

$NftHistory = new nftHistory($contractAdress, $provider);`} description=""/></>} />

                    <Paragraph text={<>As you can see, this class must receive two default variables during construction: one is the address of the NFT smart contract you want, and the other is the provider or endpoint you want to use. Both must be of the string type.</>} />      
                     
                    <Paragraph text={<>Here I used Kuddle Koala smart contract #6466. Its smart contract address is 0x7F0159D3A639a035797e92861d9F414246735568 and its token ID is 6466.</>} />   

                    <Image className="rounded" src={koalaPic} alt={"no picture of koala"} />

                    <Paragraph text={<>This token has actually been transferred between two people (two addresses), and the meaning of this transfer is nothing more than the sale of an NFT to another person. We know that NFTs are unique entities, so we have one Kuddle Koala token with ID 6466; the rest of the NFTs have different IDs.</>}/>

                    <Paragraph text={<>By using our instance, we call the transferTrxById() function: <CodeBlock title="" code={String.raw`$res = $NftHistory->transferTrxById('6466', '0x0', 'latest');

var_dump($res);

//output:
Array
(
[0] => Array

        (

            [address] => 0x7f0159d3a639a035797e92861d9f414246735568

           [topics] => Array

                (

                  [0] => 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef

                   [1] => 0x0000000000000000000000000000000000000000000000000000000000000000

                  [2] => 0x0000000000000000000000005b436b7cc93d246d3a62fc7a95339f6fac7d2a4a

                    [3] => 0x0000000000000000000000000000000000000000000000000000000000001942
                )
            [data] => 0x
           [blockNumber] => 0xcd2b8e

            [transactionHash] =>
0xc95b6b17a8453526eba78592bf93b272f75e49b33487b986e81d19a1682eded6        

           [transactionIndex] => 0x1d

         [blockHash] =>
0x69b72ae82a6e6f2de0750e23e30855cc727605b4c7b3c69814cbc0b3a51b19af

            [logIndex] => 0x23

            [removed] =>
        )

    [1] => Array

        (

            [address] => 0x7f0159d3a639a035797e92861d9f414246735568

            [topics] => Array

                (

                    [0] => 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef

                    [1] => 0x0000000000000000000000005b436b7cc93d246d3a62fc7a95339f6fac7d2a4a

                    [2] => 0x000000000000000000000000cf0b56dfefa3e0051a1772fc585b076a06487c53

                    [3] => 0x000000000000000000000000000000000000000000000000000000000000194
                )

            [data] => 0x

            [blockNumber] => 0xcd3716

            [transactionHash] => 0x62f59782cc17e5156fda51e27b121d5e9562b4f0d5455c5f04720aeb0a79eb07        

          [transactionIndex] => 0x10b

            [blockHash] => 0x8313bae0ff42ba4065bfb1524efb691a5c4c31cfe56defca4c095c803d4bbc3e

            [logIndex] => 0x210

            [removed] =>

       )

    [2] => Array

       (

            [address] => 0x7f0159d3a639a035797e92861d9f414246735568

            [topics] => Array

                (

                    [0] => 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef

                    [1] => 0x000000000000000000000000cf0b56dfefa3e0051a1772fc585b076a06487c53

                   [2] => 0x0000000000000000000000002e6469c5d4256c098ac51b9655dfb27d6f996a0c

                   [3] => 0x0000000000000000000000000000000000000000000000000000000000001942

               )

          [data] => 0x

           [blockNumber] => 0xe703b0
            [transactionHash] => 0x7b913e65751d493dc46746120e5c50587d183677a7e275535137995d017a438b        

            [transactionIndex] => 0x16

            [blockHash] => 0x4837a2daf412be2deebcae9b5c3ecb8a639f0b6e221193b56fe7f42ac79389a3

            [logIndex] => 0x58

            [removed] =>
        )
)`} description=""/></>}/>

                    <Paragraph text={<>Well, as you can see, the output of this instance was a multidimensional array with 3 transactions, including the NFT mint transaction and the next two transactions of our NFT transfer, which were transferred between 3 people.</>}/>

                    <Paragraph text={<>You can access any of the properties of these transactions and analyze them. For example, the data section contains the amount of ether transferred between two addresses during NFT transfer, which is 0x, which means zero, which means no ether was transferred. Be aware that this number is in WEI format, and you need to convert it to Ether. Of course, there are other functions for the convenience of receiving the amount of transferred ether, for example: <CodeBlock title="" code={String.raw`$transactionHash = '0x62f59782cc17e5156fda51e27b121d5e9562b4f0d5455c5f04720aeb0a79eb07';

$eventName = 'OrdersMatched';

$etherAmount = $NftHistory->nftTrxWei($transactionHash, $eventName);

var_dump($etherAmount);

//output
array(1) {

  ['value']=>

  array(1) {

    [0]=>

    array(3) {

      ['buyHash']=>

      string(66) '0x0000000000000000000000000000000000000000000000000000000000000000'

      ['sellHash']=>

      string(66) '0243b8854fe6a9b124e13caed266c59d3cacc1ca4c3246a3cad5a094c53f6d0900'

      ['price']=>

      string(62) '0000000000000000000000000000000000000000000000009869529cdd4000'
    }
 }
}`} description="" /></>}/>

    <Paragraph text={<>Well, as shown in the code above, based on the hash value of the transaction, we obtained the sale information for this NFT. Note that the $eventName variable is optional. In fact, instead of receiving all the ether values ​​made on this transaction, we returned only its sale value information.</>}/>

    <Paragraph text={<>Likewise, you can work with the rest of its functions to achieve your desired results more easily.</>}/>
    
    <Paragraph text={<>You can access other functions of the NFT History Logs library <Link className="text-blue-500" href={"https://github.com/web3p/web3.php#usage"}>here</Link></>}/>
    
    <Paragraph text={<>if you have any questions, feel free to ask me via social media ^__^</>}/>

                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}