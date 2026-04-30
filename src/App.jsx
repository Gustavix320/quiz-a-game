import { useState } from "react";
import "./App.css";
import { supabase } from "./supabaseClient";

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
        texto: "QUESTÃO 2: QUAL BOTTON DO NOSSO RANGE QUE VAMOS DAR VPIP ?",
        alternativas: [
          "T9o, 45s, J5s, Q3s",
          "TJo, 84s, J7s, Q5s",
          "TQo, 87s, J8s, Q7s",
          "JQo, 98s, J9s, Q8s",
        ],
        correta: "T9o, 45s, J5s, Q3s",
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
      texto: "QUESTÃO 2: SE POR ACASO EXISTE SHOVE NESSE SPOT, QUAL O RANGE QUE MAIS SE APROXIMA DA TEORIA?",
      alternativas: [
        "22 ~ 88 / TQs, JTs / A2s - A5s / A9o - AJo",
        "22 - 55 / KTs, JQs / A2s - A8s / ATo - AQo",
        "22 - QQ / J9s, JTs / K6s - K9s / A2s - A8s e AQs AKs / A8o - AKo",
        "Não tenho shove nesse spot",
      ],
      correta: "22 - QQ / J9s, JTs / K6s - K9s / A2s - A8s e AQs AKs / A8o - AKo",
    },
  ],
},

  {
    imagem: "/spots/spot3.png",
    spot: "SPOT 3",
    titulo: "68o BTN x CO",
    info: { torneio: "MTT - PKO", fase: "68% field left", players: "299/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Fold",
      },
      {
        texto: "QUESTÃO 2: QUAL O BOTTOM DO NOSSO RANGE?",
        alternativas: [
          "JTo, A4o, 45s, T7s, Q5s",
          "TQo, A7o, 78s, J8s, Q7s",
          "JQo, A9o, 98s, J9s, Q8s",
          "89o, A2o, 34s, J3s, Q2s",
        ],
        correta: "JTo, A4o, 45s, T7s, Q5s",
      },
    ],
  },

  {
    imagem: "/spots/spot4.png",
    spot: "SPOT 4",
    titulo: "RFI HJ",
    info: { torneio: "MTT - PKO", fase: "74% field left", players: "326/440", blinds: "50 / 100 (12)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Raise", "Limp", "Fold", "All In"],
        correta: "All In",
      },
      {
        texto: "QUESTÃO 2: QUAL BOTTON DE OPEN NESSE SPOT?",
        alternativas: [
          "A2o, K7o, J8o, 22, 45s, J4s, Q2s, K2s",
          "A4o, K9o, JTo, 22, 67s, J7s, Q6s, K4s",
          "A7o, KTo, JTo, 22, 78s, J8s, Q7s, K6s",
          "A8o, KTo, JQo, 22, 98s, J9s, Q8s, K7s",
        ],
        correta: "A4o, K9o, JTo, 22, 67s, J7s, Q6s, K4s",
      },
    ],
  },

  {
    imagem: "/spots/spot5.png",
    spot: "SPOT 5",
    titulo: "66 vs Rejam SB",
    info: { torneio: "MTT - PKO", fase: "70% field left", players: "308/440", blinds: "100 / 200 (25)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUANTOS % DE OPEN NESSE SPOT?",
        alternativas: ["30%", "37%", "42%", "54%"],
        correta: "42%",
      },
      {
        texto: "QUESTÃO 2: QUAL BOTTOM DE CALL VS SHOVE ?",
        alternativas: [
          "66+, A4s+, A8o+, JQo+, JTs+",
          "44+, A5s+, A9o+, JQo+, Q9s+",
          "33+, A7s+, A9o+, KQo+, JTs+",
          "22+, A3s+, A7o+, JQ+, J9s+",
        ],
        correta: "33+, A7s+, A9o+, KQo+, JTs+",
      },
    ],
  },

  {
    imagem: "/spots/spot6.png",
    spot: "SPOT 6",
    titulo: "J8s CO vs HJ",
    info: { torneio: "MTT - PKO", fase: "66% field left", players: "291/440", blinds: "250 / 500 (60)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet All In", "Fold"],
        correta: "Flat",
      },
      {
        texto: "QUESTÃO 2: QUAL RANGE DE SHOVE QUE MAIS SE APROXIMA DA TEORIA NESSE SPOT?",
        alternativas: [
          "66 - TT, JQs - KJs, A4s - A5s, AQo - AKo",
          "22 - 55, JTs, QTs, KTs, A2s - A5s, ATo - AQo",
          "88 - JJ, J9s, Q9s, K7s - K9s, A2s - A6s, AJo - AKo",
          "Não tem range de shove",
        ],
        correta: "88 - JJ, J9s, Q9s, K7s - K9s, A2s - A6s, AJo - AKo",
      },
    ],
  },

  {
    imagem: "/spots/spot7.png",
    spot: "SPOT 7",
    titulo: "JJ vs UTG1",
    info: { torneio: "MTT - PKO", fase: "73% field left", players: "321/440", blinds: "50 / 100 (12)" },
    perguntas: [
      {
        texto: "QUESTÃO: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "10% flat, 5% 3bet NAI, 0% all-in",
          "16% flat, 2% 3bet NAI, 0% Allin",
          "13% flat, 4% 3bet NAI, 0% all-in",
          "20% flat, 4% 3bet NAI, 0% all-in",
        ],
        correta: "16% flat, 2% 3bet NAI, 0% Allin",
      },
    ],
  },

  {
    imagem: "/spots/spot8.png",
    spot: "SPOT 8",
    titulo: "79s CO vs HJ",
    info: { torneio: "MTT - PKO", fase: "69% field left", players: "304/440", blinds: "100 / 200 (25)" },
    perguntas: [
      {
        texto: "QUESTÃO 1: QUAL A MELHOR AÇÃO?",
        alternativas: ["Flat", "3bet NAI", "3bet all in", "Fold"],
        correta: "Flat",
      },
      {
        texto: "QUESTÃO 2: QUAL A FREQUÊNCIA APROXIMADA?",
        alternativas: [
          "18% flat, 5% 3bet NAI, 0% 3bet all in",
          "22% flat, 7% 3bet NAI, 0% 3bet all in",
          "26% flat, 5% 3bet NAI, 2% 3bet all in",
          "32% flat, 0% 3bet NAI, 2% 3bet All in",
        ],
        correta: "32% flat, 0% 3bet NAI, 2% 3bet All in",
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
  const [horarioFinal, setHorarioFinal] = useState("");

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

function formatarHorario(dataISO) {
  if (!dataISO) return "";

  const data = new Date(dataISO);

  return data.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
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

        {horarioFinal && (
          <p className="final-time">
            Enviado em: {formatarHorario(horarioFinal)}
          </p>
        )}

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

async function finalizarQuiz() {
  let totalQuestoes = 0;
  let totalAcertos = 0;

  const resultadoPorSpot = questoes.map((spot, spotIndex) => {
    let acertosSpot = 0;

    const perguntas = spot.perguntas.map((pergunta, perguntaIndex) => {
      totalQuestoes++;

      const respostaAluno = respostas[spotIndex]?.[perguntaIndex] || "";
      const acertou = respostaAluno === pergunta.correta;

      if (acertou) {
        acertosSpot++;
        totalAcertos++;
      }

      return {
        pergunta: pergunta.texto,
        respostaAluno,
        respostaCorreta: pergunta.correta,
        acertou,
      };
    });

    return {
      spot: spot.spot,
      titulo: spot.titulo,
      acertos: acertosSpot,
      total: spot.perguntas.length,
      perguntas,
    };
  });

  const porcentagemFinal = Math.round((totalAcertos / totalQuestoes) * 100);

// 🔥 SALVA NO SUPABASE E PEGA O HORÁRIO GERADO
const { data, error } = await supabase
  .from("quiz_resultados")
  .insert([
    {
      nome: nome || "Sem nome",
      total_acertos: totalAcertos,
      total_questoes: totalQuestoes,
      porcentagem: porcentagemFinal,
      respostas: resultadoPorSpot,
    },
  ])
  .select();

if (error) {
  console.error("Erro ao salvar:", error);
  alert("Erro ao salvar resultado");
  return;
}

const horarioSalvo = data?.[0]?.criado_em;

if (horarioSalvo) {
  setHorarioFinal(horarioSalvo);
}

console.log("Resultado salvo com sucesso!");

setMostrarResultado("final");
}

}

export default App;