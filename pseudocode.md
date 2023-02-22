# Objective/Requirements:
- The game should let the players know who's turn it is.
    - Player X or player O
- Remove EventListeners
   - Game tiles should only be clickable once
   - if the game is over they should not be clickable at all.
- The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
- There should be a Restart Game button that does not refresh the page (set state).
- On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
- The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
- Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file)

# Setting Variable and State
    Let STATE = { 
        currentPlayer: either X or O
        Player1Array = [8, 7] -contains the list of indexes their icon is in
        Player2Array = [6, ] -contains the list of indexes their icon is in
        winConditions: an array of arrays that we compare to the player arrays
            [[0,1,2]
            [3,4,5]
            [6,7,8]
            [0,3,6]
            [1,4,7]
            [2,5,8]
            [0,4,8]
            [2,4,6]],


        //Extra for stretch goals
        Player1Score: 0
        Player2Score: 0
        Ties: 0
    }

# Functions

    **init()** - render the page

    **checkWin()** - .every
        Master array = playerArray

        subArray = winConditions

        subArray.every(element => master.includes(element)); return true or false

        If it returns true - YOU WIN

        False - continue playing


    **switchPlayer()**
        If currentPlayer == ‘X’
            currentPlayer = ‘O’
        Else
            currentPlayer = ‘X’

    **onClick(param = which box is clicked)** - happens when you click
       Adds the current player to the tile clicked
        checkWin()
            If win do endGame()
            else
                Switches the currentPlayer in state
                Removes the eventListener

    endGame()
        Display the winner of the game
        Remove all event listeners

    resetGame()
        Drawboard
        Resets state to initial values

# HTML/CSS Setup:

### Atoms
- Tiles
    - Using bootstrap on a div to make it .col-4

### Organisms
- Tiles - click events
- Board as whole
- Button for restart

#### HTML Layout
    Title 
    subheader - whose turn is it. Win/Lose/Tie Banner
    Div.container
        Div.row
            Div.col-4 with onclick function
            Div.col-4 with onclick function
            Div.col-4 with onclick function

            Div.col-4 with onclick function
            Div.col-4 with onclick function
            Div.col-4 with onclick function

            Div.col-4 with onclick function
            Div.col-4 with onclick function
            Div.col-4 with onclick function
    Restart Button

**This must be done in JS, only one line of HTML can be written**

use document.createElement(div) to create the div
give className to set bootstrap
addEventListener("click", function) to give them on click functionality

once clicked you will need to removeEventListener("click", function) this will be used in the og click function

to set the icon to the div use document.getElementById(idName).innerHTML = "X" or "O"

# Questions to Ask Yourself

Q: How do we only allow one button click per tile? 
A: removeEventListener() at the end of the button click
     element.removeEventListener(event, listener, useCapture);
Link to source: https://www.tutorialspoint.com/how-to-remove-event-handlers-in-javascript#:~:text=The%20JavaScript%20built%2Din%20function,is%20disabled%20after%20one%20click.

Q: How do you check winning state?
A: use the .every method on the array. First you set up the "master array" which will be the player array stored in state. Then you will have the "subArrays" that will be the smaller winning criteria arrays that you will then check against the master array. If all the elements in the sub array are in the master array the outcome will equal true. If true Player wins if false game continues. 
Link to source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

Q: How do we know we’ve clicked the right tile?
A: The user will know because their icon will appear in that tile. The code will know because each eventlistener will be set up with the function and a parameter already inside to log which tile was clicked. This will be stored in the player array in state

Q: What does my function flow look like?
A: State -> onMove -> checkWin -> switchPlayer -> endGame -> restartGame

Q: How do I track where icons are on the board?
A: eventListeners will store params that update state

Q: What happens once I click a tile?
A:  Update the div, Update player array in state, Remove the onclick listener, Check against winning criteria, switch Player

# Procedures

    INIT
        Draw the board
        For each tile drawn, add a click listener to it
        First player is X

    Player clicks tile
    Onclick: 
        - Update the div
        - Update player array in state
        - Remove the onclick listener
        - Check against winning criteria
        - switch Player

    Repeat until all tiles are filled - resulting in Tie
    OR
    A player meets winning criteria and wins the game

    END


