import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'pages/articles')

type Data = {
    title:string,
    description:string,
    date:string
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const fullPath = path.join(articlesDirectory, `articles.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents);

    
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

    res.status(200).json(lis)
  }