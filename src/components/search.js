import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
    super(props)
    this.state={
        term:'',
    }
}
onChangeInput = (input) => {
    this.setState({ term: input });
    this.props.onInputChange(this.state.trem);
    console.log(this.state.term);
    
}
render(){
    return (
        <div className="search">
            <input placeHolder="Youtube Kids" onChange={
                e => this.onChangeInput(e.target.value)
            } type="text" id ="searsh-input"/>
        </div>
    )
}
};

export default Search;
