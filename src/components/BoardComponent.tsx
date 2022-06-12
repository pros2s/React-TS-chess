import { FC, Fragment } from 'react';

import CellComponent from '../components/CellComponent';

import { Board } from '../models/Board';
import '../styles/app.scss';


interface BoardProps {
  board: Board;
  setBoard?: (board: Board) => void;
};

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
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
