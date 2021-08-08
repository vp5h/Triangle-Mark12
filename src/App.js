import "./styles.css";
import React, {useState} from "react";
import Base from "./components/base";
import TriangleCalcHandler from "./components/TriangleSideCalc"
import ThirdsideCalc from "./components/ThirdsideCalc"; 
import SideQuiz from "./components/SideQuiz"; 
import Anglequiz from "./components/AngleQuiz"
import HypoCalc from "./components/HypoCalc";
import CalcArea from "./components/CalcArea";


export default function App() {
  const [display, SetDisplay]= useState("Angle")

  const displayAdiv=()=>{
      if (display==="Angle"){
        return <TriangleCalcHandler/>
      }else if(display === "Third" ){
        return <ThirdsideCalc/>
      }else if(display === "area"){
        return <CalcArea/>
      }else if(display === "sideq"){
        return <SideQuiz/>
      }else if(display === "angleq"){
        return <Anglequiz/>
      }else if(display === "Hypo"){
        return <HypoCalc/>
      }
      
  }

  const AngleDispHandler=()=>{
      SetDisplay("Angle")
  }
  const ThirdDispHandler=()=>{
      SetDisplay("Third")
  }
  const HypoDispHandler=()=>{
      SetDisplay("Hypo")
  }
  const AreaDispHandler=()=>{
      SetDisplay("area")
  }
  
  const SideDispHandler=()=>{
      SetDisplay("sideq")
  }
  const AngleQDispHandler=()=>{
      SetDisplay("angleq")
  }

  // console.log(angleOne)
  return (
    <div className="App">

      <h2> Fun Time with Triangles</h2>
      
       <button onClick={AngleDispHandler}>Angle</button>
       <button onClick={ThirdDispHandler}>Third Angle</button>
       <button onClick={HypoDispHandler}>Hypotenuse </button>
       <button onClick={AreaDispHandler}>Area</button>
       <button onClick={SideDispHandler}>Side Quiz</button>
       <button onClick={AngleQDispHandler}>Angle Quiz</button>
      <br></br>
      <br></br>
      {displayAdiv()}
      
    </div>
  );
  }
