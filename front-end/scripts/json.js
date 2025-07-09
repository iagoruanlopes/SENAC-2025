function JSON() {

// JSON - javaScript object notation

var pessoa = { // JSON -> estrutura de dados para representar um objeto
    "nome": "lena", 
    "foto": "http://..",
    "post": "http://..",
    "descricao": "text"
}

console.log(pessoa.nome) // Para acessar atributos do objeto, 
// iltiliza-se o operador '.' seguido da chave. Ex: 'pessoa.nome',
// onde 'pesoa' é o objeto e 'nome' é o atributo

pessoa,nome = "Luana"   // Para editar o atributo de um objeto, acessamos
// acessamos o atributo eultilizamos o operador de atribuição '='
// para definir o novo valor.

var produto = {
    "nome": "celular 01",
    "id": 0,
    "descricao": "descrição",
    "preso": "1000.00"

}

var produtos = // lista de produtos
   [
       { 
         "nome": "celular 01",
         "id": 0,
         "descricao": "descrição",
         "preso": "1000.00" 
        },
        {
         "nome": "celular 01",
         "id": 1,
         "descricao": "descrição",
         "preso": "1000.00" 
        },
        {
         "nome": "celular 01",
         "id": 2,
         "descricao": "descrição",
         "preso": "1000.00" 
        },
        {
         "nome": "celular 01",
         "id": 3,
         "descricao": "descrição",
         "preso": "1000.00" 
        }
    ]

    console.log(produto[2]) // Para acessar um ítem da lista
// utilizamos o index(lista[x])
}
    var lista = [ 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
