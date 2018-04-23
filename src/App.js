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
    console.log(this.state.text);

    if(this.state.text === undefined) {
      return (
        <div className="App">wait</div>
      );
    } else {
      return (
        <div className="App">
          <p>{this.state.total}</p>
          {this.state.text.map(stream => (
            <div key={stream._id}>
              <p>{stream.channel.name}</p>
              <img src={stream.preview.medium}/>
              </div>    
            ))}
            </div>
          );
        }
        
        // if(this.state.text === undefined) {
          // <img src={stream.channel.preview.medium}/>
    //   console.log("undefined");
    //   let stream = "wait";
    // } else {
    //   console.log("defined");
    //   let stream = this.state.text.map(stream => (
    //     <div key={stream._id}>
    //       {stream.channel.name}
    //     </div>
    //   ));
    // }

    // console.log(stream);
    // return (
    //   <div className="App">
    //     {stream}
    //   </div>
    // );
    }
  }

export default App;
