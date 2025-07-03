function Calculadora(){

    var a = parseFloat(prompt("digite o primeiro valor:"))
    var b = parseFloat(prompt("digite o segundo valor:"))
    var tipo = prompt("Informe o tipe de operação(+,-,*,/).")

    if(tipo === "+"){
        alert("soma = "+(a+b))
    }
    if(tipo ==="-"){
        alert("subtração = "+(a-b))
    } 
    if(tipo ==="*") {
        alert("multiplicação = " +(a * b))
    }
    if(tipo ==="/"){
        alert("divisão = "+(a/b))
    }
}