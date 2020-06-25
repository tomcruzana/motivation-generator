import React from "react";
import Header from "./components/Header";
import MotivationGenerator from "./components/MotivationGenerator";
import Footer from "./components/Footer";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Header/>
        <MotivationGenerator/>
        <Footer/>
      </div>
    )
  }
}

export default App;