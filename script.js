// 16x16 gird of square divs

const master_div = document.createElement("div");
master_div.style.borderColor = "red";
master_div.style.borderStyle = "solid";
master_div.style.display = "grid";

const columns = 'auto '.repeat(16);
master_div.style.gridTemplateColumns = columns;

document.body.append(master_div);

function new_row (rows, container) {
    for (i = 0; i < rows; i++) {
        let new_div = document.createElement('div');
        new_div.textContent = 'x';
        new_div.setAttribute("class", "grid-div")
        
        new_div.style.borderStyle = "solid";
        new_div.style.display = "inline-block";
        new_div.style.overflow = "auto";
        new_div.style.cssFloat = "left";
        
        container.appendChild(new_div);   
    }
}

function createGrid (numRows, numCols) {
    for (j = 0; j < numRows; j++) {
        new_row (numCols, master_div)
    }
}

createGrid(16, 16)

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
// leaving a (pixelated) trail through your grid like a pen would.

const grids = document.querySelectorAll('.grid-div')
const grids_list = Array.from(grids)

function changeBackground (element, color) {
    element.addEventListener("mouseover", (e) => {
        element.style.backgroundColor = color
    })
}

// Choose Color - Default to black
let colorChoice = prompt("Choose your color: ");
if (colorChoice == null || colorChoice == '') {
    console.log(`NULL FOUND - Defaulting color to: black`)
    colorChoice = 'black'}
else {console.log(`Color is: ${colorChoice}`)};

grids_list.forEach((grid) => {
    changeBackground(grid, colorChoice)
})

// Change Grid Size
resizeBtn = document.querySelector("#gridSize");

// init prompt, get height and width --> init createGrid function
function resizeGrid (){
    console.log("ENTERING RESIZE FUNCTION")

    let rows = prompt("Please enter number of rows: ");
    let columns = prompt("Please enter the number of columns: ");

    console.log("rows n cols...")
    // console.log(grids_list)

    let grids = document.querySelectorAll('.grid-div')
    let grids_list = Array.from(grids)

    // clear divs with 
    grids_list.forEach((grid) => {
        // master_div.parentNode.removeChild(grid)
        grid.parentNode.removeChild(grid)
    });

    console.log("CreateGrid function...")
    createGrid(rows, columns);

    // Choose Color - Default to black
    let colorChoice = prompt("Choose your color: ");
    if (colorChoice == null || colorChoice == '') {
        console.log(`NULL FOUND - Defaulting color to: black`)
        colorChoice = 'black'
    }
    else {console.log(`Color is: ${colorChoice}`)};

    grids = document.querySelectorAll('.grid-div')
    grids_list = Array.from(grids)
    grids_list.forEach((grid) => {
        changeBackground(grid, colorChoice)
    });
};

resizeBtn.addEventListener("click", resizeGrid);

// const grids = document.querySelectorAll('.grid-div')
// const grids_list = Array.from(grids)

// Clear Screen
clrBtn = document.querySelector('#clear')
clrBtn.addEventListener("click", (e) => {
    Array.from(document.querySelectorAll('.grid-div')).forEach((grid) => {
        grid.style.backgroundColor = ''
    })
});
