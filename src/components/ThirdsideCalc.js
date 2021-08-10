import React, {useState} from "react";



export default function ThirdsideCalc() {
const [firstAngle, setFirstAngle] = useState("40");
const [secondAngle, setSecondAngle] = useState("60");
const [thirdAngle, setThirdAngle] = useState("");
const [mes, setMes] = useState("");
const [diff, setdiff]= useState("")

  const angles = [
    [40, 60, 80],
    [60, 60, 60],
    [75, 50, 55],
    [35, 105, 40],
    [80, 25, 75],
    [30, 60, 90],
    [90, 25, 65],
    [30, 100, 50],
    [125, 30, 25],
    [85, 55, 40],
  ];



  const randomAngleGenerator = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(angles.length));
    // console.log(randomIndex)
    setFirstAngle(angles[randomIndex][0]);
    setSecondAngle(angles[randomIndex][1]);
  };
  
 const ThirdAngleCheck=()=>{
    //  randomAngleGenerator()
    var sum=Number(firstAngle)+Number(secondAngle);
    var third= 180 - sum;
    console.log(third)
    console.log(sum)
    var diff = Math.abs(thirdAngle-third)
   if(thirdAngle===""|| thirdAngle==="0"){
        setMes("Enter a valid Angle to get answer")
        setdiff("")
   }else if(third === thirdAngle){
       setMes("Looks like you have found Yourself an Angle")
       setdiff("")
   }else{
       setMes("looks like your Angle does not form a Triangle, Try Again, You missed by")
       setdiff(diff)
   }

 }
const ThirdAngleInputHandler= (event)=>{
  
    var third= Number(event.target.value)
    setThirdAngle(third) 
};

const angleGen=(event)=>{
    
    randomAngleGenerator()
    setThirdAngle("")
    setMes("")
    setdiff("")
    // ThirdAngleCheck()
}

    return (
        <div>
           {/* {randomAngleGenerator} */}
           <p>{firstAngle}</p>
           <p>{secondAngle}</p> 
           
            <input type="number"  onChange={ThirdAngleInputHandler} value={thirdAngle}></input>
           <br/><br/>  <button onClick={ThirdAngleCheck}>Check Third Angle</button>
           <br/><br/>  <button onClick={angleGen} >Play Again</button>
           <p>{mes} {diff}</p>
          
        </div>
    )
}
