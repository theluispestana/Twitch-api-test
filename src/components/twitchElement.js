import React from 'react';

const twitchElement = (props) => props.streams.map(stream => {
    return (
        <div className="element" key={stream._id}>
            <img src={stream.preview.medium} alt={stream.channel.name + " preview image"}/>
            <p>{stream.channel.status}</p>
            <span>{stream.viewers.toLocaleString() +" viewers on " + stream.channel.name}</span>
        </div>
    )
});

export default twitchElement;