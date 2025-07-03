// Escreva um algorítmo que verifica se um número 
// digitado pelo usuário é primo e imprime uma mensagem 
// de acordo; 'E primo!' ou 'não é primo'.
function primos() {

    var n = parseInt(prompt("forneça um número inteiro maior que "))

   var flag = true

for (let i = 2; i < n; i++) {
    if (n % 1 === 0) {
        (flag = false)
    }
}

if (flag) {
    alert("É primo")
} else {
    alert("não é primo")
}
}
