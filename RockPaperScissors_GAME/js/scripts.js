var computer = ['rock','paper','scissors']

var humanImg = document.getElementById('rock')
var botImg = document.getElementById('scissors')
var resultImg = document.getElementById('paper')

function resultWinner(human, bot){
    humanImg.src = `images/${human}.png`
    botImg.src = `images/${bot}.png`
    if(human == bot){
        resultImg.src = `images/draw.webp`
        resultImg.style.boxShadow = "0 0 20px 20px yellow"
    }
    else if((human=="paper" && bot=="rock") || (human=="scissors" && bot=="paper") || (human=="rock" && bot=="scissors")){
        resultImg.src = `images/youwin.jpg`
        resultImg.style.boxShadow = "0 0 20px 20px green"
    }
    else if((bot=="paper" && human=="rock") || (bot=="scissors" && human=="paper") || (bot=="rock" && human=="scissors")){
        resultImg.src = `images/youlose.jpg`
        resultImg.style.boxShadow = "0 0 20px 20px red"
    }
}
function MyChoice(choice){
    var humanChoice, botChoice
    botChoice = computer[Math.floor(Math.random()*computer.length)]
    humanChoice = choice.id
    return resultWinner(humanChoice, botChoice)
}
function reset(){
    window.location.reload()
}