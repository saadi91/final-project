
import React, { Component } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
class App extends Component {
 
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar  />
       <Footer />
      </div>
    );
  }
}

export default App;


