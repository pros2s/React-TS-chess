import { useEffect, useState } from 'react';

import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';

import { Board } from './models/Board';
import { Colors } from './models/Colours';
import { Player } from './models/Player';
import './styles/app.scss';


const App = () => {
  const [ board, setBoard ] = useState(new Board());

  const [ whitePlayer ] = useState(new Player(Colors.WHITE));
  const [ blackPlayer ] = useState(new Player(Colors.BLACK));
  const [ currentPlayer, setCurrentPlayer ] = useState<Player | null>(null);

  useEffect(() => {
    restartGame();
  }, []); // eslint-disable-line


  const restartGame = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setCurrentPlayer(whitePlayer);
    setBoard(newBoard);
  };

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  };

  return (
    <div className="app">
      <div className="playground">
        <LostFigures
          figures={ board.lostWhitefigures }/>

        <BoardComponent
          board={ board }
          setBoard={ setBoard }
          swapPlayer={ swapPlayer }
          currentPlayer={ currentPlayer }/>

        <LostFigures
          figures={ board.lostBlackfigures }/>
      </div>
    </div>
  );
};


export default App;
