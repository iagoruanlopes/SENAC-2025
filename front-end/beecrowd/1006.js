var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n'); // lines é um array
//==========================================================

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

var MEDIA = (A * 2 + B * 3 + C * 5) / 10

console.log("MEDIA = "+ MEDIA.toFixed(1))