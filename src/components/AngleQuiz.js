import React ,{useState} from 'react'

export default function AngleQuiz() {
    const [firstAngle, setFirstAngle] = useState("50");
    const [secondAngle, setSecondAngle] = useState("40");
    const [thirdAngle, setThirdAngle] = useState("90");
    const [output, setOutput] = useState("");
    const [radioInput, setRadioInput] = useState("");


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
        setFirstAngle(angles[randomIndex][0]);
        setSecondAngle(angles[randomIndex][1]);
        setThirdAngle(angles[randomIndex][2]);
      };

      const radioInputHandler = (e) => {
        setRadioInput(e.target.value);
      };

      const playAgainBtnHandler=()=>{
        randomAngleGenerator()
        setOutput("");
        setRadioInput("");
      }

      const checkBtnHandler = (e) => {
        e.preventDefault();
       
        if ( Number(firstAngle) < 90 && Number(secondAngle) < 90 && Number(thirdAngle) < 90 && radioInput === "acute") {
          setOutput("Congrats! Your answer is correct.");
        } else if ((Number(firstAngle) === 90 ||Number(secondAngle) === 90 ||Number(thirdAngle) === 90) &&radioInput === "right") {
          setOutput("Congrats! Your answer is correct.");
        } else if ((Number(firstAngle) > 90 ||Number(secondAngle) > 90 ||Number(thirdAngle) > 90) &&radioInput === "obtuse") {
          setOutput("Congrats! Your answer is correct.");
        } else {
          setOutput("Oops! Your answer is incorrect, play again.");
        }
      };
    

    return (
        <div>
            <p style={{ textAlign: "center" }}>
        Choose the type of triangle based on given angles.
      </p>
      {randomAngleGenerator}
      <div >
        <span>{firstAngle}°</span>
        
        <span>{secondAngle}°</span>
        
        <span>{thirdAngle}°</span>
      </div>

      <form onSubmit={checkBtnHandler}>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "acute"}
              value="acute"
              type="radio"
              required
            />
            Acute
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "right"}
              value="right"
              type="radio"
              required
            />
            Right
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "obtuse"}
              value="obtuse"
              type="radio"
              required
            />
            Obtuse
          </label>
          <br></br>
          <br></br>
          <button  type="submit">
            Check Answer
          </button>
        </form>
        <br></br>
        <div >
        <button 
         onClick={playAgainBtnHandler}
         >
          Play Again
        </button>

       <h2>{output}</h2> 
      </div>


        </div>
    )
}
