import React from 'react';
import List from './videosList';
import Details from './videoDetails';
import Search from './search'

const Result = ({data,  selected, onSelectedVideo, onInput})=>(
    <div className="mainResult">
    <div className="top">
            <Search onInputChange={onInput}/>
        </div>
        <div className="view">
            <Details data={selected}/>
        </div>
        <div className="side">
            <List data={data} selectedVideo={onSelectedVideo}/>
        </div>
    </div>
)

export default Result;
