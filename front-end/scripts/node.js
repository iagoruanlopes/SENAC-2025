function tabuleiro(){
}

let tabuleiro = ['', '', '', '', '', '' , '', '', ''];
let jogador = 'x';

function jogar(posicao) {
    if (tabuleiro[posicao] === ''){
    tabuleiro[posicao] = jogador;
    jogador = jogador === 'X' ? 'O' : 'x';
    imprimirTabuleiro();
    VerificarVencedor();
 }
}

function imprimirTabuleiro() {
    console.log(` ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]} `);
    console.log(`-----------`)
    console.log(` ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]} `);
    console.log(`-----------`)
    console.log(` ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]} `);
}

function VerificarVencedor() {
    let combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < combinacoes.length; i++) {
    let [a, b, c] = combinacoes[i];
    if (tabuleiro[a] === tabuleiro[b] && tabuleiro[b] === tabuleiro[c] && tabuleiro[a] !== ''){
    console.log(`Jogador ${tabuleiro[a]} venceu!`);
    return;    
   }
   }
}

// Exemplo de uso:
jogar(0); // Jogador X marca a posição 0
jogar(1); // Jogador O marca a posição 1 
jogar(2); // Jogador X marca a posição 2