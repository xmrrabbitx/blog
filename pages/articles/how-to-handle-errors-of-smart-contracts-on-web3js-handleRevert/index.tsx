
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
import HeaderPic from "@/public/pics/how-to-handle-errors-of-smart-contracts-on-web3js-handleRevert/smartContract.png"
import iconIco from "@/public/logos/logo.ico"

export default function index(){

    return(

        <div>
            
            <Head>
                <title>How to handle errors of smart contracts on web3js: (handleRevert)</title>
                <meta name="description" content="how to access Ethereum Netwok easily using php " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">How to handle errors of smart contracts on web3js: (handleRevert)</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    <div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        
                        <Image className="rounded max-w-full w-full" src={HeaderPic} alt={"no picture"} />

                        <Paragraph text="Some days ago, I struggled with the error handling of smart contracts using the Web3js library. If you don’t know anything about Web3js, it's an npm library that enables you to connect to a blockchain network and also allows you to deploy smart contracts and create dapps." />
                        <Paragraph text="So I encountered this issue: I can’t receive the error defined by the smart contract on the “send” transaction in Web3js. Actually, when we run the “call” method in Web3js, error handling and reverting are successful, but not in the send method." />
                        <Paragraph text={<>So there are 2 ways to get the error on reverting the EVM network response:<br />1. set handleRevert to true on the contract object. <br /> 2. catching errors on the extra call method.<br /></> } />
                        <Paragraph text={<><b>handleRevert</b>: Some blockchain networks throw an error defined in smart contracts when the option is set to true. You must just add it to the contract object like this:</>} />
                        <Paragraph text={<><CodeBlock title="" code={String.raw`new web3.eth.Contract(abi, contractAddress, {handleRevert: true} )`} description="" /></>} />
                        <Paragraph text={<>That's it. On sending a transaction, you can get an error like this:</>} />
                        <Paragraph text={<><CodeBlock title="" code={String.raw`contract.methods.yourMethod(Address).send({
                    from: Address,
                    gas: gasFee, gasPrice:gasPrice

                   }).on('error', function(error, receipt) {
            
                   return error.reason
                     
                })`} description="" /></>} />
                        <Paragraph text={<>but I tested this approach on test networks like the polygon testnet, and it didn't work. Yes, maybe some networks retrun errors in this way, but its not a 100% sure approach.</>} />
                        <Paragraph text={<><b>catching errors on the extra call method</b>: this approach is my preferred way. After sending a transaction, we need to get the transaction hash and use it to call the getTransaction() method. The response is the output of the send transaction stored on the blockchain network. If the send transaction is successful, it returns the successful output, and if not, it returns the error message. So be aware that you must call it when the status of the transaction is false, not on a successful transaction with a true status. You can achieve that using this method:</>} />
                        <Paragraph text={<>1. First, get the transaction hash and block number of the send transaction:</>} />
                        <Paragraph text={<><CodeBlock title="" code={String.raw`contract.methods.yourMethod(Address).send({
                    from: Address,
                    gas: gasFee, gasPrice:gasPrice

                   }).on('confirmation', function(confirmationNumber, receipt){
                        if(receipt.status === false){
                          
                          checkTrxError(web3, receipt.transactionHash, receipt.blockNumber)
                        
												}
                    })`} description="" /></>} />
                        <Paragraph text={<>2. then try to call getTransaction() to get error messages</>} />
                        <Paragraph text={<><CodeBlock title="" code={String.raw`function checkTrxError(web3, trxHash, blockNumber){

        web3.eth.getTransaction(trxHash, blockNumber).then(error=>{

    return error.reason

})


}`} description="" /> </>} />
                        <Paragraph text={<>Now you can get errors reverted by the EVM of your smart contract.</>} />
                        <Paragraph text={<>The con of the recent approach is a lack of efficiency. We must request it twice for every transaction. It consumes a lot of resources.</>} />
                        <Paragraph text={<>If you have a good, 100% sure alternative solution for it, tell me via  <Link className="text-blue-500" href="https://blog.mrrabbit.info/socialmedia">email</Link></>} />
                       
                        

                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}