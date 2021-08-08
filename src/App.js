import "./styles.css";
import React, {useState} from "react";
import Base from "./components/base";
import TriangleCalcHandler from "./components/TriangleSideCalc"
import ThirdsideCalc from "./components/ThirdsideCalc"; 
import SideQuiz from "./components/SideQuiz"; 
import Anglequiz from "./components/AngleQuiz"
import HypoCalc from "./components/HypoCalc";


export default function App() {

  


  // console.log(angleOne)
  return (
    <div className="App">

      
      {/* <TriangleCalcHandler/>
     <ThirdsideCalc/>
    <SideQuiz/>
    <Anglequiz/> */}
    <HypoCalc/>
    </div>
  );
  }
