import React, { FC } from 'react';

import Sprite from './SVG/Sprite';
import { Cell } from '../models/Cell';

import '../styles/cell.scss';
import { FigureNames } from '../models/figures/Figure';
import { Colors } from '../models/Colours';


interface CellProps {
  cell: Cell;
  selected: boolean;
  isCheck:  boolean;
  currentColor: Colors | undefined;
  onClick: (cell: Cell) => void;
};

const CellComponent: FC<CellProps> = ({ cell, isCheck, currentColor, selected, onClick }) => {
  return (
    <div
      className={
        [
          'cell',
          'cell__' + cell.color,
          selected ? 'selected' : '',
          ((cell.available && cell.figure) ||
            (cell.figure?.name === FigureNames.KING &&
              isCheck &&
              cell.figure.color === currentColor)) &&
            'cell__available-piece',

        ].join(' ')
      }
      onClick={ () => onClick(cell) }>
        { cell.available && !cell.figure && <div className="cell__available-move"></div> }
        { cell.figure && <Sprite id={ cell.figure?.pieceId } lost={ false }/> }
    </div>
  );
};


export default CellComponent;
