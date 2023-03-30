import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'articles');
//const postFiles = fs.readdirSync('articles');


interface Data  {
    title:string,
    date:string
}

const data:Data = {title:'how te fetch nft', date:"2020"};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json(data)
  }