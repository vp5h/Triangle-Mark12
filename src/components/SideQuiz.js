import React ,{useState} from 'react'

export default function SideQuiz() {
    const [firstSide, setFirstSide] = useState("4");
    const [secondSide, setSecondSide] = useState("6");
    const [thirdSide, setThirdSide] = useState("8");
    const [output, setOutput] = useState("");
    const [radioInput, setRadioInput] = useState("");


    const sides = [
        [4, 6, 8],
        [3, 3, 3],
        [7, 5, 5],
        [6, 6, 6],
        [8, 8, 2],
        [3, 6, 7],
        [5, 4, 4],
        [3, 10, 5],
        [5, 3, 5],
        [8, 8, 8],
      ];

      const randomSideGenerator = () => {
        let randomIndex = Math.floor(Math.random() * Math.floor(sides.length));
        setFirstSide(sides[randomIndex][0]);
        setSecondSide(sides[randomIndex][1]);
        setThirdSide(sides[randomIndex][2]);
      };

      const radioInputHandler = (e) => {
        setRadioInput(e.target.value);
      };

      const playAgainBtnHandler=()=>{
        randomSideGenerator()
        setOutput("");
        setRadioInput("");
      }

      const checkBtnHandler = (e) => {
        e.preventDefault();
       
        if (  Number(firstSide) === Number(secondSide) &&  Number(secondSide) === Number(thirdSide) && radioInput === "equilateral") {
          setOutput("Congrats! Your answer is correct.");
        } else if ((Number(firstSide) === Number(secondSide) || Number(secondSide) === Number(thirdSide) || Number(firstSide) === Number(thirdSide)) && radioInput === "isosceles") {
          setOutput("Congrats! Your answer is correct.");
        } else if ( Number(firstSide) !== Number(secondSide) && Number(secondSide) !== Number(thirdSide) && Number(firstSide) !== Number(thirdSide) && radioInput === "scalene") {
          setOutput("Congrats! Your answer is correct.");
        } else {
          setOutput("Oops! Your answer is incorrect, play again.");
        }
      };
    

    return (
        <div>
            <p style={{ textAlign: "center" }}>
        Choose the type of triangle based on given sides.
      </p>
      {randomSideGenerator}
      <div >
        <span>{firstSide} Units</span>
        
        <span>{secondSide} Units</span>
        
        <span>{thirdSide} Units</span>
      </div>

      <form onSubmit={checkBtnHandler}>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "equilateral"}
              value="equilateral"
              type="radio"
              required
            />
            Equilateral
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "isosceles"}
              value="isosceles"
              type="radio"
              required
            />
            Isosceles
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "scalene"}
              value="scalene"
              type="radio"
              required
            />
           Scalene
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
