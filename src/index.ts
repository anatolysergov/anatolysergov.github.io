import { sendSomething } from './temp';
import { CookieManager } from './cookie';

let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

let computerPiece = 'X';
let playerPiece = 'O';

let playerTurn:boolean = false;
let winner:boolean = false;

let cook: CookieManager;

function run():void {
    //Computer places original piece
    initialPlacement();

}

function initialPlacement(): any {
    //Get random number to place piece on board
    let winNumber = Math.round(Math.random() * 10);
    
    //make sure winNumber is not 10 or 0 [only 9 slots on the board]
    while (winNumber == 10 || winNumber == 0) {
        winNumber = Math.round(Math.random() * 10);
    }

    //Find where to place a 
    let pos = 1;
    for(let i=0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(pos == winNumber) {
                board[i][j] = 'X';
            }
            pos++;
        }
    }
    playerTurn = true;
    drawBoard();
    winsCount('set');
}

//Player turn and action
function playerMove(position:number) {
    let count: number = 0;

    if(isMoveAvailable(position)) {
        for(let row = 0; row < 3; row++) {
            for(let col = 0; col < 3; col++) {
                if(count == position) {
                    board[row][col] = playerPiece;
                    computerMove();
                    drawBoard();
                    if(isAWinner() == 'O') {
                        endGame('You');
                        winsCount('You');
                    };
                    if(isAWinner() == 'X') {
                        winsCount('Pc');
                        endGame('Computer');
                    }
                    if(isAWinner() == 'Tie') {
                        endGame('Tie');
                    }
                }
                count++;
            }
        }
    }
}

function computerMove() {
    let winNumber = Math.round(Math.random() * 10);
    let placeable: boolean = false;
    let count: number = 0;
    //make sure winNumber is not 10 or 0 [only 9 slots on the board]
    while (winNumber > 8 || !isMoveAvailable(winNumber)) {
        winNumber = Math.round(Math.random() * 10);
    }
    while(placeable == false) {
        if(isMoveAvailable(winNumber)){
            for(let row = 0; row < 3; row++) {
                for(let col = 0; col < 3; col++) {
                    if(count == winNumber) {
                        board[row][col] = computerPiece;
                        placeable = true;
                    }
                    count++;
                }
            }
        }
        placeable = true;
    }
}

function isMoveAvailable(position:number): boolean {
    let count:number = 0;

    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(count == position && board[row][col] !== '') {
                return false;
            }
            count++;
        }
    }
    return true;
}

function drawBoard() {
    let count: number = 0;
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(board[row][col] == 'X'){
                document.getElementById(`${count}`).classList.add('x');
                count++;
            }
            if(board[row][col] == 'O') {
                document.getElementById(`${count}`).classList.add('o');
                count++;
            }
            if(board[row][col] == ''){
                count++;
            }
        }
    }
}

function resetboard(): void {
    
    let count: number = 0;
    board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            document.getElementById(`${count}`).classList.remove('x');
            document.getElementById(`${count}`).classList.remove('o');
            count++;
        }
    }
    let rasinCookie = new CookieManager(0,0);
    rasinCookie.resetCookie();
    drawBoard();
}

