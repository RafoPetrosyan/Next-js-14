'use client'

import React, {useState} from 'react';

const Content = ({props}) => {
    console.log(props, 'props')
    return (
        <div className='product-list'>
            {props.data.models.map(item => (
                <div className='product' key={item.id}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default Content;