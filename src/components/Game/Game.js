import React, { useState } from "react";

import Guesses from "../Guesses/Guesses";
import Guess from "../Guess/Guess";

import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState("");

  function submitGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    setGuesses(prevGuesses => [...prevGuesses, checkedGuess]);

    if (checkedGuess.every(letter => letter.status === "correct")) {
      setGameResult("win");
    } else if (guesses.length >= 5) {
      setGameResult("lose");
    }
  }

  return (
    <div>
      <Guesses answer={answer} guesses={guesses} />
      <Guess gameResult={gameResult} submitGuess={submitGuess} />
    </div>
  );
}

export default Game;
