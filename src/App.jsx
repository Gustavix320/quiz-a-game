import { useState } from "react";
import "./App.css";

const questoes = [
  {
    imagem: "/spots/spot1.png",
    spot: "SPOT 1",
    titulo: "Q4s SB x BTN",
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
        correta: "10% flat / 15% 3bet NAI / 5% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot2.png",
    spot: "SPOT 2",
    titulo: "K5s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "72% field left", players: "318/440", blinds: "100 / 200 (25)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Flat",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "10% flat / 5% 3bet NAI / 10% all-in",
          "15% flat / 0% 3bet NAI / 15% all-in",
          "25% flat / 0% 3bet NAI / 0% all-in",
        ],
        correta: "15% flat / 0% 3bet NAI / 15% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot3.png",
    spot: "SPOT 3",
    titulo: "A8s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "68% field left", players: "299/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "3bet All In",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "5% flat / 10% 3bet NAI / 20% all-in",
          "15% flat / 5% 3bet NAI / 5% all-in",
          "25% flat / 0% 3bet NAI / 0% all-in",
        ],
        correta: "5% flat / 10% 3bet NAI / 20% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot4.png",
    spot: "SPOT 4",
    titulo: "J9s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "74% field left", players: "326/440", blinds: "50 / 100 (12)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Flat",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "20% flat / 5% 3bet NAI / 0% all-in",
          "10% flat / 10% 3bet NAI / 5% all-in",
          "0% flat / 15% 3bet NAI / 15% all-in",
        ],
        correta: "20% flat / 5% 3bet NAI / 0% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot5.png",
    spot: "SPOT 5",
    titulo: "KTo SB x BTN",
    info: { torneio: "MTT - PKO", fase: "70% field left", players: "308/440", blinds: "100 / 200 (25)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Fold",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "0% flat / 0% 3bet NAI / 0% all-in",
          "10% flat / 5% 3bet NAI / 5% all-in",
          "20% flat / 0% 3bet NAI / 10% all-in",
        ],
        correta: "0% flat / 0% 3bet NAI / 0% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot6.png",
    spot: "SPOT 6",
    titulo: "A5o SB x BTN",
    info: { torneio: "MTT - PKO", fase: "66% field left", players: "291/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "3bet NAI",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "5% flat / 20% 3bet NAI / 5% all-in",
          "15% flat / 0% 3bet NAI / 15% all-in",
          "25% flat / 0% 3bet NAI / 0% all-in",
        ],
        correta: "5% flat / 20% 3bet NAI / 5% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot7.png",
    spot: "SPOT 7",
    titulo: "T8s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "73% field left", players: "321/440", blinds: "50 / 100 (12)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Flat",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "25% flat / 0% 3bet NAI / 0% all-in",
          "10% flat / 10% 3bet NAI / 5% all-in",
          "0% flat / 5% 3bet NAI / 20% all-in",
        ],
        correta: "25% flat / 0% 3bet NAI / 0% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot8.png",
    spot: "SPOT 8",
    titulo: "K7s SB x BTN",
    info: { torneio: "MTT - PKO", fase: "69% field left", players: "304/440", blinds: "100 / 200 (25)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "3bet All In",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "10% flat / 0% 3bet NAI / 20% all-in",
          "15% flat / 10% 3bet NAI / 0% all-in",
          "25% flat / 0% 3bet NAI / 0% all-in",
        ],
        correta: "10% flat / 0% 3bet NAI / 20% all-in",
      },
    ],
  },
  {
    imagem: "/spots/spot9.png",
    spot: "SPOT 9",
    titulo: "Q9o SB x BTN",
    info: { torneio: "MTT - PKO", fase: "71% field left", players: "312/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Fold",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "0% flat / 0% 3bet NAI / 0% all-in",
          "10% flat / 5% 3bet NAI / 10% all-in",
          "20% flat / 5% 3bet NAI / 0% all-in",
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

if (mostrarResultado === "final") {
  let totalQuestoes = 0;
  let totalAcertos = 0;

  const resultadoPorSpot = questoes.map((spot, spotIndex) => {
    let acertosSpot = 0;

    spot.perguntas.forEach((pergunta, perguntaIndex) => {
      totalQuestoes++;

      const respostaAluno = respostas[spotIndex]?.[perguntaIndex];

      if (respostaAluno === pergunta.correta) {
        acertosSpot++;
        totalAcertos++;
      }
    });

    return {
      spot: spot.spot,
      titulo: spot.titulo,
      acertos: acertosSpot,
      total: spot.perguntas.length,
    };
  });

  const porcentagemFinal = Math.round((totalAcertos / totalQuestoes) * 100);

  return (
    <main className="app">
      <section className="right-panel final-panel">
        <div className="spot-label">
          <span></span>
          GABARITO FINAL
          <span></span>
        </div>

        <h1>Resultado de {nome}</h1>

        <div className="resultado final-result">
          <h3>Resultado geral</h3>
          <p>
            Você acertou {totalAcertos} de {totalQuestoes} questões.
          </p>
          <p>Porcentagem final: {porcentagemFinal}%</p>
        </div>

        <div className="gabarito-list">
          {resultadoPorSpot.map((item) => (
            <div className="gabarito-card" key={item.spot}>
              <strong>
                {item.spot} — {item.titulo}
              </strong>
              <span>
                {item.acertos} / {item.total} acertos
              </span>
            </div>
          ))}
        </div>

        <button
          className="finish-button"
          onClick={() => {
            setIniciado(false);
            setNome("");
            setSpotAtual(0);
            setRespostas({});
            setMostrarResultado(false);
          }}
        >
          REINICIAR QUIZ
        </button>
      </section>
    </main>
  );
}

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

              {spotAtual === questoes.length - 1 ? (
                <button onClick={finalizarQuiz}>
                  FINALIZAR →
                </button>
              ) : (
                <button onClick={proximoSpot}>
                  PRÓXIMO →
                </button>
              )}
          </div>
        </div>
      </section>
    </main>
  );

 function finalizarQuiz() {
  setMostrarResultado("final");
}

}

export default App;