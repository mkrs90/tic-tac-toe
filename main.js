let state = {
    currentPlayer: 'X',
    boardState: ["","","","","","","","",""],
    "playerX": [],
    "playerO": [],
    winningConditions: [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
    ],
    playerXScore: 0,
    playerOScore: 0,
    ties: 0,
}



window.onload = function renderBoard() {

    let doc = document.getElementById("main");
    doc.style.border = "solid 2px";
    doc.style.background;
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
    playerTurn.id = "playerTurn";
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
    colOne.className = "col-4 border border-dark";
    colOne.style = "height: 100px"
    divRow.appendChild(colOne);

    let colOneBtn = document.createElement('button');
    colOneBtn.id = "colOneBtn";
    colOneBtn.innerText = "";
    colOneBtn.type ="button";
    colOneBtn.style = "width: 100%; height: 100%";
    colOneBtn.addEventListener("click", function() {
        onMove("colOneBtn", "0");
    });
    colOne.appendChild(colOneBtn);

    let colTwo = document.createElement('div');
    colTwo.className = "col-4 border border-dark";
    divRow.appendChild(colTwo);

    let colTwoBtn = document.createElement('button');
    colTwoBtn.id = "colTwoBtn";
    colTwoBtn.innerText = "";
    colTwoBtn.type ="button";
    colTwoBtn.style = "width: 100%; height: 100%";
    colTwoBtn.addEventListener("click", function() {
        onMove("colTwoBtn", "1");
    });
    colTwo.appendChild(colTwoBtn);

    let colThree = document.createElement('div');
    colThree.className = "col-4 border border-dark";
    divRow.appendChild(colThree);

    let colThreeBtn = document.createElement('button');
    colThreeBtn.id = "colThreeBtn";
    colThreeBtn.innerText = "";
    colThreeBtn.type ="button";
    colThreeBtn.style = "width: 100%; height: 100%";
    colThreeBtn.addEventListener("click", function() {
        onMove("colThreeBtn", "2");
    });
    colThree.appendChild(colThreeBtn);

    let colFour = document.createElement('div');
    colFour.className = "col-4 border border-dark";
    colFour.style = "height: 100px"
    divRow.appendChild(colFour);

    let colFourBtn = document.createElement('button');
    colFourBtn.id = "colFourBtn";
    colFourBtn.innerText = "";
    colFourBtn.type ="button";
    colFourBtn.style = "width: 100%; height: 100%";
    colFourBtn.addEventListener("click", function() {
        onMove("colFourBtn", "3");
    });
    colFour.appendChild(colFourBtn);

    let colFive = document.createElement('div');
    colFive.className = "col-4 border border-dark";
    divRow.appendChild(colFive);

    let colFiveBtn = document.createElement('button');
    colFiveBtn.id = "colFiveBtn";
    colFiveBtn.innerText = "";
    colFiveBtn.type ="button";
    colFiveBtn.style = "width: 100%; height: 100%";
    colFiveBtn.addEventListener("click", function() {
        onMove("colFiveBtn", "4");
    });
    colFive.appendChild(colFiveBtn);

    let colSix = document.createElement('div');
    colSix.className = "col-4 border border-dark";
    divRow.appendChild(colSix);

    let colSixBtn = document.createElement('button');
    colSixBtn.id = "colSixBtn";
    colSixBtn.innerText = "";
    colSixBtn.type ="button";
    colSixBtn.style = "width: 100%; height: 100%";
    colSixBtn.addEventListener("click", function() {
        onMove("colSixBtn", "5");
    });
    colSix.appendChild(colSixBtn);

    let colSeven = document.createElement('div');
    colSeven.className = "col-4 border border-dark";
    divRow.appendChild(colSeven);

    let colSevenBtn = document.createElement('button');
    colSevenBtn.id = "colSevenBtn";
    colSevenBtn.innerText = "";
    colSevenBtn.type ="button";
    colSevenBtn.style = "width: 100%; height: 100%";
    colSevenBtn.addEventListener("click", function() {
        onMove("colSevenBtn", "6");
    });
    colSeven.appendChild(colSevenBtn);

    let colEight = document.createElement('div');
    colEight.className = "col-4 border border-dark";
    colEight.style = "height: 100px";
    divRow.appendChild(colEight);

    let colEightBtn = document.createElement('button');
    colEightBtn.id = "colEightBtn";
    colEightBtn.innerText = "";
    colEightBtn.type ="button";
    colEightBtn.style = "width: 100%; height: 100%";
    colEightBtn.addEventListener("click", function() {
        onMove("colEightBtn", "7");
    });
    colEight.appendChild(colEightBtn);

    let colNine = document.createElement('div');
    colNine.className = "col-4 border border-dark";
    divRow.appendChild(colNine);

    let colNineBtn = document.createElement('button');
    colNineBtn.id = "colNineBtn";
    colNineBtn.innerText = "";
    colNineBtn.type ="button";
    colNineBtn.style = "width: 100%; height: 100%";
    colNineBtn.addEventListener("click", function() {
        onMove("colNineBtn", "8");
    });
    colNine.appendChild(colNineBtn);

    let btnDiv = document.createElement('div');
    btnDiv.className = "text-center m-5";
    main.appendChild(btnDiv);

    let resetBtn = document.createElement('button');
    resetBtn.innerText = "Reset Game";
    resetBtn.className = "btn btn-primary";
    resetBtn.addEventListener("click", function() {
        resetTheBoard();
    });
    btnDiv.appendChild(resetBtn);

}


