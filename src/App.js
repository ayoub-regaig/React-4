import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div>
        <h2 class="aha">App component</h2>
        <Card imageLink="https://robohash.org/ayoubregaieg" name="ayoub" function="student" gender="male"/>
        <Card imageLink="https://robohash.org/ahmedfakhfak" name="salam" function="game instracteur" gender="female"/>
        <Card imageLink="https://robohash.org/brahimjemal" name="brahim" function="student" gender="male"/>
        <Card imageLink="https://robohash.org/rahmagomycode" name="rahma" function="manager" gender=" female"/>
        
        
      </div>
    );
  }
}

export default App;
