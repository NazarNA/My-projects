import React, { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';
import style from './Table.module.css'

const Table = () => {

  const [cells, setCells] = useState(Array(9).fill(null))
  const [xIsNext,setXIsNext] = useState(true)
  const winner = calculateWinner(cells);

    
  function calculateWinner(squares) {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
        // go over all possibly winning lines and check if they consist of only X's/only O's
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        alert(`winner - ${squares[a]}`);
        return squares[a];
        }
    }
      return null;
  }
  
  const handleClick = (id) => {
  
    let tableClone = [...cells]

    if (winner || tableClone[id]) return;

    tableClone[id] = xIsNext ? 'X' : '0'
    setCells(tableClone)
    setXIsNext(!xIsNext)

    if(calculateWinner(cells)){
      console.log(`winner: ${calculateWinner(cells)}`);
    }

  }

  return (
    <div className={style.tabbleWrapper}>
        {cells.map((cell,index) => (
          <Cell key={index} id={index} cell={cell} onClick={handleClick}/>
        ))}
    </div>
  );
}

export default Table;
