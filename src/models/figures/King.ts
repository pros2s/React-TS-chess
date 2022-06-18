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

    //Castle
    if (
        //Short side castle
        this.cell.board.getCell(this.cell.x + 3, this.cell.y)?.figure?.name === FigureNames.ROOK &&
        this.cell.board.getCell(this.cell.x + 3, this.cell.y).figure?.isFirstStep &&
        this.cell.board.getCell(this.cell.x + 2, this.cell.y).isEmpty() &&
        this.cell.board.getCell(this.cell.x + 1, this.cell.y).isEmpty() &&
        target.x === this.cell.x + 2 &&
        this.isFirstStep &&
        target.y === this.cell.y
      ) {
        this.isCastleShort = true;
        return true;
      };

    if (
        //Long side castle
        this.isFirstStep &&
        target.y === this.cell.y &&
        this.cell.board.getCell(this.cell.x - 4, this.cell.y)?.figure?.name === FigureNames.ROOK &&
        this.cell.board.getCell(this.cell.x - 4, this.cell.y).figure?.isFirstStep &&
        this.cell.board.getCell(this.cell.x - 1, this.cell.y).isEmpty() &&
        this.cell.board.getCell(this.cell.x - 2, this.cell.y).isEmpty() &&
        this.cell.board.getCell(this.cell.x - 3, this.cell.y).isEmpty() &&
        target.x === this.cell.x - 2
      ) {
        this.isCastleLong = true;
        return true;
      };

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

  movementFigure(target: Cell): void {
    super.movementFigure(target);
    this.isFirstStep = false;
  };
};
