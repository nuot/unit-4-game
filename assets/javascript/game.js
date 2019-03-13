let goalNum 
let currNum
let wins = 0
let losses = 0
let isDone = false

const init = _ => {
    isDone = false
    currNum = 0 
    goalNum = Math.floor(Math.random() * 100) +1
    document.querySelector('#goalNum').textContent = `Goal Number: ${goalNum}`
    document.querySelector('#currNum').textContent = `Current Value: ${currNum}`
    document.querySelector('#buttons').innerHTML =''
    document.querySelector('#results').textContent =''
    for (let i = 0; i < 4; i++){
        let btnElem = document.createElement('button')
        btnElem.className = 'numBtn'
        btnElem.textContent ='???'
        btnElem.setAttribute('data-value', Math.floor(Math.random()*20)+1)
        document.querySelector('#buttons').append(btnElem)
    }
}


document.addEventListener('click', e => {
    if(e.target.className === 'numBtn' && !isDone){
        currNum += parseInt(e.target.dataset.value)
        document.querySelector('#currNum').textContent = `Current Value: ${currNum}`
        if (currNum === goalNum){
            alert('You Won!')
            document.querySelector('#results').textContent ='Great! You Won!'
            wins ++
            document.querySelector('#wins').textContent = `Wins: ${wins}`
            isDone = true
        } else if (currNum > goalNum){
            alert('You Lost!')
            losses ++
            document.querySelector('#results').textContent ='You Lost! Try Again'
            document.querySelector('#losses').textContent = `Losses: ${losses}`
            isDone = true
        }
    }
})



init()
