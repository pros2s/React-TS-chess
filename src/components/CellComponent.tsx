import React, { FC } from 'react';

import Sprite from './SVG/Sprite';
import { Cell } from '../models/Cell';


interface CellProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
};

const CellComponent: FC<CellProps> = ({ cell, selected, onClick }) => {
  return (
    <div
      className={ [ 'cell', cell.color, selected ? 'selected' : '' ].join(' ') }
      onClick={ () => onClick(cell) }>
        <Sprite id={ cell.figure?.pieceId }/>
    </div>
  );
};


export default CellComponent;
