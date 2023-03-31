

export default function Lists(){

    const matterResult:any = {"content":"",
    
    "data":{

        "title-0":"how-to-fetch-nft-transaction-logs-using-php",
        "description-0":"The Nft History Logs library allows you to use the eth_getLogs method with the help of endpoints such as alchemy ...",
        "date-0":"04-01-2023",

    },

    "isEmpty":false,"excerpt":"","orig":{"type":"Buffer","data":[45,45,45,13,10,116,105,116,108,101,45,48,58,32,39,72,111,119,45,116,111,45,70,101,116,99,104,45,78,70,84,45,84,114,97,110,115,97,99,116,105,111,110,45,76,111,103,115,45,85,115,105,110,103,45,80,72,80,39,13,10,100,101,115,99,114,105,112,116,105,111,110,45,48,58,32,39,84,104,101,32,78,102,116,32,72,105,115,116,111,114,121,32,76,111,103,115,32,108,105,98,114,97,114,121,32,97,108,108,111,119,115,32,121,111,117,32,116,111,32,117,115,101,32,116,104,101,32,101,116,104,95,103,101,116,76,111,103,115,32,109,101,116,104,111,100,32,119,105,116,104,32,116,104,101,32,104,101,108,112,32,111,102,32,101,110,100,112,111,105,110,116,115,32,115,117,99,104,32,97,115,32,97,108,99,104,101,109,121,32,46,46,46,39,13,10,100,97,116,101,45,48,58,32,39,48,51,45,51,49,45,50,48,50,51,39,13,10,45,45,45,13,10]}};


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
