import { FC, Fragment, useState } from 'react';

import CellComponent from '../components/CellComponent';

import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import '../styles/board.scss';


interface BoardProps {
  board: Board;
  setBoard?: (board: Board) => void;
};

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [ selectedCell, setSelectedCell ] = useState<Cell | null>(null);


  const onClick = (cell: Cell): void => {
    if (cell.figure)
      setSelectedCell(cell);
  };

  return (
    <div className='board'>
      {
        board.cells.map((row, i) =>
          <Fragment key={ i }>
            {

              row.map((cell) =>
                <CellComponent
                  cell={ cell }
                  key={ cell.id }
                  selected={ cell.x === selectedCell?.x && cell.y === selectedCell?.y }
                  onClick={ onClick }
                />
              )

            }
          </Fragment>
        )
      }
    </div>
  );
};


export default BoardComponent;
