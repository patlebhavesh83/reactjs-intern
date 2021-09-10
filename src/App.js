import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Rates from "./Rates";
import  Image  from "./Image";
import Table from "./Table"
import Image1  from "./Image1";
import  "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Rates/>
      <Image/>
      <Table/>
      <Image1/>
      <Footer/>
      
   
    </div>
  );
};

export default App;