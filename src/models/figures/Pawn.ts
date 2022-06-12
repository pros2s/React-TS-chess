import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.PAWN;
    this.pieceId = color === Colors.BLACK ? 'blackPawn' : 'whitePawn';
  };
};
