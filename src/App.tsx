import React,{useState} from "react";
import "./App.scss";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import Ranking from "./component/ranking/ranking";
import Stars from "./component/stars/stars";
import Interesting from "./component/interesting/interesting";
import Footer from "./component/footer/footer";
import Record from "./component/record/record";



function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="distanceY">
        <Ranking />
      </div>
      <div className="distanceY">
        <Record />
      </div>
      <div className="distanceY">
        <Stars />
      </div>
      <div className="distanceY">
        <Interesting />
      </div>
      <div className="distanceY">
        <Footer />
      </div>
    </div>
  );
}

export default App;
