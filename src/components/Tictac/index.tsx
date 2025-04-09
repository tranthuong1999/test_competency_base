import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

const calculateWinner = (squares: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] };
    }
  }
  return { winner: null, winningSquares: [] };
};

const TictacGame = () => {
  const [isNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const squares = history[stepNumber];
  const { winner, winningSquares } = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isNext ? 'X' : 'O';
    setHistory([...history.slice(0, stepNumber + 1), newSquares]);
    setStepNumber(stepNumber + 1);
    setIsNext(!isNext);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isNext ? 'X' : 'O'}`;
  }

  const handleJump = (move: number) => {
    setStepNumber(move);
    setIsNext(move % 2 === 0);
  };

  return (
    <div className="tic_tac_gameing">
      <div>{status}</div>
      <div className="gameing">
        {squares.map((item: string | null, index: number) => (
          <button
            key={index}
            className={classNames(
              'btn_square',
              winningSquares?.includes(index) ? 'btn_square_active' : '',
            )}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="history">
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => handleJump(move)}>
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TictacGame;
