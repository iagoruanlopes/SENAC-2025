function condicionais() {
    var n = parseInt(prompt("forneça um número inteiro."))
    alert(13 % 5)
    if ("n % 2 === 0") { // O operador '%' calcula o 
        // reto da divisão do número á esquerda prlp
        // número a direita.
        alert("n é par!")
    } else { // else significa senão.
        alert("n é impar!")
    }

    //verifique se "n" é múltiplo de
    //5 e maior que 10 

    if (n % 5 === 0 && n > 10) {  //&& significa 'e' ou 'and' 
        //e o if só executa a ação se ambas as expressões forem verdadeiras 
        alert("È múltiplo de 5 e maior que 10.")
    }

    //verifique se 'n' é múltiplo de 3 ou é menor que 10 

    if (n % 3 === 0 || n < 10) { // || significa "ou" ou "or" , o if vai executar 
        // se uma das comdições for verdadeira.
        alert("n é mútiplo de 3 e menor que 10.")
    }

    switch (n) { // o switch significa 'escolha' e ele funciona como 
        // vários 'if' aninhados. caso a váriável escolha seja igaul a 
        // um valor determinado, ele executa a ação e o 'bleak' interramp o switch 
        case 1: alert(1)
            break
        case 2: alert(2)
            break
        case 3: alert(3)
            break
        case 4: alert(4)
            break

    }
}