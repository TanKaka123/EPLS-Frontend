import React from "react";
import "./App.scss";
import Header from "./Component/Header/header";
import Banner from "./Component/Banner/banner";
import Ranking from "./Component/Ranking/ranking";
import Managers from "./Component/Managers/managers";
import Stars from "./Component/Stars/stars";
import Interesting from "./Component/Interesting/interesting";
import Footer from "./Component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="distanceY">
        <Ranking />
      </div>
      <div className="distanceY">
        <Managers />
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
