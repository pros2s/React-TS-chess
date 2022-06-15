import { Board } from "./Board";
import { Colors } from "./Colours";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;


  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;

    this.available = false;
    this.id = Math.random();
  };


  isEmpty(): boolean {
    return this.figure === null;
  };

  isEnemy(target: Cell): boolean {
    if (target.figure)
      return this.figure?.color !== target.figure.color;

    return false;
  };

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x)
      return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty())
        return false;
    };

    return true;
  };

  isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y)
      return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty())
        return false;
    };

    return true;
  };

  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(this.x - target.x);
    const absY = Math.abs(this.y - target.y);

    if (absX !== absY)
      return false;


    const dY = this.y < target.y ? 1 : -1;
    const dX = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++)
      if (!this.board.getCell(this.x + dX * i, this.y + dY * i).isEmpty())
        return false;

    return true;
  };

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  };

  // addLostFigure(figure: Figure) {
  //   const blackFigureIncludes = this.board.lostBlackfigures.find((fig) => fig.name === figure.name) ? true : false;
  //   const whiteFigureIncludes = this.board.lostWhitefigures.find((fig) => fig.name === figure.name) ? true : false;

  //   if (blackFigureIncludes) {
  //     for (let i = 0; i < this.board.lostBlackfigures.length; i++) {

  //     };
  //   };

  //   if (figure.color === Colors.BLACK && !blackFigureIncludes) {
  //     this.board.lostBlackfigures.push(figure);
  //   };

  //   if (figure.color === Colors.WHITE && !whiteFigureIncludes) {
  //     this.board.lostWhitefigures.push(figure);
  //   };
  // };

  moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.movementFigure(target);

      if (target.figure) {
        target.figure.color === Colors.WHITE ?
          this.board.lostWhitefigures.push(target.figure) :
          this.board.lostBlackfigures.push(target.figure)
      };

      target.setFigure(this.figure);
      this.figure = null;
    };
  };
};
