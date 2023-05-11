import React, { useState } from "react";

function Guess({ gameResult, submitGuess }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={e => {
        e.preventDefault();
        console.log({ guess });
        submitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      {gameResult === "win" ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      ) : gameResult === "lose" ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      ) : (
        <input
          id="guess-input"
          disabled={gameResult}
          name="guess"
          onChange={e => setGuess(e.target.value.toUpperCase())}
          pattern=".{5,5}"
          type="text"
          value={guess}
        />
      )}
    </form>
  );
}

export default Guess;
