import React from "react";
import Header from "./Header";
import CoffeeBeanControl from "./CoffeeBeanControl";
import coffeebag from "../components/coffeebag.jpg";


function App() {
  return (
    <React.Fragment>
    <Header />
      <img src={coffeebag} alt="coffeebag"/>
{/* 
    <img src={MyImage} alt="coffeebag" /> */}
     <br></br>
     <CoffeeBeanControl />    
     <br></br>
     </React.Fragment>
  )
}

export default App;
