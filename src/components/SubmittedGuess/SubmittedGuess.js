import React from "react";

import { range } from "../../utils";

function SubmittedGuess({ guess }) {
  return range(5).map(index => (
    <span key={index} className={`cell ${guess ? guess[index].status : ""}`}>
      {guess ? guess[index].letter : ""}
    </span>
  ));
}

export default SubmittedGuess;
