//document.writeln('Hello world!')

var conainer = document.getElementById('container') // pegando div do html 
var elemento = document.createElement('button') // criando um botão 
elemento.textContent = 'Buttton' // define o conteúdo textual do elemento
elemento.style.backgroundColor = '#00ff00' // é possivel estilizar os elementos
elemento.id = 'btn' // adiciona um id ao elemento 
elemento.className = 'btn' // definir uma classe ao elemento,
// .classList também pode ser usado se for adicionar mais de uma classe

function Acao(){
    alert("Ação")
}
alert("Depois da Ação")

conainer.appendChild(elemento) // adiciona um elemento filho 

texto = 'Literal'
classe = 'btn'
conainer.innerHTML += `<button class="btn">Literal</button>` // Literal de valores dinâ
conainer.innerHTML += `<button class="${classe}">${texto}</button>` // Literal 

var conainer = document.getElementById('container')

    var pessoa = [
    {
     // JSON -> estrutura de dados para representar um objeto
         "nome": "lena",
         "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutXqwF50fonocPg1yFT76GtpBE2uw6z1T4g&s.",
         "post": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutXqwF50fonocPg1yFT76GtpBE2uw6z1T4g&s.",
         "descricao": "text"
    },{
  
         "nome": "Cristiano",
         "foto": "http://127.0.0.1:5500/front-end/images/77777.jpeg",
         "post":  "http://127.0.0.1:5500/front-end/images/77777.jpeg",
         "descricao": "Cristiano"
    },{
         "nome": "Cristiano",
         "foto": "http://127.0.0.1:5500/front-end/images/77777.jpeg",
         "post": "http://127.0.0.1:5500/front-end/images/77777.jpeg",
         "descricao": "Cristiano"
     },{
         "nome": "Ronaldinho",
         "foto": "http://127.0.0.1:5500/front-end/images/022.jpg",
         "post": "http://127.0.0.1:5500/front-end/images/022.jpg",
         "descricao": "Ronaldinho"
     },]

for(let i = 0; i<pessoa.length;i++){
    conainer.innerHTML += `  
        <div class="card">

            <img class="img" src="${pessoa[i].post}" 
            width="300" height="200"></img>

            <img class="avatar" src="${pessoa[i].foto}"
            width="50" height="50"></img>

            <p> ${pessoa[i].descricao}</p>
        </div>

    </div>
`

}



