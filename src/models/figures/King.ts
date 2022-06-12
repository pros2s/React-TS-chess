import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colours";
import { Cell } from "../Cell";


export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KING;
    this.pieceId = color === Colors.BLACK ? 'blackKing' : 'whiteKing';
  };
};
