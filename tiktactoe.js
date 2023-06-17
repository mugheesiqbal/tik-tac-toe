const gameBoared=document.querySelector("#gameboared");
const gameInfo=document.querySelector("#info");
const boaredCells=[
    "", "", "", "", "", "", "", "", ""
]
let go="circle";
gameInfo.textContent="circle  goes first"

function createGame(){
    boaredCells.forEach((_cell,index)=>{
    const cellElement= document.createElement('div')
    cellElement.classList.add('square')
    cellElement.id =index
    cellElement.addEventListener('click',addGo)
    gameBoared.append(cellElement)
    })
  
}
createGame()
function addGo(e){
const goDisplay=document.createElement('div')
goDisplay.classList.add(go)
e.target.append(goDisplay)
go = go === "circle"? "cross" :"circle"
gameInfo.textContent="It Is Now " + go + "s' go."
e.target.removeEventListener("click",addGo)
checkScore()

} 
function checkScore(){
    const allSqaure= document.querySelectorAll(".square")
    const winningCombo =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3],[1,4],[2,5],
        [0,4,8],[2,4,6]
    ]

    winningCombo.forEach(array=>{
        const crossWin=array.every(cell=>
          allSqaure[cell].firstChild?.classList.contains('cross'))
          if(crossWin){
            gameInfo.textContent="Cross Win!"
            allSqaure.forEach(square=>square.replacewith(square.cloneNode(true)))
          return
        }
        })
        winningCombo.forEach(array=>{
            const circleWin=array.every(cell=>
              allSqaure[cell].firstChild?.classList.contains('circle'))
              if(circleWin){
                gameInfo.textContent="Circle Win!"
                allSqaure.forEach(square=>square.replacewith(square.cloneNode(true)))
              return
            }
            })
    }
    
   

