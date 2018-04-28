import React from 'react';

const twitchElement = (props) => props.streams.map(stream => {
    return (
        <div className="element" key={stream._id}>
            <a href={stream.channel.url}>
                <img src={stream.preview.medium} alt={stream.channel.name + " preview image"}/>
                <p>{stream.channel.status}</p>
                <span>{stream.viewers.toLocaleString() +" viewers on " + stream.channel.name}</span>
            </a>
        </div>
    )
});

export default twitchElement;