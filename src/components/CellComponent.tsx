import React, { FC } from 'react';

import Sprite from './SVG/Sprite';
import { Cell } from '../models/Cell';

import '../styles/cell.scss';


interface CellProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
};

const CellComponent: FC<CellProps> = ({ cell, selected, onClick }) => {
  return (
    <div
      className={
        [
          'cell',
          'cell__' + cell.color,
          selected ? 'selected' : '',
          cell.available && cell.figure && 'cell__available-piece'
        ].join(' ')
      }
      onClick={ () => onClick(cell) }>
        { cell.available && !cell.figure && <div className="cell__available-move"></div> }
        { cell.figure && <Sprite id={ cell.figure?.pieceId }/> }
    </div>
  );
};


export default CellComponent;
