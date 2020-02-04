import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick()}>
//             {props.value}
//         </button>
//     );
// }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {squares: Array(9).fill(null),
            xIsNext: true,}

    }

    handleClick(i){
        const squares = this.state.squares.slice() //slice returns a new array of selected array indices (in this case all)
        squares[i] = this.state.xIsNext ? "X":"O" //set square at index [i] to X
        this.setState({squares: squares, xIsNext: !this.state.xIsNext}) //update the squares state
    }

    renderSquare(i) {
    //    return a Square child component, but fill the child state with the value stored in the
    //    Board constructor.
        return (<Square value={this.state.squares[i]}
                       onClick={()=> this.handleClick(i)}
        />)
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
