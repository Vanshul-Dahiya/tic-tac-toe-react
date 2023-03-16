import Cell from "./components/Cell";
import { useState, useEffect } from "react";
const App = () => {
  // 9 empty strings to represent 9 empty cells/squares
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMsg, setWinningMsg] = useState(null);

  const msg = "It is now  " + go + " 's turn ";

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMsg("Circle Wins!");
        return;
      }
    });
    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMsg("Cross Wins!");
        return;
      }
    });
  };

  useEffect(() => {
    // check winning condition every time cell array changes
    checkScore();
  }, [cells]);

  return (
    <div className="App">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMsg={winningMsg}
          />
        ))}
      </div>
      {/* if winningMsg exists show it else show msg */}
      <p> {winningMsg || msg} </p>
    </div>
  );
};

export default App;
