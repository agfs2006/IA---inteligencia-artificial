
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na nova era de técnologias a IA se faz presente em nosso cotidiano, ela esta presente em vídeos, audios e imagens, e o que você acha sobre esse novo avanço tecnológico?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Algumas pessoas têm preocupações sobre questões éticas, privacidade e a possibilidade de desemprego, por isso temem o que a IA pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Alguns veem como uma ferramenta revolucionária que pode melhorar vidas e resolver grandes problemas."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, as pessoas costumaram a conversar com a IA, ou o chatGPT, assim podendo tirar duvidas e criar algo novo. Qual dessas questões você pediria ajuda a inteligencia artificial?",
        alternativas: [
            {
                texto: "Para Informações e Explicações; Ajuda com Estudos e Trabalho; Resolução de Problemas.",
                afirmacao: "Muitas pessoas buscam informações sobre tópicos diversos, como ciência, história, tecnologia, e questões práticas do dia a dia; Solicitações para ajuda com deveres de casa, pesquisas acadêmicas, escrita de textos e elaboração de projetos são frequentes; Pedem orientações sobre como resolver problemas específicos, desde questões técnicas até dilemas pessoais."
            },
            {
                texto: " Sugestões e Recomendações; Apoio Emocional e Conversas.",
                afirmacao: "As pessoas também pedem conselhos sobre livros, filmes, música, receitas e até mesmo sugestões para presentes; Algumas pessoas procuram apoio emocional, uma conversa amigável ou uma distração das preocupações diárias."
            }
        ]
    },
    {
        enunciado: "Como a IA impacta o trabalho do futuro. Nesse debate, como você se posicionaria?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas com esses novos avanços.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA e suas tecnologias."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e robos e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética e produtiva."
            }
        ]
    },
    {
        enunciado: "O que esperar do futuro com a Inteligência Artifícial?",
        alternativas: [
            {
                texto: "O futuro da IA promete avanços notáveis em assistência médica, educação, automação e inovação em geral. Ao mesmo tempo, a sociedade deve estar atenta aos desafios éticos e garantir que a IA seja uma força positiva para o bem comum.",
                afirmacao: " As pessoas ainda sentem medo do desconhecido e temem o que pode acontecer."
            },
            {
                texto: "A Inteligência Artificial continua a moldar o panorama tecnológico global de maneiras inimagináveis..",
                afirmacao: "Acelerou o processo de criação de divesas coisas no nosso dia a dia, e tem impulsionado cada vez mais nossa sciedade ao que os antigos diziam 'sociedade futuristica'."
            }
        ]
    },
    {
        enunciado: "Independentemente do lado em que você esteja, uma coisa não dá para negar: a inteligência artificial já está moldando o mercado de trabalho do futuro. ",
        alternativas: [
            {
                texto: "Infelizmente tive que me adaptar á essa nova modernidade.",
                afirmacao: "Infelizmente o medo de perder o controle dessas máquinas me atrapalha o aproveitamento da técnologia."
            },
            {
                texto: "Esse novo avanço foi bom para a sociedade, então estou feliz em acompanhar.",
                afirmacao: "Toda essa nova técnologia vai ser bom para nosso crescimento como seres humanos. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
