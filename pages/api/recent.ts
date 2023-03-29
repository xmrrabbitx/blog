import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'articles');
//const postFiles = fs.readdirSync('articles');


type Data = {
    title:string,
    date:string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ title: 'mrrabbit',date:"2020"})
  }