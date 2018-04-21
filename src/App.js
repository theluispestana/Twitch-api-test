import React, { Component } from 'react';
import './App.css';
// import Request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: null,
      total: null
    };
  }

  componentWillMount() {
    var url = 'https://api.twitch.tv/kraken/streams/?game=Overwatch';
    
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
        text: data.streams
      })
    });
  }
  
  render() {
    let streams = this.state.text;

    if(streams === undefined) {
      return (
        <div className="App">wait</div>
      );
    } else {
      return (
        <div className="App">
          <p>{this.state.total}</p>
          {streams.map(stream => (
            <div key={stream._id}>
              {stream.channel.name}
            </div>    
          ))}
        </div>
      );
      }
    }
  }

export default App;
