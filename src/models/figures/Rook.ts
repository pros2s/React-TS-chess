import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.ROOK;
    this.pieceId = color === Colors.BLACK ? 'blackRook' : 'whiteRook';
  };
};
