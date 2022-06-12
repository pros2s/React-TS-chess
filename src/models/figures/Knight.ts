import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KNIGHT;
    this.pieceId = color === Colors.BLACK ? 'blackKnight' : 'whiteKnight';
  };
};
