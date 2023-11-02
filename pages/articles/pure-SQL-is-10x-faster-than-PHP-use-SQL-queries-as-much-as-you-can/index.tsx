
import Head from "next/head"
import Link from "next/link"
import CodeBlock from "@/pages/components/CodeBlock"
import Paragraph from "@/pages/components/Paragraph"
import Image from "next/image"
import HeaderPic from "@/public/pics/pure-SQL-is-10x-faster-than-PHP-use-SQL-queries-as-much-as-you-can/sql.jpg"


export default function index(){

    return(

        <div>
            
            <Head>
                <title>pure SQL is 10x faster than PHP: use SQL queries as much as you can</title>
                <meta name="description" content="we can now retrieve as many top-selling NFT tokens from a specific contract address as we want in just one line of code." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo.ico" />
            </Head>
            <div className="container max-w-full">
                <header className="lg:text-center md:text-center sm:text-center text-left pl-5 pr-5 mt-16 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">pure SQL is 10x faster than PHP: use SQL queries as much as you can</header>
                <div className="w-12/12 grid grid-cols-6 mt-10"> 
                    <div className="lg:col-span-1 col-span-0"></div>
                    < div className="lg:col-span-4 col-span-6 lg:p-5 md:p-5 sm:p-5 p-2 lg:m-0 md:m-0 sm:m-0 m-2 text-justify border-2 border-dashed border-amber-500 leading-8">
                        

                    <Image className="rounded max-w-full w-full" src={HeaderPic} alt={"no picture"} />
                    
                    <Paragraph text={<>I was getting into comparing SQL with the PHP fetch assoc command and seeing how long it takes to reach a specific value in the MySQL database.</>} />
                    <Paragraph text={<>My pre-assumption was a close result, but the outcome was amazing and surprising. Let me show you in practice.</>} />
                    <Paragraph text={<>This is my pure SQL code, which returns “mrrabbit’ value from a 10K value stored in the database: <CodeBlock title="" code={String.raw`<?php

require ("connect.php");

$start = microtime(true);

$sql = "SELECT * FROM userTest where username='mrrabbit'";
$result = $conn->query($sql);

print_r(mysqli_fetch_assoc($result)['username']);

$conn->close();

$end = microtime(true); 

$duration = $end - $start;

print("\n" . $duration);

`} description=""/></>} />
                    <Paragraph text={<>I put mrrabbit on index 9994. the result was: 0.001 miliseconds</>} />
                    <Paragraph text={<>then I used a PHP while loop to search if mrrabbit exists on the returned values or not:</>} />
                    <Paragraph text={<><CodeBlock title="" code={String.raw`<?php

require ("connect.php");

$start = microtime(true);

$sql = "SELECT * FROM userTest";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

  // output data of each row
  while($row = $result->fetch_assoc()) {

    if($row['username'] == "mrrabbit"){ 
        print($row['username']);
        break;
    }

  }

} else {

    print("0 results");

  }

  $conn->close();

  $end = microtime(true); 

  $duration = $end - $start;

  print("\n" . $duration);
  
  `}  description=""/></>} />
                    <Paragraph text={<>The result was 0.008, and it was amazing. the pure sql was 8X faster than the while loop of php. so why?</>} />
                    <Paragraph text={<>SQL is optimized for set-based operations - With a single SQL query, you can filter, sort, calculate aggregates, etc. on a whole set of data at once very efficiently. Fetching row by row in PHP loops is less efficient.</>} />
                    <Paragraph text={<>Database optimizations - Databases like MySQL and PostgreSQL are highly optimized to execute queries efficiently using indexes, cached execution plans, etc. PHP does not have these low-level optimizations.</>} />
                    <Paragraph text={<>Reduced data transfer - SQL queries fetch only the specific columns you need. Looping through result sets in PHP transfers the entire rows from database, even if you don't need all the columns.</>} />
                    <Paragraph text={<>Parallelization - Databases can leverage multiple cores/threads to execute a query in parallel for additional performance. A PHP loop runs on a single thread.</>} />
                    <Paragraph text={<>Caching - Databases have robust query caching mechanisms to avoid re-running the same SQL query. PHP has no caching of the fetch/loop logic.</>} />
                    <Paragraph text={<>Fewer context switches - A single SQL call minimizes the number of context switches between PHP and database. Looping through results causes repeated switching of contexts.</>} />
                    


                    </div>
                    <div className="lg:col-span-1 col-span-0"></div>
                </div>
            </div>
        </div>
    )
}