
var container = document.getElementById('container')
var gameContainer = document.createElement('div') 
gameContainer.className = 'game-container'

container.appendChild(gameContainer)

for(let i = 0; i < 25; i++){
    let cell = document.createElement('div')
    cell.className = 'cell'
    gameContainer.appendChild(cell)
}

flag = true
function CreateSquare(){
    if(document.querySelector('.square')!==null){
        document.querySelector('.square').remove()
    }
    let a = document.createElement('div')
    a.className = 'square'
    a.addEventListener('click', ()=>{
        CreateSquare()
    })
    
    var cells = document.querySelectorAll('.cell')
    var randomIndex = Math.floor(Math.random()*25)
    let randomCell = cells[randomIndex]


    randomCell.appendChild(a)
}

CreateSquare()
