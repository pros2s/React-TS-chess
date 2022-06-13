import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.ROOK;
    this.pieceId = color === Colors.BLACK ? 'blackRook' : 'whiteRook';
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    if (
        this.cell.isEmptyVertical(target) ||
        this.cell.isEmptyHorizontal(target)
      )
      return true;


    return false;
  };
};
