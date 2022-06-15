import { FC, Fragment, useEffect, useState } from 'react';

import CellComponent from '../components/CellComponent';

import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import '../styles/board.scss';


interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
};

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [ selectedCell, setSelectedCell ] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells();
  }, [ selectedCell ]); // eslint-disable-line


  const onClick = (cell: Cell): void => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayer();
    }
    else {
      if (cell.figure?.color === currentPlayer?.color)
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
