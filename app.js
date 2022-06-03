const defList = ["Päivä (ひ、にち)", "yksi (いち、ひと)", "Valtio (こく、くに)", "Henkilö (ひと、じん)", "Vuosi (ねん)"]
const kanjiList = ["日", `一`, `国`, `人`, `年`]

let max = defList.length - 1
var rand = Math.round((Math.random() * max))

function pickQuestion (){

    document.getElementById('question').innerHTML = defList[rand]


}
pickQuestion()

function showAnswer(){
    document.getElementById('answer').innerHTML = kanjiList[rand]
    console.log(kanjiList[rand])
}

function next(){
    
}
