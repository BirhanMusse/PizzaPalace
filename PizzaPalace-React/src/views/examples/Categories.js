import React from 'react'
import Items from './Items';

const Categories = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Items show={true} />
        </div>
    )
}

export default Categories
