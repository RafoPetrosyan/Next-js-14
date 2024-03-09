'use client'

import React, {useState} from 'react';

const HomePage = ({props}) => {
    const [products, setProducts] = useState(props.products);

    return (
        <div>
            {products.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default HomePage;