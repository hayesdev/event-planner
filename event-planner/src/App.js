import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <div className="container">
        <Header />
        <Banner />
        <Content>
          <Slider />
        </Content>

        <Footer />
      </div>
    </body>
  );
}

export default App;
