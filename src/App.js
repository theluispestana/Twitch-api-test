import React, { Component } from 'react';
import './App.css';
import TwitchElement from './components/twitchElement';
import InputQuery from './components/inputQuery';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.stream = null;
    
    this.url = 'https://api.twitch.tv/kraken/streams/?game=fortnite&limit=25';
    this.myHeaders = new Headers({
      'Accept': 'application/vnd.twitchtv.v5+json',  
      'Client-ID': 'ff0xic4mmcxgfmi15addjjs9vvryvh'
    });      
    this.myInit = {
      method: 'GET',
      headers: this.myHeaders,
    };
    this.myRequest = new Request(this.url, this.myInit);
  }
  
  componentDidMount() {
    fetch(this.myRequest).then(function(response){
      return response.json()
    }).then((data) => {
      this.setState({
        total: data._total,
        streams: data.streams
      })
    });
  }

  apiCall = (event) => {
    console.log(event.target.value);
    this.url = 'https://api.twitch.tv/kraken/streams/?game=' + event.target.value + '&limit=25';
    this.myRequest = new Request(this.url, this.myInit);
    console.log(this.url);
    
    fetch(this.myRequest).then(function(response){
      return response.json()
    }).then((data) => {
      console.log('test');
      this.setState({
        total: data._total,
        streams: data.streams
      })
    });
  }
  
  render() {
    console.log(this.state.streams);

    if(this.state.streams !== undefined) {
      this.stream = (
        <TwitchElement 
          streams={this.state.streams}
        />
      );
    }

    return (
      <div>
        <InputQuery
          changed={this.apiCall}
        />
        <div className="container">
          {this.stream}
        </div>
      </div>
    );
    }
  }

export default App;
