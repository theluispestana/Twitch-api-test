import React, { Component } from 'react';
import './App.css';
import TwitchElement from './components/twitchElement';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    var url = 'https://api.twitch.tv/kraken/streams/?game=fortnite&limit=24';
    
    var myHeaders = new Headers({
      'Accept': 'application/vnd.twitchtv.v5+json',  
      'Client-ID': 'ff0xic4mmcxgfmi15addjjs9vvryvh'
    });      
    
    var myInit = {
      method: 'GET',
      headers: myHeaders,
    };

    var myRequest = new Request(url, myInit)
    fetch(myRequest).then(function(response){
      return response.json()
    }).then((data) => {
      this.setState({
        total: data._total,
        streams: data.streams
      })
    });
  }
  
  render() {
    console.log(this.state.streams);
    let stream = null;

    if(this.state.streams != undefined) {
      stream = (
        <TwitchElement 
          streams={this.state.streams}
        />
      );
    }

    return (
      <div className="container">
        {stream}
      </div>
    );
    }
  }

export default App;
