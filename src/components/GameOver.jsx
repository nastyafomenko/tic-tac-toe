export default function GameOver({ winner, onRestart }) {
    return (
      <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} виграв/ла!</p>}
        {!winner && <p>Це нічия!</p>}
        <p>
          <button onClick={onRestart}>Реванш!</button>
        </p>
      </div>
    );
  }