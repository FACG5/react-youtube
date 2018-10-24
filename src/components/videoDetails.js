import React from 'react';
import videoItem from './videoItem';

const VideoDetails = ({data}) => {
    const videoID = data.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoID}`;
    const title = data.snippet.thumbnails.title
    const channelTitle = data.snippet.channelTitle;
    const desc = data.snippet.description

    return(
       <div className="video-show">
        <iframe className="show" title={videoID} src={videoUrl}></iframe>
        <div className="details">
            <h2>{title} </h2>
            <h3>{channelTitle} </h3>
            <h4>{desc} </h4>
        </div>
       </div>
    )
}

export default VideoDetails;
