import React from 'react'
import Items from './Items';

const Categories = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Items/>
        </div>
    )
}

export default Categories
