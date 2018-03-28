import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
