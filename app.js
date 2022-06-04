const defList = [
    
    "Päivä (ひ、にち)", "yksi (いち、ひと)", "Valtio (こく、くに)", "Henkilö (ひと、じん)", "Vuosi (ねん)", "Suuri (だい、おお)", "Kymmenen (じゅう)",
    "Kaksi (に、ふた)", "Kirja (ほん)", "Keskellä/sisällä (ちゅう、なか)", "Pitkä (なが。い)", "Poistua/lähteä (で)", "Kolme (さん、み)", "Aika (じ、とき)",
    "Mennä (い)", "Nähdä (み)", "Kuu(kausi) (つき)"


]
const kanjiList = ["日", `一`, `国`, `人`, `年`, `大`, `十`, `二`, `本`, `中`, `長`, `出`, `三`, `時`, `行`, `見`, `月`]

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