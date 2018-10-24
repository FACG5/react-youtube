import React from 'react';

const VideoItem = ({data,selectedVideo}) =>{
    const img = data.snippet.thumbnails.default.url;
    const title = data.snippet.thumbnails.title;
    const channelTitle = data.snippet.channelTitle;
    const desc = data.snippet.description;

    return(
        <li  className="video" onClick={() => {selectedVideo(data)}}>
            <img className="img-video" alt="video img" src={img}/>
            <h3 className="title">{title}</h3>
            <h4>{channelTitle}</h4>
            <p>{desc}</p>
        </li>
    )
} 
export default VideoItem;
