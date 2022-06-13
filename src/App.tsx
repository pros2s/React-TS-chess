import { useEffect, useState } from 'react';

import BoardComponent from './components/BoardComponent';

import { Board } from './models/Board';
import './styles/app.scss';


const App = () => {
  const [ board, setBoard ] = useState(new Board());

  useEffect(() => {
    restartGame();
  }, []);


  const restartGame = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  return (
    <div className="app">
      <BoardComponent board={ board } setBoard={ setBoard }/>
    </div>
  );
};


export default App;
