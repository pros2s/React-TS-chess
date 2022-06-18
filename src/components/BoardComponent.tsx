import { FC, Fragment, useEffect, useState } from 'react';

import CellComponent from '../components/CellComponent';

import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { FigureNames } from '../models/figures/Figure';
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
  const [ isCheck, setIsCheck ] = useState<boolean>(false);

  useEffect(() => {
    highlightCells();
  }, [ selectedCell ]); // eslint-disable-line

  useEffect(() => {
    kingCheck();
  }, [ swapPlayer ]); // eslint-disable-line

  const onClick = (cell: Cell): void => {
    //Long side castle
    if (
      selectedCell?.figure?.name === FigureNames.KING &&
      selectedCell.figure.isFirstStep &&
      board.getCell(cell.x, cell.y).isEmpty() &&
      board.getCell(cell.x - 1, cell.y).isEmpty() &&
      board.getCell(cell.x + 1, cell.y).isEmpty() &&
      board.getCell(cell.x - 2, cell.y).figure?.name === FigureNames.ROOK &&
      board.getCell(cell.x - 2, cell.y).figure?.isFirstStep
    ) {
      selectedCell.moveFigure(cell);
      board.getCell(cell.x - 2, cell.y).moveFigure(board.getCell(cell.x + 1, cell.y));

      setSelectedCell(null);
      swapPlayer();
    }
    //Short side castle
    else if (
      selectedCell?.figure?.name === FigureNames.KING &&
      selectedCell.figure.isFirstStep &&
      board.getCell(cell.x, cell.y).isEmpty() &&
      board.getCell(cell.x - 1, cell.y).isEmpty() &&
      board.getCell(cell.x + 1, cell.y).figure?.name === FigureNames.ROOK &&
      board.getCell(cell.x + 1, cell.y).figure?.isFirstStep
    ) {
      selectedCell.moveFigure(cell);
      board.getCell(cell.x + 1, cell.y).moveFigure(board.getCell(cell.x - 1, cell.y));

      setSelectedCell(null);
      swapPlayer();
    }
    else if (selectedCell?.figure?.canMove(cell) && selectedCell !== cell) {
      if (!selectedCell.figure.isFirstStep) {
        selectedCell.figure.isCastleLong = false;
        selectedCell.figure.isCastleShort = false;
      };
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

  const kingCheck = () => {
    board.isCheck() ? setIsCheck(true) : setIsCheck(false);
  };

  return (
    <div className='board'>
      {
        board.cells.map((row, i) =>
          <Fragment key={ i }>
            {

              row.map((cell) =>
                <CellComponent
                  key={ cell.id }
                  cell={ cell }
                  selected={ cell.x === selectedCell?.x && cell.y === selectedCell?.y }
                  isCheck={ isCheck }
                  currentColor={ currentPlayer?.color }
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
