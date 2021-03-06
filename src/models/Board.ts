import { Colors } from "./Colours";
import { Cell } from "./Cell";

import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";
import { Figure, FigureNames } from "./figures/Figure";


export class Board {
  cells: Cell[][] = [];

  lostWhitefigures: Figure[] = [];
  lostBlackfigures: Figure[] = [];

  initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // black
        }
        else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // white
        };
      };

      this.cells.push(row);
    };
  };

  getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  };

  getCopy(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostBlackfigures = this.lostBlackfigures.sort((a, b) => (a.value < b.value ? 1 : -1));
    newBoard.lostWhitefigures = this.lostWhitefigures.sort((a, b) => (a.value < b.value ? 1 : -1));
    return newBoard;
  };

  highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];

      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      };
    };
  };

  isCheck() {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];

      for (let j = 0; j < row.length; j++) {
        const attackedCell = row[j];
        if (
          attackedCell.figure?.name === FigureNames.KING &&
          attackedCell.isUnderAttack()
        )
        return true;
      };
    };

    return false;
  };


  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCell(i, 6));
      new Pawn(Colors.BLACK, this.getCell(i, 1));
    };
  };

  private addRooks() {
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));

    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
  };

  private addKnights() {
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));

    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
  };

  private addBishops() {
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));

    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
  };

  private addKings() {
    new King(Colors.WHITE, this.getCell(4, 7));
    new King(Colors.BLACK, this.getCell(4, 0));
  };

  private addQueens() {
    new Queen(Colors.WHITE, this.getCell(3, 7));
    new Queen(Colors.BLACK, this.getCell(3, 0));
  };


  public addFigures() {
    this.addPawns();
    this.addRooks();
    this.addKnights();
    this.addBishops();
    this.addQueens();
    this.addKings();
  };
};
