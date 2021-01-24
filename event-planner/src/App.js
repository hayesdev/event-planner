import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";

import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <div className="container">
        <Header />
        <Banner />
        <Content />

        <Footer />
      </div>
    </body>
  );
}

export default App;