function isAWinner(): string {
    let winningBoard = board.map((arr) => {
        return arr.slice();
    });

    //Remove all X's and see if board is in winning boards
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(winningBoard[row][col] == 'X'){
                winningBoard[row][col] = '';
            }
        }
    }

    //Horizontal comparison
    if(winningBoard[0][0] == 'O' && winningBoard[0][1] == 'O' && winningBoard[0][2] == 'O') {
        return 'O';
    }
    if(winningBoard[1][0] == 'O' && winningBoard[1][1] == 'O' && winningBoard[1][2] == 'O') {
        return 'O';
    }
    if(winningBoard[2][0] == 'O' && winningBoard[2][1] == 'O' && winningBoard[2][2] == 'O') {
        return 'O';
    }

    //vertical comparison
    if(winningBoard[0][0] == 'O' && winningBoard[1][0] == 'O' && winningBoard[2][0] == 'O') {
        return 'O';
    }
    if(winningBoard[0][1] == 'O' && winningBoard[1][1] == 'O' && winningBoard[2][1] == 'O') {
        return 'O';
    }
    if(winningBoard[0][2] == 'O' && winningBoard[1][2] == 'O' && winningBoard[2][2] == 'O') {
        return 'O';
    }

    //Cross comparison
    if(winningBoard[0][0] == 'O' && winningBoard[1][1] == 'O' && winningBoard[2][2] == 'O') {
        return 'O';
    }
    if(winningBoard[2][0] == 'O' && winningBoard[1][1] == 'O' && winningBoard[0][2] == 'O') {
        return 'O';
    }

    //Verify X is the winner
    let xWinningBoard = board.map((arr) => {
        return arr.slice();
    });

    //Remove all O's and see if board is in winning boards
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(xWinningBoard[row][col] == 'O'){
                xWinningBoard[row][col] = '';
            }
        }
    }

    //Horizontal comparison
    if(xWinningBoard[0][0] == 'X' && xWinningBoard[0][1] == 'X' && xWinningBoard[0][2] == 'X') {
        return 'X';
    }
    if(xWinningBoard[1][0] == 'X' && xWinningBoard[1][1] == 'X' && xWinningBoard[1][2] == 'X') {
        return 'X';
    }
    if(xWinningBoard[2][0] == 'X' && xWinningBoard[2][1] == 'X' && xWinningBoard[2][2] == 'X') {
        return 'X';
    }

    //vertical comparison
    if(xWinningBoard[0][0] == 'X' && xWinningBoard[1][0] == 'X' && xWinningBoard[2][0] == 'X') {
        return 'X';
    }
    if(xWinningBoard[0][1] == 'X' && xWinningBoard[1][1] == 'X' && xWinningBoard[2][1] == 'X') {
        return 'X';
    }
    if(xWinningBoard[0][2] == 'X' && xWinningBoard[1][2] == 'X' && xWinningBoard[2][2] == 'X') {
        return 'X';
    }

    //Cross comparison
    if(xWinningBoard[0][0] == 'X' && xWinningBoard[1][1] == 'X' && xWinningBoard[2][2] == 'X') {
        return 'X';
    }
    if(xWinningBoard[2][0] == 'X' && xWinningBoard[1][1] == 'X' && xWinningBoard[0][2] == 'X') {
        return 'X';
    }

    //Check if there is a tie
    let boardCount: number = 0;
    for(let row = 0; row < 3; row ++) {
        for(let col = 0; col < 3; col++) {
            if(board[row][col] == 'X' || board[row][col] == 'O') {
                boardCount++;
            }
        }
    }

    if(boardCount == 9) {
        return 'Tie';
    }
}

function endGame(winner:string): void {
    document.getElementById("modal-container").classList.add("modal-container");
    document.getElementById("modal").classList.add("modal");
    document.getElementById("winner-title").classList.add("winner-title");
    if(winner == 'Tie') {
        document.getElementById("winner-title").innerHTML += `Its a Tie`;
    }else {
        document.getElementById("winner-title").innerHTML += `${winner} Won!`;
    }
    document.getElementById("newgame").classList.add("newgame");
    document.getElementById("newgame").innerHTML += 'New Game';
}

function winsCount(winner:string): void {
    let oatmealCookie = new CookieManager(0,0);
    if(winner == 'set') {
        if(!oatmealCookie.checkCookies){ 
            oatmealCookie.createCookie();
        }

        let { computerPoints, userPoints } = oatmealCookie.getCookieValues();

        document.getElementById('winningYou').innerHTML = 'You:' + userPoints;
        document.getElementById('winningPc').innerHTML = 'Pc:' + computerPoints;
    }

    if(winner == 'Pc') {
        oatmealCookie.addCookiePoints('pc');
        let { computerPoints, userPoints } = oatmealCookie.getCookieValues();

        document.getElementById('winningYou').innerHTML = 'You:' + userPoints;
        document.getElementById('winningPc').innerHTML = 'Pc:' + computerPoints;
    }
    if(winner == 'You') {
        oatmealCookie.addCookiePoints('you');
        let { computerPoints, userPoints } = oatmealCookie.getCookieValues();

        document.getElementById('winningYou').innerHTML = 'You:' + userPoints;
        document.getElementById('winningPc').innerHTML = 'Pc:' + computerPoints;
        
    }
}

function reloadPage() {
    location.reload();
    return false;
}

document.getElementById('0').addEventListener('click', () => {
    playerMove(0);
});
document.getElementById('1').addEventListener('click', () => {
    playerMove(1);
});
document.getElementById('2').addEventListener('click', () => {
    playerMove(2);
});
document.getElementById('3').addEventListener('click', () => {
    playerMove(3);
});
document.getElementById('4').addEventListener('click', () => {
    playerMove(4);
});
document.getElementById('5').addEventListener('click', () => {
    playerMove(5);
});
document.getElementById('6').addEventListener('click', () => {
    playerMove(6);
});
document.getElementById('7').addEventListener('click', () => {
    playerMove(7);
});
document.getElementById('8').addEventListener('click', () => {
    playerMove(8);
});
document.getElementById('reset').addEventListener('click', () => {
    resetboard();
    initialPlacement();
});
document.getElementById('newgame').addEventListener('click', () => {
    reloadPage();
});

run();