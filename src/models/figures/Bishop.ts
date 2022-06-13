import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.pieceId = color === Colors.BLACK ? 'blackBishop' : 'whiteBishop';
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    if (this.cell.isEmptyDiagonal(target))
      return true;

    return false;
  };
};
