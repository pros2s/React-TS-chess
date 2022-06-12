import React, { FC } from 'react';

import Sprite from './SVG/Sprite';
import { Cell } from '../models/Cell';


interface CellProps {
  cell: Cell;
};

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div className={ [ 'cell', cell.color ].join(' ') }>
      <Sprite id={ cell.figure?.pieceId }/>
    </div>
  );
};


export default CellComponent;
