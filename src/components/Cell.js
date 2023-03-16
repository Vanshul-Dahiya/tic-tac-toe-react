const Cell = ({ id, cell, setCells, go, setGo, cells, winningMsg }) => {
  const handleClick = (e) => {
    // check square's class
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        // add to square
        e.target.firstChild.classList.add("circle");
        // add to array
        handleCellChange("circle");
        // change turn
        setGo("cross");
      }
      if (go === "cross") {
        // add to square
        e.target.firstChild.classList.add("cross");
        // add to array
        handleCellChange("cross");
        // change turn
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className) => {
    // we are getting array , if index matches whatever id we are in
    // we are gonna replace cell (currently empty string) with className(cross or circle)
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };
  return (
    // if winningMsg doesn't exists , play ..else stop
    <div className="square" id={id} onClick={!winningMsg && handleClick}>
      <div className={cell}></div>
    </div>
  );
};
export default Cell;
