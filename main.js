let state = {
    currentPlayer: 'X',
    PlayerXArray: [],
    PlayerOArray: [],
    winningConditions: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    playerXScore: 0,
    playerOScore: 0,
    ties: 0
}

window.onload = function renderBoard() {

    let doc = document.getElementById("main");
    doc.style.border = "solid 2px";
    doc.style.background = "yellow";
    doc.className = "m-5";
  
    //Parent div for the title
    let titleDiv = document.createElement('div');
    titleDiv.className = 'display-1 m-5 text-center'
    main.appendChild(titleDiv);
  
    //creation of the App Title
    let titleTag = document.createElement('h1');
    titleTag.innerText = "Tic-Tac-Toe";
    titleTag.className = "display-1";
    titleDiv.appendChild(titleTag);

    let playerTurn = document.createElement('h3');
    playerTurn.innerText = "Player X's Turn";
    playerTurn.className = "display-6";
    titleDiv.appendChild(playerTurn);

    //Creating Board Layout
    let divContainer = document.createElement("div");
    divContainer.className = "container";
    main.appendChild(divContainer);

    let divRow = document.createElement('div');
    divRow.className = "row text-center";
    divContainer.appendChild(divRow);

    let colOne = document.createElement('div');
    colOne.innerText = "X";
    colOne.className = "col-4 border border-dark";
    colOne.style = "height: 100px"
    divRow.appendChild(colOne);

    let colTwo = document.createElement('div');
    colTwo.innerText = "";
    colTwo.className = "col-4 border border-dark";
    divRow.appendChild(colTwo);

    let colThree = document.createElement('div');
    colThree.innerText = "X";
    colThree.className = "col-4 border border-dark";
    divRow.appendChild(colThree);

    let colFour = document.createElement('div');
    colFour.innerText = "";
    colFour.className = "col-4 border border-dark";
    colFour.style = "height: 100px"
    divRow.appendChild(colFour);

    let colFive = document.createElement('div');
    colFive.innerText = "X";
    colFive.className = "col-4 border border-dark";
    divRow.appendChild(colFive);

    let colSix = document.createElement('div');
    colSix.innerText = "";
    colSix.className = "col-4 border border-dark";
    divRow.appendChild(colSix);

    let colSeven = document.createElement('div');
    colSeven.innerText = "";
    colSeven.className = "col-4 border border-dark";
    divRow.appendChild(colSeven);

    let colEight = document.createElement('div');
    colEight.innerText = "X";
    colEight.className = "col-4 border border-dark";
    colEight.style = "height: 100px";
    divRow.appendChild(colEight);

    let colNine = document.createElement('div');
    // colNine.innerText = "";
    colNine.className = "col-4 border border-dark";
    divRow.appendChild(colNine);

    let colNineBtn = document.createElement('button');
    colNineBtn.innerText = "X";
    colNineBtn.type ="button";
    colNineBtn.style = "width: 100%; height: 100%";
    colNineBtn.addEventListener("click", function() {
        onMove("9");
    });
    colNine.appendChild(colNineBtn);

    let btnDiv = document.createElement('div');
    btnDiv.className = "text-center m-5";
    main.appendChild(btnDiv);

    let resetBtn = document.createElement('button');
    resetBtn.innerText = "Reset Game";
    resetBtn.className = "btn btn-primary";
    btnDiv.appendChild(resetBtn);

}


//Does what it says - switches player symbol/turn
function switchPlayer() {
    if (state.currentPlayer === 'X') {
        state.currentPlayer = "O";
    } else {
        state.currentPlayer = 'X';
    }
    return state.currentPlayer;
}

function onMove(ele) {
    alert(`div ${ele} as been clicked`);
}