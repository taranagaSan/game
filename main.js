class Game {
  constructor() {
    this.winner = null;
    this.flag = true;
  }

  moveX(e) {
    let currentCell = e.target;

    if (currentCell.classList.contains('cell')) {
      currentCell.dataset.gamer = 'x';
      currentCell.innerHTML = 'X';
    }
    this.checkWin();
  }

  moveY(e) {
    let currentCell = e.target;

    if (currentCell.classList.contains('cell')) {
      currentCell.dataset.gamer = 'y';
      currentCell.innerHTML = 'Y';
    }
    this.checkWin();
  }

  makeMove(e) {
    if (this.flag) {
      game.moveX(e);
      this.flag = false;
    } else {
      game.moveY(e);
      this.flag = true;
    }
  }

  checkWin() {
    let winArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 5, 7], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
    let newArrayX = [];
    let newArrayY = [];
    let cells = document.querySelectorAll('.cell');

    [...cells].forEach(item => {
      if (item.dataset.gamer === 'x') {
        newArrayX.push(+item.id);
      } else if (item.dataset.gamer === 'y') {
        newArrayY.push(+item.id)
      }
    });

    let makeResultX = () => {

      for (let i = 0; i <= winArrays.length - 1; i++) {
        let arr = 0;
        for (let j = 0; j <= newArrayX.length - 1; j++) {

          for (let k = 0; k <= winArrays[j].length - 1; k++) {

            if (winArrays[i][k] === newArrayX[j]) {
              arr++
            }
          }
        }
        if (arr === 3) {
          this.winner = 'x';
          alert(`the winner is ${this.winner}`);
          return false;
        }
      }
    };

    let makeResultY = () => {

      for (let i = 0; i <= winArrays.length - 1; i++) {
        let arr = 0;

        for (let j = 0; j <= newArrayY.length - 1; j++) {

          for (let k = 0; k <= winArrays[j].length - 1; k++) {

            if (winArrays[i][k] === newArrayY[j]) {
              arr++;
            }
          }
        }
        if (arr === 3) {
          this.winner = 'y';
          alert(`the winner is ${this.winner}`);
          return false;
        }
      }
    };

    makeResultX();
    makeResultY();
  };

   show() {

    let gameTable = document.querySelector('.game-table');
    for (let i = 1; i <= 9; i++) {

      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = i;
      gameTable.appendChild(cell);
    }
  };

   restart() {
    this.winner = null;
    gameTable.innerHTML = '';
    this.flag = true;
    game.show();
  };
}

let game = new Game();

let gameTable = document.querySelector('.game-table');

document.addEventListener('DOMContentLoaded', game.show);
gameTable.addEventListener('click', (e) => game.makeMove(e));

let btn = document.querySelector('button');
btn.addEventListener('click', () => game.restart());
