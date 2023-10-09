
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
import HeaderPic from "@/public/pics/cash-back-apps-as-a-loyalty-program-in-online-retail-businesses-is-it-worth-it/HeaderPic.jpg"
import Mechanism from "@/public/pics/cash-back-apps-as-a-loyalty-program-in-online-retail-businesses-is-it-worth-it/mechanism.png"
import Eggs from "@/public/pics/cash-back-apps-as-a-loyalty-program-in-online-retail-businesses-is-it-worth-it/eggs.jpg"


export default function index(){

    return(

        <div>
            
            <Head>
                <title>Cash back Apps as a loyalty program in online retail businesses: is it worth it?</title>
                <meta name="description" content="we can now retrieve as many top-selling NFT tokens from a specific contract address as we want in just one line of code." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <div className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">Cash back Apps as a loyalty program in online retail businesses: is it worth it?</div>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        

                    <Image className="rounded max-w-full w-full" src={HeaderPic} alt={"no picture"} />
                    
                    <Paragraph text={<>Cashback apps are those kinds of apps you might be tempted to use; they give you back a portion of your purchase in fiat or cryptocurrency. Cashback money is one of the best marketing and customer loyalty strategies that make customers more loyal to brands. Happy customers mean more purchases.</>} />
                    <Paragraph text={<><Link className="text-blue-500" href={"https://www.lolli.com/"}>Lolli </Link>and <Link className="text-blue-500" href={"https://stormx.io/"} > StormX </Link>are examples of these cash-back apps.</>} />
                    <Paragraph text={<>But is it worth it?</>} />
                    <Paragraph text={<>This matter must be discussed in two aspects: the business owner aspect and the user aspect.</>} />
                    <Paragraph text={<>Let's begin with business owner logic: if you have a clothing online shop, your user base is approximately 1 million customers. Also, we have a cashback app that gives customers 30% of their purchases back. If every customer purchases three items worth $100, it's a total of 3 million purchases that reach us for 90 million dollars in cash back. Imagine that the total profits of an online shop would be 300 million dollars. Now the online shop retailer must give back one-third of its profit. That's a huge number and a huge loss for the business owner, is that right?</>} />
                    
                    <Paragraph text={<div className="flex justify-center"><Image className="rounded max-w-full" src={Mechanism} width={400} height={400}  alt={"no picture"} /></div>} />

                    <Paragraph text={<>Now, from a customer perspective, if every customer purchases 3 items and gets 30%, he or she gets $90 for every $300 purchase. its worthless. Does this number create any loyalty for that brand? Of course not. I'm not loyal to, for example, Zara because of the $90 in a month.</>} />
                    <Paragraph text={<>So the giveaway must be enough to make customers loyal to the brand. I think cashback apps are an illusion of giving away money to customers. The big companies have many marketing strategies, so cashback apps are one of many strategies to get customers loyal, but they are not the main egg in the basket. So for small to midsize businesses, cashback apps are an investment on the dead horse.</>} />
                    <Paragraph text={<>Honestly, the cash-back app strategy is a loss-loss game for small retailers. Don't fall into it.</>} />
                    <Paragraph text={<>For example, periodically, you can create a loyalty campaign and give $1000 to your top customers instead of the above approach. This method makes customers happy, encourages them to say about your brand to others (word-of-mouth strategy), and encourages other customers to purchase more to reach your giveaway.</>} />
                    <Paragraph text={<>Don’t put all the eggs in one basket.</>} />
                    

                    <Image className="rounded max-w-full w-full" src={Eggs} alt={"no picture"} />
                    
                    
                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}