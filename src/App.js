// @flow
import React, { Component } from 'react';
import { fireStuff } from './utils/fire_data/KitchenData';
import { KitchenList } from './components/kitchen_list/List';
import './App.css';

class App extends Component {
  state = {}
  componentDidMount() {
    fireStuff.getKitchens().then(data => {
        this.setState({kitchens: data})
    })
  }
  render() {
    return (
      <div id="App">
        <header id="App-header">
          <h1 id="App-title">Free Food 4 U</h1>
        </header>
        <div id="Main-content">
            {this.state.kitchens ? <KitchenList kitchens={this.state.kitchens} /> :
                <h2>No Kitchens Found</h2>
            }
        </div>
      </div>
    );
  }
}

export default App;
