//document.writeln('Hello world!')

var conainer = document.getElementById('container') // pegando div do html 
var elemento = document.createElement('button') // criando um botão 
elemento.textContent = 'Buttton' // define o conteúdo textual do elemento
elemento.style.backgroundColor = '#00ff00' // é possivel estilizar os elementos
elemento.id = 'btn' // adiciona um id ao elemento 
elemento.className = 'btn' // definir uma classe ao elemento,
// .classList também pode ser usado se for adicionar mais de uma classe

conainer.appendChild(elemento) // adiciona um elemento filho 

texto = 'Literal'
classe = 'btn'
conainer.innerHTML += `<button class="btn">Literal</button>` // Literal de valores dinâ
conainer.innerHTML += `<button class="${classe}">${texto}</button>` // Literal 

var conainer = document.getElementById('container')

conainer.innerHTML = `  
        <div class="card">
            <div class="img"></div>
            <div class="avatar"></div>
            <p> texto
                texto texto
                texto texto</p>
        </div>

    </div>
`