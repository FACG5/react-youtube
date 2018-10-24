import React, { Component } from 'react';
import lodash from 'lodash';
import ytSearch  from 'youtube-api-search';
import Loading from './components/loading';
import Result from './components/result';

import './App.css';

const cred = 'AIzaSyBtH3Ts8HaxlT3MXZITfS0iMCfTLbPxXwA';

class App extends Component {
  state = {
    data: [],
    isLoading: true,
    selected: null
    }
 onSearch = ( term= 'reactjs') => {
  this.setState({ isLoading: true });
  ytSearch({key: cred, term}, data =>{
  this.setState({ isLoading: false , data,  selected: data[0]})
  console.log(this.state.selected);
    })
 }
  componentDidMount(){
   this.onSearch();
  }
  render() {
    const input = lodash.debounce((input) => this.onSearch(input), 500)
    return (
      <div className="App">
        <header className="App-header">
         {this.state.isLoading ? <Loading />  : <Result 
         onInput= {input}
         selected={this.state.selected} 
         onSelectedVideo={ selectedVideo => this.setState({
         selected: selectedVideo
     })} data={this.state.data} />}

        </header>
      </div>
    );
  }
}

export default App;
