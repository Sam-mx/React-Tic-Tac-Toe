import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./components/Button";

function App() {

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setTurn("x");
    setWinner(null);
};
  return (
    <div className="tic-tac-toe">
      <h1> TIC-TAC-TOE </h1>
      <Button resetGame={resetGame} />
    </div>
  );
}

export default App;
