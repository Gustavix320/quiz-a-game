import { useState } from "react";
import "./App.css";

const questoes = [
  {
    imagem: "/spots/spot1.png",
    spot: "SPOT 1",
    titulo: "K5s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "75% field left", players: "359/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Flat",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "10% flat / 15% 3bet NAI / 5% all-in",
          "15% flat / 5% 3bet NAI / 5% all-in",
          "25% flat / 0% 3bet NAI / 0% all-in",
        ],
        correta: "10% flat / 10% 3bet NAI / 5% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot2.png",
    spot: "SPOT 2",
    titulo: "Q4s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "75% field left", players: "340/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Fold",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "10% flat / 5% 3bet NAI / 10% all-in",
          "15% flat / 0% 3bet NAI / 15% all-in",
          "25% flat / 0% 3bet NAI / 0% all-in",
        ],
        correta: "0% flat / 0% 3bet NAI / 0% all-in",
      },
    ],
  },
];

function App() {
  const [iniciado, setIniciado] = useState(false);
  const [nome, setNome] = useState("");
  const [spotAtual, setSpotAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const questao = questoes[spotAtual];

  if (!iniciado) {
    return (
      <main className="home-page">
        <section className="home-card">
          <h1>Quiz A-Game</h1>

          <p className="home-subtitle">
            Spots Pre-Flop Progressive KO
          </p>

          <div className="name-box">
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <button
            className="start-button"
            onClick={() => {
              if (!nome.trim()) return;
              setIniciado(true);
            }}
          >
            INICIAR QUIZ →
          </button>
        </section>
      </main>
    );
  }

  function escolherResposta(perguntaIndex, alternativa) {
    setRespostas({
      ...respostas,
      [spotAtual]: {
        ...respostas[spotAtual],
        [perguntaIndex]: alternativa,
      },
    });
  }

  function calcularAcertos() {
    return questao.perguntas.filter(
      (pergunta, index) => respostas[spotAtual]?.[index] === pergunta.correta
    ).length;
  }

  function proximoSpot() {
    if (spotAtual < questoes.length - 1) {
      setSpotAtual(spotAtual + 1);
      setMostrarResultado(false);
    }
  }

function voltarSpot() {
  if (spotAtual === 0) {
    // se estiver no primeiro spot → volta pro início
    setIniciado(false);
    setNome("");
    setRespostas({});
    setMostrarResultado(false);
  } else {
    // senão → volta um spot normal
    setSpotAtual(spotAtual - 1);
    setMostrarResultado(false);
  }
}

  const acertos = calcularAcertos();
  const total = questao.perguntas.length;
  const nota = Math.round((acertos / total) * 100);

  return (
    <main className="app">
      <section className="quiz-container">
        <div className="left-panel">
          <div className="image-frame">
            <img src={questao.imagem} alt="Spot de poker" />
          </div>

          <div className="info-bar">
            <span>⚙ Torneio: {questao.info.torneio}</span>
            <span>⏱ Fase: {questao.info.fase}</span>
            <span>👥 Players: {questao.info.players}</span>
            <span>🎯 Blinds: {questao.info.blinds}</span>
          </div>
        </div>

        <div className="right-panel">
          <div className="spot-label">
            <span></span>
            {questao.spot}
            <span></span>
          </div>

          <h1>{questao.titulo}</h1>

          {questao.perguntas.map((pergunta, index) => (
            <div className="question-block" key={index}>
              <div className="question-title">
                <div className="question-icon">?</div>
                <h2>{pergunta.texto}</h2>
              </div>

              <div className="answers">
                {pergunta.alternativas.map((alternativa) => {
                  const selecionada = respostas[spotAtual]?.[index] === alternativa;

                  return (
                    <button
                      key={alternativa}
                      className={selecionada ? "answer selected" : "answer"}
                      onClick={() => escolherResposta(index, alternativa)}
                    >
                      {index === 1 ? (
                        <div className="range-answer">
                          {alternativa.split(" / ").map((parte) => {
                            const lower = parte.toLowerCase();

                            let classe = "range-box";

                            if (lower.includes("flat")) classe += " flat-box";
                            if (lower.includes("3bet nai")) classe += " nai-box";
                            if (lower.includes("all-in") || lower.includes("allin")) classe += " allin-box";

                            return (
                              <div className={classe} key={parte}>
                                {parte}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <span>{alternativa}</span>
                      )}

                      {selecionada && <strong>✓</strong>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <button className="finish-button" onClick={() => setMostrarResultado(true)}>
            📩 ENVIAR
          </button>

        {mostrarResultado && (
          <div className="resultado">
            <h3>Resposta enviada ✅</h3>
            <p>Consulte o gabarito no final da aula.</p>
          </div>
        )}

          <div className="navigation-buttons">
            <button onClick={voltarSpot}>
              {spotAtual === 0 ? "← INÍCIO" : "← VOLTAR"}
            </button>

            <button onClick={proximoSpot} disabled={spotAtual === questoes.length - 1}>
              PRÓXIMO →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;