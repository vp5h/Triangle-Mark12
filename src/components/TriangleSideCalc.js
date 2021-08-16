import React, {useState} from "react";

function TriangleCalcHandler(){

    const [angleOne, SetAngleOne]= useState("")
    const [angleTwo, SetAngleTwo]= useState("")
    const [angleThree, SetAngleThree]= useState("") 
    const [sum, SetSum]= useState("180") 
    const [mes, Setmes]= useState("")
    const [diff, setDiff] = useState("")
      const angleOneHandler = (event)=>{
        var  angleOne = Number(event.target.value)
        SetAngleOne(angleOne)
        console.log(angleOne)
      }
      const angleTwoHandler = (event)=>{
        var  angleTwo = Number(event.target.value)
        SetAngleTwo(angleTwo)
        console.log(angleTwo)
      }
      const angleThreeHandler = (event)=>{
         var angleThree = Number(event.target.value)
        SetAngleThree(angleThree)
        
        console.log(angleThree)
      }
    
      function AngleCalcHandler(){
        if((angleOne>0 || angleTwo>0 || angleThree>0)|| (angleOne<179 && angleTwo<179 && angleThree<179)){
       var sum = angleOne + angleTwo + angleThree;
       console.log(sum)
        SetSum(sum)
        var diff= 180 - Number(sum);
        console.log(diff)
        if(sum>180){
          Setmes("Given Angles do not form a Trinagle, You have gone long by ")
          setDiff(Math.abs(diff))
        }else if(sum===180){
          Setmes("Looks like You Found a Perfect Triangle ")
          setDiff("")
          
        }else if(sum<0){
          Setmes("Make sure you have a Positive Sum")
          setDiff("")
          
        }else{
           Setmes("Given Angles do not form a Triangle, You feel short by ")
           setDiff(diff)
        }
      }else{
        Setmes("Make Sure You Enter Positive angles and They are Below 178 to Form a Triangle")
        
        setDiff("")
      }
      }
      return(
        <div className="TriangleSidesChecker">
          <h2>Enter The Angles and Check Them</h2>
        <input type="number" onChange={angleOneHandler} placeholder="Angle One"></input>
        <input type="number" onChange={angleTwoHandler} placeholder="Angle Two"></input>
        <input type="number" onChange={angleThreeHandler} placeholder="Angle Three"></input>
        <br></br><button onClick={AngleCalcHandler}>Check Your angles </button>
        {/* <br></br> {angleOne}<br></br>{angleTwo}<br></br>{angleThree} */}
        <br></br><br></br> <br/> {mes} {diff}
    
    </div>
    
      );}
      
      export default TriangleCalcHandler