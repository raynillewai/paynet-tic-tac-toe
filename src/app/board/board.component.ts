import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;

  playerOne: string = '';
  playerTwo: string = '';
  currentPlayer: string = '';

  constructor() {}

  ngOnInit() {
    this.initNewGame();
  }

  initNewGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  submitPlayerNames() {
    this.currentPlayer = this.playerOne;
    this.initNewGame();
  }

  resetGame() {
    this.playerOne = ''; 
    this.playerTwo = '';
    this.initNewGame();
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.playerOne && !this.playerTwo) {
      alert('Please enter player details first');
    } else {
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
        if (this.xIsNext) {
          this.currentPlayer = this.playerOne;
        } else {
          this.currentPlayer = this.playerTwo;
        }
      }
  
      this.winner = this.calculateWinner();
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  playerOneChange(event: any) {
    console.log(event);
  }

  playerTwoChange(event: any) {
    console.log(event);
  }

}
