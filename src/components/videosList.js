import React from 'react';
import VideoItem from './videoItem';

const List = (props)=>{
    const videoList = props.data.map((item)=> <VideoItem
    key={item.etag}
    data={item}
    selectedVideo={props.selectedVideo}
    />
    )
    return(
        <div className="list">
            <ul>
                {videoList}
            </ul>
        </div>
    )
};

export default List;
