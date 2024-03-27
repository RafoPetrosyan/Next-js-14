'use client'
import Link from "next/link";
import './style.scss'
import withLayout from "hoc/withLayout";

const Services = async () => {
    return (
        <>
            <p className="name">cwdwdwd</p>
            <Link href={'/'}>Home</Link>
        </>
    );
}

export default withLayout(Services)
