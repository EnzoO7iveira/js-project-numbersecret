// let tittle = document.querySelector('h1');
// tittle.innerHTML = 'Jogo do número secreto'

// let paragrafo = document.querySelector( 'p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
let listasDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;
mensagemInicial()
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};
function mensagemInicial() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
};


function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoTela('p', `O número é menor que ${chute}`)
        } else {
            exibirTextoTela('p', `O número é maior que ${chute}`)
        }
        tentativas++
        limparCampo()
    }
};

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listasDeNumerosSorteados.length

    if(quantidadeElementos == numeroLimite){
        listasDeNumerosSorteados == []
    }


    if (listasDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero()
    }else {
        listasDeNumerosSorteados.push(numeroEscolhido)
        console.log(listasDeNumerosSorteados)
        return numeroEscolhido
    }
};

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero()
    limparCampo()
    tentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled' , true )
}



