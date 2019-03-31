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

// Choose Color
colorChoice = prompt("Choose your color");
grids_list.forEach((grid) => {
    changeBackground(grid, colorChoice)
})

// Clear Screen
clrBtn = document.querySelector('#clear')
clrBtn.addEventListener("click", (e) => {
    grids_list.forEach((grid) => {
        grid.style.backgroundColor = ''
    })
});