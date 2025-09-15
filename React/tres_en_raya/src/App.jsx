import { useState } from "react";

import "./App.css";

const TURNOS = {
  X: "x",
  O: "o",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Cuadrado = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : null}`;

  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));

  const [turno, setTurno] = useState(TURNOS.X);

  const [ganador, setGanador] = useState(null);

  const updateBoard = (index) => {
    if (tablero[index] || ganador) return;
    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno;
    setTablero(nuevoTablero);

    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurno(nuevoTurno);

    if (checkWinner(nuevoTablero)) {
      setGanador(checkWinner(nuevoTablero));
    }
  };

  const checkWinner = (nuevoTablero) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        nuevoTablero[a] &&
        nuevoTablero[a] === nuevoTablero[b] &&
        nuevoTablero[a] === nuevoTablero[c]
      ) {
        return nuevoTablero[a];
      }
    }
    if (nuevoTablero.every((square) => square !== null)) {
      return "Empate";
    }
    return null;
  };

  const resertGame = () => {
    setTablero(Array(9).fill(null));
    setGanador(null);
    setTurno(TURNOS.X);
  };

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button onClick={resertGame}>Resetear juego</button>

      <section className="game">
        {tablero.map((value, index) => {
          return (
            <Cuadrado key={index} index={index} updateBoard={updateBoard}>
              {value}
            </Cuadrado>
          );
        })}
      </section>
      <section className="turn">
        <Cuadrado isSelected={turno == TURNOS.X}>{TURNOS.X}</Cuadrado>
        <Cuadrado isSelected={turno == TURNOS.O}>{TURNOS.O}</Cuadrado>
      </section>

      {ganador !== null && (
        <section className="winner">
          <div className="text">
            <h2>{ganador == "Empate" ? "Empate" : "Gano"}</h2>
            {ganador !== "Empate" ? (
              <Cuadrado isSelected={true}>{ganador}</Cuadrado>
            ) : null}
            <button onClick={resertGame}>Empezar de nuevo</button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
