
const container = document.getElementById('container')

// #Region

var topo = document.createDocumentFragment()


var containerTopo = document.createElement('div')
containerTopo.className = 'topo'

var logo = document.createElement('img')
logo.setAttribute('src', 'https://liveondemand.com.br/wp-content/uploads/2019/05/logo-SENAC.png')
logo.setAttribute('alt', 'Logo')
logo.setAttribute('width', '70')
logo.setAttribute('heigth', '70')

var nav = document.createElement('nav')
var sobre = document.createElement('a')
sobre.setAttribute('href', '#')
sobre.textContent = "Sobre"

var servicos = document.createElement('a')
servicos.setAttribute('href', '#')
servicos.textContent = "Serviço"

var login = document.createElement('a')
login.setAttribute('href', '#')
login.textContent = "Login"

nav.append(sobre, servicos, login)
containerTopo.append(logo, nav)
topo.appendChild(containerTopo)
container.appendChild(topo)

// Use o  "// #Regio" Para Delimitar  áreas do Código
// Podendo Ocultá-las ou Mostrá-las Quando Quiser

// #region TOPO 

//#region MAIN

var div = document.createElement('div')
containerTopo.className = 'meio'


containerTopo.append(meio)
container.appendChild(meio)

container.appendChild(div)

// #endregion

