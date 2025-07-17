var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); // lines é um array
//==========================================================

let a = parseInt(lines[0])
let x = 3.14159*a*a
console.log("A="+x.toFixed(4))