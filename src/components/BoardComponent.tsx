import { FC, Fragment, useEffect, useState } from 'react';

import CellComponent from '../components/CellComponent';

import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import '../styles/board.scss';


interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
};

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [ selectedCell, setSelectedCell ] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells();
  }, [ selectedCell ]); // eslint-disable-line


  const onClick = (cell: Cell): void => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    }
    else {
      if (cell.figure)
        setSelectedCell(cell);
    };
  };

  const updateBoard = () => {
    const newBoard = board.getCopy();
    setBoard(newBoard);
  };

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
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
