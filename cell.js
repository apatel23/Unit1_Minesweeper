function beginGame() {
    alert("Start the game!");
    document.getElementById("end_button").disabled = false;
    document.getElementById("start_button").disabled = true;
}

function endGame() {
    alert("End the game");   
    document.getElementById("end_button").disabled = true;
    document.getElementById("start_button").disabled = false;
}


var board_cell = {
    cell_status : 0,
    cell_visible : "true"
};

var x, y = 10;

function createCells() {
    var cells = new Array(x);
    for (var i = 0; i < x; i++) {
        cells[i] = new Array(y);   
    }
}


function drawBoard() {
    
}



    
