import React, {useState} from "react";


export default function HypoCalc() {
        const [base, setbase] = useState("")
        const [height, setheigh] = useState("")
        const [hypo, setHypo]= useState("")
        const [output, setOutput]=useState("")

        const baseInputhandler =(event)=>{
            var base = Number(event.target.value);
            setbase(base)
        }
        const HeightInputhandler =(event)=>{
            var height = Number(event.target.value);
            setheigh(height)
        }

        const hypocalc=()=>{
           
               var  hypo = Math.sqrt(Math.pow(base,2) + Math.pow(height,2))
               setHypo(hypo.toFixed(2));
               setOutput( `Hypotenuse of this triangle with base ${base} units and height ${height} units is ${hypo.toFixed(2)} units.`)
        }



    return (
        <div>
            <input onChange={baseInputhandler} placeholder="Base"></input>
            <input onChange={HeightInputhandler} placeholder="Height"></input>
            <br></br>
            <br></br>
            <button onClick={hypocalc}>Calculate</button>
            <br></br>
            <br></br>
            {hypo}
            <br></br>
            <br></br>
            <div>{output}</div>
        </div>
    )
}
