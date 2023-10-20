import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
//import m from "../json/data.json"

// const articlesDirectory = path.join(process.cwd(), 'pages/articles');

 
const matterResult:any = {"content":"",
    
"data":{

    "title-0":"how-to-fetch-nft-transaction-logs-using-php",
    "description-0":"The Nft History Logs library allows you to use the eth_getLogs method with the help of endpoints such as alchemy ...",
    "date-0":"04-01-2023",
    "title-1":"how-to-rank-top-selling-nfts-using-php",
    "description-1":"Can we identify the top most selling nft information in a smart contract?",
    "date-1":"04-01-2023",
    "title-2":"retrieve-top-10-selling-nft-using-php-and-infura",
    "description-2":"we can now retrieve as many top-selling NFT tokens from a specific contract address as we want in just one line of code.",
    "date-2":"04-05-2023",
    "title-3":"introduction-to-dvote-polygon-library:-a-tutorial",
    "description-3":"If you're looking to create decentralized voting applications on the Polygon network, dvote-polygon is a TypeScript library that can help you get started",
    "date-3":"05-10-2023",
    "title-4":"tarpit-of-ideas:-how-can-we-know-a-startup-idea-is-a-good-idea?",
    "description-4":"A tarpit is a place with water and mud where animals become entangled...",
    "date-4":"10-09-2023",
    "title-5":"cash-back-apps-as-a-loyalty-program-in-online-retail-businesses:-is-it-worth-it?",
    "description-5":"Cashback apps give you back a portion of your purchase in fiat or cryptocurrency. Happy customers mean more purchases...",
    "date-5":"09-10-2023",
    "title-6":"how-to-handle-errors-of-smart-contracts-on-web3js:-(handleRevert)",
    "description-6":"So there are 2 ways to get the error on reverting the EVM network response...",
    "date-6":"19-10-2023",
    
},

"isEmpty":false,"excerpt":"","orig":{"type":"Buffer","data":[45,45,45,13,10,116,105,116,108,101,45,48,58,32,39,72,111,119,45,116,111,45,70,101,116,99,104,45,78,70,84,45,84,114,97,110,115,97,99,116,105,111,110,45,76,111,103,115,45,85,115,105,110,103,45,80,72,80,39,13,10,100,101,115,99,114,105,112,116,105,111,110,45,48,58,32,39,84,104,101,32,78,102,116,32,72,105,115,116,111,114,121,32,76,111,103,115,32,108,105,98,114,97,114,121,32,97,108,108,111,119,115,32,121,111,117,32,116,111,32,117,115,101,32,116,104,101,32,101,116,104,95,103,101,116,76,111,103,115,32,109,101,116,104,111,100,32,119,105,116,104,32,116,104,101,32,104,101,108,112,32,111,102,32,101,110,100,112,111,105,110,116,115,32,115,117,99,104,32,97,115,32,97,108,99,104,101,109,121,32,46,46,46,39,13,10,100,97,116,101,45,48,58,32,39,48,51,45,51,49,45,50,48,50,51,39,13,10,45,45,45,13,10]}};



export function RecentList(){

  /*
  const fullPath = path.join(articlesDirectory, `articles.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents);
*/


    const len = (((Object.keys(matterResult.data).length)/3)-1);
    const lis:any = {};

    if(len >= 10){
      
      for(let i=len;i>(len - 10);i--){
          
        
        lis["title-" + i] = matterResult.data["title-" + i];
        lis["description-" + i] = matterResult.data["description-" + i];
        lis["date-" + i] = matterResult.data["date-" + i];
          
      }

    }else{

      for(let i=len;i>=0;i--){
          
      
        lis["title-" + i] = matterResult.data["title-" + i];
        lis["description-" + i] = matterResult.data["description-" + i];
        lis["date-" + i] = matterResult.data["date-" + i];
          
      }
    }

    return lis;


}



export function AllList(){

  const len = (((Object.keys(matterResult.data).length)/3)-1);
  const lis:any = {};
  for(let i=len;i>=0;i--){

    lis["title-" + i] = matterResult.data["title-" + i];
    lis["description-" + i] = matterResult.data["description-" + i];
    lis["date-" + i] = matterResult.data["date-" + i];
          

  }

    return lis;


}