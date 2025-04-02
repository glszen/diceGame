import { useState } from 'react'
import './App.css'

import dice1 from "../images/dice1.png";
import dice2 from "../images/dice2.png";
import dice3 from "../images/dice3.png";
import dice4 from "../images/dice4.png";
import dice5 from "../images/dice5.png";
import dice6 from "../images/dice6.png";

function App() {

 var diceImages = [
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6
]

const [image, setNewImage] = useState(diceImages[0])
const [image2, setNewImage2] = useState(diceImages[1])
const [winner, setWinner] = useState("");
const [message, setMessage] = useState("Welcome Dice Game! 🎲");
const [rolling, setRolling] = useState(false);

const rollDice = () => {
  setRolling(true);

  const intervalId = setInterval(() => {
    const randomNum1 = Math.floor(Math.random() * 6); //Generate random number
    const randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }, 100);

  setTimeout(() => {   
    clearInterval(intervalId);
  var randomNum1 = Math.floor(Math.random() * 6); //Generate random number
  var randomNum2 = Math.floor(Math.random() * 6);
  setNewImage(diceImages[randomNum1]);
  setNewImage2(diceImages[randomNum2]);

  console.log(randomNum1);
  console.log(randomNum2);

  if(randomNum1>randomNum2){
    setWinner("Player1 Wins! 🏆")
    setMessage("Player 1 Wins! 🏆 ")
  }else if(randomNum1<randomNum2){
    setWinner("PC Wins! 🏆")
    setMessage("PC Wins! 🏆")
  }else{
    setWinner("It's a Draw! 🤝")
    setMessage("It's a Draw! 🤝")
  }
  setRolling(false);
  }, 2000);
}

  return (
    <div className='App handlee-regular pt-5'>
  <center>
    <h1 className='pt-5 draw'>{message}</h1>
    <div className='container pt-5'>
      <div className='row justify-content-center pt-5'>
      <div className='col-2  text-center ms-5 playerC'>Player 1</div>
      <div className='col-3 ps-3 playerC'>Player 2</div>
      </div>  
      <img className='square' src={image}/>
      <div style={{width:'5px', display:'inline-block'}}></div>
      <img className='square' src={image2}/>
    </div>
    
    <div>
    <button style={{backgroundColor:'#00CB96', borderColor:'#00CB96', height: '6vh'}} type="button" onClick={rollDice} class="btn btn-light w-25"><i class="bi bi-shuffle" style={{color:'white'}}></i></button>
    </div>

    <div className='pt-5'>
      www🎲 Dicee Game 🎲com
    </div>
   
  </center>
  </div>
  )
}

export default App
