const grid = document.querySelector("#grid");
const randomColors = ["gold", "silver", "bronze", "red", "purple", "orange"];
const randomPicker =
  randomColors[Math.floor(Math.random() * randomColors.length)];
// make one grid square
// const square = document.createElement('div');
// square.setAttribute("style", "height: 30px; width: 30px; background-color: black;");
// grid.appendChild(square);

// make 16 squares in a row
// i wrote this code myself, ai auto ended but this is all me!
// for (let i = 0; i < 16; i++) {
//   const square = document.createElement('div');
//   square.setAttribute("style", "height: 29px; width: 29px; background-color: black; border: 1px solid red;");
//   // place square in a row container
//   const row = document.createElement('div');
//   row.setAttribute("style", "display: flex; flex-direction: row;");
//   row.appendChild(square);
//   grid.appendChild(row);
// }

// make 16 rows of 16 squares
const squareSize = 960 / 16;
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("style", "display: flex; flex-direction: row;");
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.setAttribute(
      "style",
      `height: ${squareSize}px; width: ${squareSize}px; background-color: black; border: 1px solid red;`
    );
    // on hover change square bg color
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = randomPicker;
    });
    row.appendChild(square);
  }
  grid.appendChild(row);
}

// create a reset button
const resizeButton = document.createElement("button");
resizeButton.textContent = "Resize";
resizeButton.setAttribute(
  "style",
  "height: 2.7rem; width: 6rem; font-size: 2rem; background-color: gold; color: white; border-radius: 50%; margin-left: 0.5rem; border: none; padding: 3px;"
);
resizeButton.addEventListener("click", function () {
  // remove all squares from the grid
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  // ask user for new grid size
  const newSize = prompt("Enter a new grid size (between 1 and 100):");
  // if user enters a valid number, create new grid
  if (newSize && !isNaN(newSize) && newSize >= 1 && newSize <= 100) {
    const newGridSize = parseInt(newSize);
    const newSquareSize = 960 / newGridSize;
    for (let i = 0; i < newGridSize; i++) {
      const row = document.createElement("div");
      row.setAttribute("style", "display: flex; flex-direction: row;");
      for (let j = 0; j < newGridSize; j++) {
        const square = document.createElement("div");
        square.setAttribute(
          "style",
          `height: ${newSquareSize}px; width: ${newSquareSize}px; background-color: black; border: 1px solid red;`
        );
        // on hover change square bg color
        square.addEventListener("mouseover", function () {
          square.style.backgroundColor = randomPicker;
        });
        row.appendChild(square);
      }
      grid.appendChild(row);
    }
  }
});
grid.insertAdjacentElement("afterend", resizeButton);
