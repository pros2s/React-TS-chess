import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.ROOK;
    this.pieceId = color === Colors.BLACK ? 'blackRook' : 'whiteRook';
    this.value = 5;
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    if (
        this.cell.isEmptyVertical(target) ||
        this.cell.isEmptyHorizontal(target)
      )
      return true;

    if (
        this.cell.board.getCell(this.cell.x - 1, this.cell.y)?.figure?.isCastleShort ||
        this.cell.board.getCell(this.cell.x + 2, this.cell.y)?.figure?.isCastleLong
      )
      return true;

    return false;
  };

  movementFigure(target: Cell): void {
    super.movementFigure(target);
    this.isFirstStep = false;
  };
};
