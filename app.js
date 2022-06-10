const days = []
const months = []

for (let i = 1; i <= 365; i++){
    days.push(i)
}

for (let i = 1; i <= 12; i++){
    months.push(i)
}

function calculateDeath (){
    let ranDays = Math.round(Math.random() * (30 - 1) + 1)
    let ranMonths = Math.round(Math.random() * (12 - 1) + 1)
    let ranYear = Math.round(Math.random() * (2100 - 2022) + 2022)

    let dd = ranDays + "." + ranMonths + "." + ranYear

    console.log(dd)

    document.getElementById('death').innerHTML = dd 
}