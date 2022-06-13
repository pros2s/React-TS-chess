import { Cell } from "../Cell";
import { Colors } from "../Colours";


export enum FigureNames {
  FIGURE = 'fugure',
  QUEEN = 'queen',
  KING = 'king',
  ROOK = 'rook',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  PAWN = 'pawn'
};

export class Figure {
  color: Colors;
  pieceId: string | null;
  name: FigureNames;
  id: number;
  cell: Cell;


  constructor(color: Colors, cell: Cell) {
    this.cell = cell;
    this.cell.figure = this;
    this.color = color;
    this.pieceId = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  };

  canMove(target: Cell): boolean {
    if (this.color === target.figure?.color)
      return false;

    if (target.figure?.name === FigureNames.KING)
      return false;

    return true;
  };

  movementFigure(target: Cell): void {};
};
