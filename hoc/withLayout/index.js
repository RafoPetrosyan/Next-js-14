import React from 'react'
import ssrRequest from "lib/ssrRequest";
import './style.scss'
import Link from "next/link";

const withLayout = (Component) => {
    return async (props) => {
        const data = await ssrRequest({url: 'default/get-colors'})
        return (
            <div className='container'>
                <div className='header'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/services'}>Page 2</Link>
                </div>
                <div className='container-content'>
                    <Component {...props} {...data} />
                </div>
                <div className='footer'>Footer</div>
            </div>
        )
    }
}

export default withLayout
