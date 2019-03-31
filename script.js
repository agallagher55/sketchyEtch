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
        new_div.textContent = i + 1 + ") Now this is a div, bitch";
        
        new_div.style.borderStyle = "solid";
        new_div.style.display = "inline-block";
        new_div.style.overflow = "auto";
        new_div.style.cssFloat = "left";
        
        container.appendChild(new_div);   
    }
}

for (j = 0; j < 16; j++) {
    new_row (16, master_div)
}

