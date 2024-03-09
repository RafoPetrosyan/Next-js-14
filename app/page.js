import Link from "next/link";
import HomePage from "@/app/HomePage";
import ssrRequest from "@/lib/ssrRequest";
import './home.css';

export default async function Home() {
    const data = await ssrRequest()
    console.log(data, 'data')

    return (
        <>
            <p>dwdwdw</p>
            <Link href={'/test'}>Test</Link>
            <HomePage props={data}/>
        </>
    );
}
