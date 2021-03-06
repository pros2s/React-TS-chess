import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.QUEEN;
    this.pieceId = color === Colors.BLACK ? 'blackQueen' : 'whiteQueen';
    this.value = 8;
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    if (
        this.cell.isEmptyVertical(target) ||
        this.cell.isEmptyHorizontal(target) ||
        this.cell.isEmptyDiagonal(target)
      )
      return true;


    return false;
  };

  movementFigure(target: Cell): void {
    super.movementFigure(target);
    this.isFirstStep = false;
  };
};
