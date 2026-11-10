
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <main className="container">
      <div className="card">
        <h1>Contador com useEffect</h1>

        <p>Altere o número abaixo:</p>

        <div className="numero">{contador}</div>

        <div className="botoes">
          <button onClick={() => setContador(valor => valor - 1)}>
            -
          </button>

          <button onClick={() => setContador(valor => valor + 1)}>
            +
          </button>
        </div>

        <button
          className="zerar"
          onClick={() => setContador(0)}
        >
          Zerar contador
        </button>

        <p className="titulo">
          Título da página: Contador: {contador}
        </p>
      </div>
    </main>
  );
}

export default App;
