
var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); // lines é um array
//==========================================================

a = parseFloat(lines[0])

console.log("VOLUME = "+ (4/3*3.14159*a**3).toFixed(3))