//Does what it says - switches player symbol/turn
function switchPlayer() {
    if (state.currentPlayer === 'X') {
        state.currentPlayer = "O";
        document.getElementById('playerTurn').innerText = "Player O's Turn";
    } else {
        state.currentPlayer = 'X';
        document.getElementById('playerTurn').innerText = "Player X's Turn";
    }
    return state.currentPlayer;
}



function onMove(ele, num) {
    console.log(ele)
    document.getElementById(ele).innerText = `${state.currentPlayer}`;
    if (state.currentPlayer === 'X') {
        state.playerX.push(num);
    } else {
        state.playerO.push(num);
    }

    if (checkWin(state.playerX) === true) {
        document.getElementById('playerTurn').innerText = "Player X Won!";
        disableAllBtns();
    } else if (checkWin(state.playerO) === true) {
        document.getElementById('playerTurn').innerText = "Player O Won!";
        disableAllBtns();
    } else if (state.playerX.length === 5) {
        document.getElementById('playerTurn').innerText = "TIE!";
    } else {
        switchPlayer(state.currentPlayer);  
    }
    document.getElementById(ele).disabled = true;
}


function checkWin(player) {
   return state.winningConditions.some(el => el.every(n => player.includes(n)))
}

function disableAllBtns() {
    document.getElementById('colOneBtn').disabled = true;
    document.getElementById('colTwoBtn').disabled = true;
    document.getElementById('colThreeBtn').disabled = true;
    document.getElementById('colFourBtn').disabled = true;
    document.getElementById('colFiveBtn').disabled = true;
    document.getElementById('colSixBtn').disabled = true;
    document.getElementById('colSevenBtn').disabled = true;
    document.getElementById('colEightBtn').disabled = true;
    document.getElementById('colNineBtn').disabled = true;
}

function resetTheBoard() {
    console.log("clicked Reset");
    state.currentPlayer = 'X';
    state.playerO = [];
    state.playerX = [];


    document.getElementById('playerTurn').innerText = "Player X's Turn";
    document.getElementById('colOneBtn').innerText = "";
    document.getElementById('colTwoBtn').innerText = "";
    document.getElementById('colThreeBtn').innerText = "";
    document.getElementById('colFourBtn').innerText = "";
    document.getElementById('colFiveBtn').innerText = "";
    document.getElementById('colSixBtn').innerText = "";
    document.getElementById('colSevenBtn').innerText = "";
    document.getElementById('colEightBtn').innerText = "";
    document.getElementById('colNineBtn').innerText = "";
    document.getElementById('colOneBtn').disabled = false;
    document.getElementById('colTwoBtn').disabled = false;
    document.getElementById('colThreeBtn').disabled = false;
    document.getElementById('colFourBtn').disabled = false;
    document.getElementById('colFiveBtn').disabled = false;
    document.getElementById('colSixBtn').disabled = false;
    document.getElementById('colSevenBtn').disabled = false;
    document.getElementById('colEightBtn').disabled = false;
    document.getElementById('colNineBtn').disabled = false;
}



// function checkWinCondition(arr) {
//     if (state.winningConditions[0].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[1].every(e => arr.includes(e))){
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[2].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[3].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[4].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[5].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[6].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[7].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     } else if (state.winningConditions[8].every(e => arr.includes(e))) {
//         document.getElementById("playerTurn").innerText = `Player ${state.currentPlayer} won!`;
//         document.getElementsByTagName('button').disabled = true;
//     };
// }
    
    // {
    //     console.log(state.currentPlayer);
    // }

    // let winningLength = state.winningConditions.length;
    // for (let i = 0; i < winningLength; i++) {
    //     if (winningLength[i].every(element => arr.includes(element))) {
    //         
    //     } 





