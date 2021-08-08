import "./styles.css";
import React, {useState} from "react";
import Base from "./components/base";
import TriangleCalcHandler from "./components/TriangleSideCalc"
import ThirdsideCalc from "./components/ThirdsideCalc";
// var show = "block";

export default function App() {

  


  // console.log(angleOne)
  return (
    <div className="App">

      {/* <base> </base> */}
      <TriangleCalcHandler/>
     <ThirdsideCalc/>
    </div>
  );
  }
