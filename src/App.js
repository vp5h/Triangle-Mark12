import "./styles.css";
import React, {useState} from "react";
import Base from "./components/base";
import TriangleCalcHandler from "./components/TriangleSideCalc"
import ThirdsideCalc from "./components/ThirdsideCalc"; 
import SideQuiz from "./components/SideQuiz"; 
import Anglequiz from "./components/AngleQuiz"
import HypoCalc from "./components/HypoCalc";
import CalcArea from "./components/CalcArea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'




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

      <h1> Fun Time with Triangles</h1>
      <div>
       <button onClick={AngleDispHandler}>Angle</button>
       <button onClick={ThirdDispHandler}>Third</button>
       <button onClick={HypoDispHandler}>Hypotenuse</button>
       </div>
       <button onClick={AreaDispHandler}>Area Calc</button>
       <button onClick={SideDispHandler}>Side Quiz</button>
       <button onClick={AngleQDispHandler}>Angle Quiz</button>
      <br></br>
      <br></br>
      <div className="div-display">
      {displayAdiv()}
      </div>
    
    <FontAwesomeIcon icon={["fab", "github"]} />
    
<footer className="footer">



<div className="footer-header">Socials</div>
<ul className="social-links list-non-bullet">
    <li className="list-item-inline">
        <a className="link" href="https://github.com/vp5h">
        <FontAwesomeIcon icon={faGithub} />
        </a>
    </li>
    <li className="list-item-inline">
        <a className="link" href="https://twitter.com/v_p5h">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
    </li>
    <li className="list-item-inline">
        <a className="link" href="https://www.linkedin.com/in/vp5h/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </li>
    
</ul>
</footer>
</div>
  );
  }
