const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando começou a Segunda Guerra Mundial?",
        alternativas: [
            {
                texto: "1939",
                afirmacao: "Certa resposta, a Segunda Guerra Mundial começou após a invasão da Alemanha Nazista à Polônia."
            },
            {
                texto: "1914",
                afirmacao: "Resposta errada, este ano foi quando teve início a Primeira Guerra Mundial."
            }
        ]
    },
    {
        enunciado: "O que provocou a entrada dos E.U.A na guerra?",
        alternativas: [
            {
                texto: "Ataque à Pearl Harbor",
                afirmacao: "Certa resposta, os Estados Unidos entraram na guerra após o Japão atacar a base de Pearl Harbor."
            },
            {
                texto: "Invasão à Nova York",
                afirmacao: "Resposta incorreta, nunca houve invasões diretas ao E.U.A no período de guerra."
            }
        ]
    },
    {
        enunciado: "Quem se invadiu primeiro, U.R.S.S ou Alemanha?",
        alternativas: [
            {
                texto: "União das Repúblicas Socialistas Soviéticas",
                afirmacao: "Resposta incorreta, a U.R.S.S invadiu a Alemanha perto do final da guerra."
            },
            {
                texto: "Alemanha Nazista",
                afirmacao: "Certa resposta, a Alemanha invadiu a U.R.S.S em 1941, sob a Operação Barbarossa."
            } 
        ]
    },
    {
        enunciado: "Qual foi a grande batalha nos mares que ocorreu na guerra?",
        alternativas: [
            {
                texto: "Guerra do Pacífico",
                afirmacao: "Certa resposta, as lutas nos mares do Pacífico ocorreram de 1941 a 1945."
            },
            {
                texto: "Batalha das Toninhas",
                afirmacao: "Resposta incorreta, este foi um evento envolvendo a Marinha brasileira, durante a Primeira Guerra Mundial."
            }
        ]
    },
    {
        enunciado: "Quando se encerrou a Segunda Guerra Mundial?",
        alternativas: [
            {
                texto: "1918",
                afirmacao: "Resposta incorreta, este foi o ano de fim da Primeira Guerra Mundial."
            },
            {
                texto: "1945",
                afirmacao: "Certa resposta, este foi o ano de fim da Segunda Guerra Mundial."
            } 
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Agorinha...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();