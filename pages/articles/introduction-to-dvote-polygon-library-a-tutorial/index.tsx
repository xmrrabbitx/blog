
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
// import  from "@/public/pics/how-to-fetch-nft-transaction-logs-using-php/.jpeg"
import iconIco from "@/public/logos/logo.ico"
import HeaderPic from "@/public/pics/introduction-to-dvote-polygon-library-a-tutorial/HeaderPic.png"

export default function index(){

    return(

        <div>
            
            <Head>
                <title>Introduction to dvote-polygon Library: A Tutorial</title>
                <meta name="description" content="how to create a decentralized Voting System" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">Introduction to dvote-polygon Library: A Tutorial</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        
                        <Image className="rounded max-w-full w-full" src={HeaderPic} alt={""} />

                        <Paragraph text={<>If you're looking to create decentralized voting applications on the Polygon network, <Link className="text-blue-500" href="https://github.com/xmrrabbitx/dvote-polygon#readme">dvote-polygon</Link> is a TypeScript library that can help you get started. This library provides a simple and intuitive interface for deploying and interacting with smart contracts on the Polygon network. In this tutorial, we will go through the steps to install and use this library.</>} />
                     
                        <Paragraph text={<><b>Installation</b> <br />

To install <Link className="text-blue-500" href="https://www.npmjs.com/package/dvote-polygon" >dvote-polygon</Link>, open a command prompt or terminal and type the following command:</>} />
                       
                       <CodeBlock title="" code={<>npm install dvote-polygon</>} description="" />
                       <Paragraph text={"This will install the latest version of the dvote-polygon library in your project."} />

                        <Paragraph text={<><b>Usage</b> <br/> To use dvote-polygon, you first need to import the Dvote class from the library: <br/> <CodeBlock title="" code={`import {Dvote} from 'dvote-polygon'`} description=""/></>} />

                        <Paragraph text={<>Next, you can create a new instance of the Dvote class: <br/> <CodeBlock title="" code={`const endpoint = "http://127.0.0.1:8545" // your provider
const mnemonic = "Mnemonic" // your wallet mnemonic

const dv = new Dvote(mnemonic , endpoint ) // new instance
`} description="" /> </>} />

                        <Paragraph text={<>You will need to replace the endpoint and mnemonic variables with your own values. The endpoint should be the URL of your Polygon network provider (use  <Link className="text-blue-500" href="https://quicknode.com/"> quicknode </Link> provider), and the mnemonic should be the seed phrase of your wallet.</>} />

                        <Paragraph text={<><b>Compile</b> <br/>

Before deploying a smart contract, you need to compile its source code. To compile the smart contract using dvote-polygon, you can call the compile() method on your Dvote instance:

<CodeBlock title="" code={`let abi = dv.compile().abi()
let bytecode = dv.compile().bytecode()
`} description="" /> 
The compile() method returns an object with the ABI and bytecode of the compiled smart contract.
</>} />

                        <Paragraph text={<><b>Deploy</b> <br/>

Once you have compiled the smart contract, you can deploy it to the Polygon network using the deploy() method:

<CodeBlock title="" code={`let fromAddress = "Your Wallet Address"

dv.deploy(fromAddress, abi, bytecode).then(data=>{

    console.log(data)

})
`} description="" />
Replace "Your Wallet Address" with the address of your wallet like   <Link className="text-blue-500" href="https://metamask.io" >Metamask</Link>. The deploy() method returns a promise object that resolves to the address of the deployed smart contract.
</>} />

                    <Paragraph text={<><b>Create a Poll</b> <br/>

To create a new poll, you can call the createVote() method on your Dvote instance:

<CodeBlock title="" code={`let fromAddress = "Your Wallet Address"
let voteName = "EBAY"
let voteOptions = ["perfect", "good", "bad", "worst"]

dv.createVote(voteName, voteOptions, fromAddress).then(data=>{

    console.log(data)

})
`} description="" />

The createVote() method takes three parameters: the name of the vote, an array of options for the vote, and the address of the wallet that will create the vote. The method returns a promise that resolves to the address of the newly created vote.

</>} />

                    <Paragraph text={<><b>Add Vote</b><br />

To add a vote to an existing poll, you can call the addVote() method on your Dvote instance:

<CodeBlock title="" code={`let fromAddress = "Your Wallet Address"
let voteName = "EBAY"
let voteOptions = "perfect"

dv.addVote(voteName, voteOptions, fromAddress).then(data=>{

    console.log(data)
    
})
`} description="" />

The addVote() method takes three parameters: the name of the poll, the option to add a vote to, and the address of the wallet that will add the vote. The method returns a promise that resolves to the transaction hash of the vote addition.

</>} />

                    <Paragraph text={<><b>Vote Result</b> <br/>

To get the result of a poll, you can call the voteResult() method on your Dvote instance:


<CodeBlock title="" code={`let fromAddress = "Your Wallet Address"
let voteName = "EBAY"

dv.voteResult(voteName, fromAddress).then((data:any)=>{

    console.log(data)

})
`} description="" />

Pass your desired poll's name to show how many unique address wallets voted for options.
</>} />

                <Paragraph text={<><b>the Result</b><br/>
                    
                    <CodeBlock title="" code={`[
    { name: 'perfect', votes: '1' }, 
    { name: 'good', votes: '0' }, 
    { name: 'bad', votes: '0' }, 
    { name: 'worst', votes: '0' }
]`} description="" />

If you see the result like this, all is well, and you get the vote number with the name of every option.
                    </>} />

                <Paragraph text={<>If you are interested in Web3, make sure to see my other <Link className="text-blue-500" href="https://blog.mrrabbit.info/articles">articles</Link>.</>} />

                <Paragraph text={<>You could also get in contact with me using <Link className="text-blue-500" href="https://blog.mrrabbit.info/socialmedia">social media</Link>.</>} />
                    
                    <Paragraph text={<>I hope this article has been useful to you. ^__^ </>} />

                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}