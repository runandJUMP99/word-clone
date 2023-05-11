import React from "react";

import SubmittedGuess from "../SubmittedGuess/SubmittedGuess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(index => (
        <p key={index} className="guess">
          <SubmittedGuess answer={answer} guess={guesses[index]} />
        </p>
      ))}
    </div>
  );
}

export default Guesses;
