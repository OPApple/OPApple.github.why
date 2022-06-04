const defList = ["Päivä (ひ、にち)", "yksi (いち、ひと)", "Valtio (こく、くに)", "Henkilö (ひと、じん)", "Vuosi (ねん)"]
const kanjiList = ["日", `一`, `国`, `人`, `年`]

var max = defList.length - 1
var rand = Math.round((Math.random() * max))

function pickQuestion (){
    rand = Math.round((Math.random() * max))
    document.getElementById('question').innerHTML = defList[rand]

}


function startUp (){
    document.getElementById('question').innerHTML = defList[rand]

}

function showAnswer(){
    document.getElementById('answer').innerHTML = kanjiList[rand]
}

function next(){
    pickQuestion()
    document.getElementById('answer').innerHTML = ""
}

startUp()