import React, {useState} from "react";

export default function CalcArea() {
        const [base, setbase] = useState("")
        const [height, setheigh] = useState("")
        const [area, setArea]= useState("")
        const [output, setOutput]=useState("")

        const baseInputhandler =(event)=>{
            var base = Number(event.target.value);
            setbase(base)
        }
        const HeightInputhandler =(event)=>{
            var height = Number(event.target.value);
            setheigh(height)
        }

        const areacalc=()=>{
           
               var area = (0.5*base*height).toFixed(2)
               setArea(area)
               setOutput( `Hypotenuse of this triangle with base ${base} units and height ${height} units is ${area} units.`)
        }



    return (
        <div>
            <input onChange={baseInputhandler} placeholder="Base"></input>
            <input onChange={HeightInputhandler} placeholder="Height"></input>
            <br></br>
            <br></br>
            <button onClick={areacalc}>Calculate</button>
            <br></br>
            <br></br>
            {area}
            <br></br>
            <br></br>
            <div>{output}</div>
        </div>
    )
}