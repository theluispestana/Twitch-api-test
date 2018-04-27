import React from 'react';

const inputQuery = (props) => {
    return (
        <input type="text" onChange={props.changed} value={props.value}/>
    )
}

export default inputQuery;