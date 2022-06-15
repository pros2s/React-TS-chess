import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Pawn extends Figure {
  isFirstStep = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.PAWN;
    this.pieceId = color === Colors.BLACK ? 'blackPawn' : 'whitePawn';
    this.value = 1;
  };


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    const direction = this.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = this.color === Colors.BLACK ? 2 : -2;


    if (
        (
          (
            // First step && next cell is empty && to the target cell 2 cells
            this.isFirstStep &&
            this.cell.board.getCell(this.cell.x, this.cell.y + direction).isEmpty() &&
            target.y === this.cell.y + firstStepDirection
          ) ||
          target.y === this.cell.y + direction // Not first step means possible move in only 1 cell
        ) &&
        target.x === this.cell.x && // Figure and target are on the same vertical line
        this.cell.board.getCell(target.x, target.y).isEmpty() // Next cell is empty
      )
      return true;


    if (
        (
          target.y === this.cell.y + direction &&
          (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
          this.cell.isEnemy(target)
        )
        // ||
        // (
        //   target.y === this.cell.y + direction &&
        //   target.x === this.cell.x + 1 &&
        //   (this.cell.isEnemy(this.cell.board.getCell(this.cell.x + 1, this.cell.y)) &&
        //   this.cell.board.getCell(this.cell.x + 1, this.cell.y).figure?.name === FigureNames.PAWN)
        // ) ||
        // (c
        //   target.y === this.cell.y + direction &&
        //   target.x === this.cell.x - 1 &&
        //   (this.cell.isEnemy(this.cell.board.getCell(this.cell.x - 1, this.cell.y)) &&
        //   this.cell.board.getCell(this.cell.x + 1, this.cell.y).figure?.name === FigureNames.PAWN)
        // )
      )
      return true;

    return false;
  };

  movementFigure(target: Cell): void {
    super.movementFigure(target);
    this.isFirstStep = false;
  }
};
