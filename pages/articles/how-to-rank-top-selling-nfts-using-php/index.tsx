
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
import BoyPic from "@/public/pics/how-to-rank-top-selling-nfts-using-php/the boy who lost his mind.jpg"
import TrxLisPic from "@/public/pics/how-to-rank-top-selling-nfts-using-php/trx hash list.jpg"
import HeaderPic from "@/public/pics/how-to-rank-top-selling-nfts-using-php/HeaderPic.jpg"

import iconIco from "@/public/logos/logo.ico"


export default function index(){

    return(

        <div>
            
            <Head>
                <title>How to Rank Top-Selling NFTs Using PHP</title>
                <meta name="description" content="Can we identify the top most selling nft information in a smart contract?" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">How to Rank Top-Selling NFTs Using PHP</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        

                    <Image className="rounded max-w-full w-full" src={HeaderPic} alt={"no picture"} />

                    
                    <Paragraph text={<>Well, we know that NFTs are transactions with special token IDs in the Ethereum logs.</>} />
                    <Paragraph text={<>But, what exactly does that mean?</>} />
                    <Paragraph text={<>It means every token id includes a “Transfer” transaction, which includes special information in the smart contract. Every “Transfer” transaction includes a set of logs and special events. In fact, the whole of the Ethereum logs concept is a multidimensional array, which we can access to subset information.</>} />
                    <Paragraph text={<>One of these pieces of information is the “value” of a transaction. This value is in WEI format, which you could convert to Ether.</>} />
                    <Paragraph text={<>For more convenient access, we could use the <Link  className="text-blue-500" href={"https://github.com/xmrrabbitx/NftHistoryLogs"}>NFT History Logs library</Link>.</>} />
                    <Paragraph text={<>Let’s get started!</>} />
                    <Paragraph text={<>First, install it via this command:<CodeBlock title="" code={String.raw`composer require nfthistory/nfthistorylogs v0.0.1`} description="" /></>} />
                    <Paragraph text={<>Then import it like this:<CodeBlock title="" code={String.raw`<?php

require 'vendor/autoload.php'

use Nft\History\nftHistory;`} description="" /></>} />
                    <Paragraph text={<>Then, insert the contract address and set the provider:<CodeBlock title="" code={String.raw`$contractAddress = '0x00B3e138c6e4b233e5DDed8CfeD200f0c82B536c';
$provider = 'https://cloudflare-eth.com';`} description="" /></>} />
                    <Paragraph text={<>I used this contract address, 0x00B3e138c6e4b233e5DDed8CfeD200f0c82B536c, which belongs to The Boy who lost his mind Open Edition by Boss Logic. It is a collection of 82 NFTs at this smart contract address.</>} />
                    <Paragraph text={<>In this article, I want to list the top sales of NFTs using this contract address as a sample.</>} />
                    <Image className="rounded" src={BoyPic} alt={"no picture"} />
                    <Paragraph text={<>I used the free Cloudflare provider, but you could use your desired provider with an API key.</>} />
                    <Paragraph text={<>In this step, create an instance of the nftHistory object:<CodeBlock title="" code={String.raw`$nfthistory = new nftHistory($contractAdress, $provider);`} description="" /></>} />
                    <Paragraph text={<>Next, call the getAllTransferTrxHashAndIds() function:<CodeBlock title="" code={String.raw`$trxHash = $nfthistory->getAllTransferTrxHashAndIds();`} description="" /></>} />
                    <Paragraph text={<>The above function will give us a list of “Transfer” transaction hashes based on every token id.</>} />
                    <Paragraph text={<>The output of the function is something like this:<CodeBlock title="" code={String.raw`var_dump($trxHash);

// output:
array(82) {
   [19400010233]=>
       array(2) {
               [0]=>
              string(66) 
               '0x3982a65f77b8896c19722b8ee2314f2224c767fef25035ba968f57e0cb4a8c8e'
`} description="" /></>} />
                    <Paragraph text={<>Now we have a set of token ids that includes “Transfer” hashes of specific NFTs. The number 19400010233 is the token id, and the string value with the length of 66 in hexadecimal format is the transaction hash. by using this transaction hash, we could access the value of that transaction.</>} />
                    <Paragraph text={<>So, let’s filter this array:<CodeBlock title="" code={String.raw`$filterData = array_map(function($log) use($nfthistory){

return array_map(function($logs) use($nfthistory){

       $result = $nfthistory->getTrxByHash($logs);

        if($result['value'] !== '0x0'){

                    $logs = $result['value'];
                    return $logs;

                    }
},$log);

},$trxHash);`} description="" /></>} />
                    <Paragraph text={<>In the above code, we used array_map() to iterate over the array in order to filter it out. In this loop, we iterate again, using another array_map() to access every transaction hash. Then, using NFT History Logs , we call the getTrxHash() function to access the value of the transaction in trade.</>} />
                    <Paragraph text={<>The output of this function is a multidimensional array. The “value” index is important to us because it is the hexadecimal value of trade in WEI format. We put in a statement to remove the “0x0”, which means removing zero values.</>} />
                    <Paragraph text={<>In this step, you must have an array like this:<CodeBlock title="" code={String.raw`array(82){
[19400010074]=>
 array(4) {
    [0]=>
    NULL
    [1]=>
    NULL
    [2]=>
    NULL
    [3]=>
    string(17) '0x12dfb0cb5e88000'
  }
  [19400010323]=>
  array(2) {
    [0]=>
   NULL
    [1]=>
    NULL
  }
}`} description="" /></>} />
                    <Paragraph text={<>As you can see, the keys of the above array are the token ids that we preserved, and the values of the array are the prices of every transaction. Those whose values are NULL mean there was no sale or the transfer event was equal to zero Ether.</>} />
                    <Paragraph text={<>Now we filter this array out again:<CodeBlock title="" code={String.raw`$res = array_map(function($log) use($nfthistory){

$sum = array_sum(array_map('hexdec',$log));

        $nftSumPrice = $nfthistory->weiToEther($sum);

        return $nftSumPrice;

},$filterData);`} description="" /></>} />
                    <Paragraph text={<>In the above code, we sum the prices of every token id that includes more than one price. Then, using the weiToEther() function, we convert the price in WEI format to Ether format and finally return the result.</>} />
                    <Paragraph text={<>The output must look like this:<CodeBlock title="" code={String.raw`// output:

array(82) {
  [19400010233]=>
  string(4) '0.00'
  [19400010322]=>
  string(4) '0.00'
  [19400010042]=>
  string(4) '0.00'
 [19400010113]=>
  string(4) '0.00'
  [19400010074]=>
  string(4) '0.08'
}`} description="" /></>} />
                    <Paragraph text={<>Now we have the sum prices as well as the other ones, which are NULL. We could remove NULL values, but I intentionally kept them to make the comparison better.</>} />
                    <Paragraph text={<>Sort the array in descending order like this:<CodeBlock title="" code={String.raw`arsort($res);`} description="" /></>} />
                    <Paragraph text={<>Then the output be like this:<CodeBlock title="" code={String.raw`array(82) {
  [19400010142]=>
  string(4) '0.40'
  [19400010060]=>
  string(4) '0.25'
  [19400010127]=>
  string(4) '0.21'
  [19400010159]=>
  string(4) '0.19'
  [19400010303]=>
  string(4) '0.15'
  [19400010055]=>
  string(4) '0.12'
  [19400010429]=>
  string(4) '0.11'
  [19400010236]=>
  string(4) '0.11'
  [19400010400]=>
  string(4) '0.10'
 [19400010136]=>
 string(4) '0.09'
}
`} description="" /></>} />
                    <Paragraph text={<>The above output is the list of the top 10 selling NFTs. in order to be sure about these numbers, first go to this page to search for the first token id (19400010142). Put this number in the search section to access the transaction list of this token id.</>} />

                    <Image className="rounded" src={TrxLisPic} alt={"no picture"} />


                    <Paragraph text={<>As you can see, this token ID is transferred twice. If you click on every transaction hash and go to the “value” section, you can see the price of the trade. The first one is 0.4 Ether, and the second one is 0.</>} />
                    <Paragraph text={<>I will try to add these functions as built-in functions to the library. At this moment, you can use it as is.</>} />
                    <Paragraph text={<>The rest of the functions are <Link  className="text-blue-500" href={"https://github.com/xmrrabbitx/NftHistoryLogs#usage"}>here</Link></>} />
                    <Paragraph text={<>If you have any questions, I will respond to you via social media. ^__^</>} />
                    

                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}