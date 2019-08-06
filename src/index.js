import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // palpite - começa no meio
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div>
        <h2>Instruções</h2>
        <p>* Escolha um número entre 0 e 300</p>
        <p>* Memorize</p>
        <p>* Clique em iniciar jogo</p>
        <button onClick={iniciarJogo}>Começar a jogar!</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2 + min);
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2 + palpite);
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          {" "}
          Acertei o número {palpite} com {numPalpite} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente</button>
      </div>
    );
  }
  // 0 a 300
  // palpites que a máquina deu
  return (
    <div className="App">
      <h2>Instruções</h2>
      <p>
        * Clique em "Menor" se o número que você pensou for menor que o número
        mostrado na tela{" "}
      </p>
      <p>
        * Clique em "Maior" se o número que você pensou for maior que o número
        mostrado na tela{" "}
      </p>
      <p>
        * Clique em "Acertou" se o número que você pensou for igual ao número
        mostrado na tela
      </p>
      <h3>O seu número é {palpite} ?</h3>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
