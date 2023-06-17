import './App.css';
import Logo from "./Logo";
import './App.css'
import {useState} from "react";

function App() {
    const initialBoard = Array(9).fill(null)
    const [board, setBoard] = useState(initialBoard)
    const [xIsNext, setXisNext] = useState(true)
    const calculateWinner = squares => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i=0; i<lines.length; i++){
            const[a, b, c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a]=== squares[c]){
                return squares[a]
            }
        }
        return null
    }

const handleClick = (i) => {
        const boardCopy = [...board]
    if(calculateWinner(board) || boardCopy[i]) return
boardCopy[i] = xIsNext ? 'X' : '0';
    setBoard(boardCopy)
    setXisNext(!xIsNext)
    }
    const reset = () => {
        setBoard(initialBoard)
        setXisNext(true)
    }

    const renderSquare = (i) => {
        return (
            <button className='square' onClick={() => handleClick(i)}>
                {board[i]}
            </button>
        )
    }

    let status;
    const winner = calculateWinner(board)
    status = winner ? `Winner: ${winner}` : `The next player is '${xIsNext ? 'X' : '0'}'`

    return (
        <div className='game'>
            <Logo/>

            <div className='App'>
                <div className='status'><h2>{status}</h2></div>
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
                <button
                    className='reset-button'
                    onClick={reset}> Reset </button>
            </div>


            <Logo/>
            <Logo/>


        </div>
    );
}

export default App;
