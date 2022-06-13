import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KING;
    this.pieceId = color === Colors.BLACK ? 'blackKing' : 'whiteKing';
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    if (
        //vertical
        (
          target.x === this.cell.x + 1 &&
          target.y === this.cell.y + 1
        ) ||
        (
          target.x === this.cell.x - 1 &&
          target.y === this.cell.y + 1
        ) ||
        (
          target.x === this.cell.x - 1 &&
          target.y === this.cell.y - 1
        ) ||
        (
          target.x === this.cell.x + 1 &&
          target.y === this.cell.y - 1
        ) ||
        //horizontal
        (
          target.x === this.cell.x + 1 &&
          target.y === this.cell.y
        ) ||
        (
          target.x === this.cell.x - 1 &&
          target.y === this.cell.y
        ) ||
        //vertical
        (
          target.x === this.cell.x &&
          target.y === this.cell.y + 1
        ) ||
        (
          target.x === this.cell.x &&
          target.y === this.cell.y - 1
        )
      )
      return true;

    return false;
  };
};
