

 var text = 'Rato roeu a roupa do Rei de roma'
     var palavras = text.split(' ')
         for (let i = 0; i< palavras.length; i++){
// Alert(palavras[i])

          if("Rato" === palavras[i]){
          palavras[i] = 'cachorro'
      }
}
// alert(palavras.join('-').replace('roma', 'grécia'))
    
// Faça um script que conte quantas vezes Letra 'o'
// Letra 'o' (minúscula) aparece na frase.

var soma = 0
for (let i = 0; i < palavras.length;i++){
    if("o" === palavras[i]){
        soma++
       }
}
// alert(soma)
// alert(text)

