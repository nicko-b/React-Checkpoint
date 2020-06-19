import React, { Component } from 'react';
import Table from "./Table";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: []
    };

    this.fetchEmail();

  }
  
  async fetchEmail() {
    for (let i=1; i<=100; i++) {
      const response = await fetch(`http://localhost:3001/emails` + i)
      const json = await response.json()
      this.setState({email: this.state.email.concat(json)})
    }
  }
  
  
  render() {
    if (!this.state.email) {
      return null;
    } else {
      let seeAll = <Table value={this.state.email} />
   
      return (
      <div className="App">
        <div>
          {seeAll}
        </div>
      </div>    
      );
      }
    }
}


export default App;
