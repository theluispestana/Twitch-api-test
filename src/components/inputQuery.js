import React from 'react';

const inputQuery = (props) => {
    return (
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                onChange={props.changed} 
                // value={props.value}
                placeholder="Enter the name of a game"
                autoFocus
            />
        </div>
    )
}

export default inputQuery;