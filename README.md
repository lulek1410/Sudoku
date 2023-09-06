# Sudoku
Simple implementation of well known puzzle game Sudoku.
# Table of contents
* [Basic information](#basic-information)
* [Functionality](#functionality)
* [Technology Used](#technology-used)
* [Screenschots](#screenschots)
* [Aditional Information](#aditional-information)
* [Contact](#contact)
* [License](#license)

## Basic Information
This particular implementation aimed to recreate an application written by my couple years ago that was ment to be used on Android devices.
You can see the android app [here](https://play.google.com/store/apps/details?id=com.whitestripesstudio_sudokugame&pli=1).
The web application present in this repository can be seen here: [ghpages](https://lulek1410.github.io/Sudoku/).

## Functionality
The application allows user to pick a difficulty level they intend to play on. The difficulty levels differ the number of cells that are left empty.
The game starts whe the user clicks on the "Start" button. 
Throughout the duration of the game, player is timed. The game board highlights important cells based on the one currently sellected. 
The important cells are the one in the same horizontal or vertical line from the selected cell and also the 3x3 square in wchich the sellected cell is.
On wide screen devices the game is using the keyboard to input numbers into cells while on the narrow screen devices it uses a numerical keyboard that is displayted bellow the game board.
User is also able to take notes by clicking the pencil button int allows user to input numbers from 1 to 9 into single cell making it a note.
There is also an eraser button that simply clears all input frokm selected cell. Lastly there is a button that allows checking our sudoku. 
Checking the board provides an according response based on the type of wrong cell detected or the lack of wrong cells. The responses are as follows:
* You Won! Congratulations! -> when the user completes the board without errors
* You did not fill <number> cells! -> when user leaves <number> of cells empty
* You made <number> mistakes! -> when user fills whole board but has some mistakes in it.


## Technology used
* Javascript, HTML, CSS -> application programming
* JQuery
* Jest -> testing
* webpack -> bundling
* babel -> backwards-compatibility

## Screenschots
![]()


