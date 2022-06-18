import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KNIGHT;
    this.pieceId = color === Colors.BLACK ? 'blackKnight' : 'whiteKnight';
    this.value = 3;
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    const dX = Math.abs(this.cell.x - target.x);
    const dY = Math.abs(this.cell.y - target.y);

    return (dX === 2 && dY === 1) || (dX === 1 && dY === 2);
  };

  movementFigure(target: Cell): void {
    super.movementFigure(target);
    this.isFirstStep = false;
  };
};
