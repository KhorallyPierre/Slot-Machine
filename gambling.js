const slots = document.querySelector('#slots')
let total = document.querySelector('#total')
const outcome = document.querySelector('#outcome')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
let money = 1000


slots.innerText = [0, 0, 0]
total.innerText = money
outcome.innerText = '"Lets Steal Your Money!" - Sincerely, Every Casino in the World"'

function risk(){
  return Math.ceil(Math.random() * 5)
}
function playSafe(){
  const slot1 = risk()
  const slot2 = risk()
  const slot3 = risk()
  if (slot1 === slot2 && slot2 === slot3){
    money = money + (5 * 10)
    outcome.innerText = 'you win!'
    total.innerText = money
  } else {
    money -= 5
    outcome.innerText = 'you lost!'
    total.innerText = money
  }
  slots.innerText = [slot1, slot2, slot3]
}

function playReckless(){
  const slot1 = risk()
  const slot2 = risk()
  const slot3 = risk()
  if (slot1 === slot2 && slot2 === slot3){
    money = money + (10 * 50)
    money =
    outcome.innerText = 'you win!'
    total.innerText = money
  } else {
    money -= 50
    outcome.innerText = 'you lost!'
    total.innerText = money
  }
  slots.innerText = [slot1, slot2, slot3]
}

min.addEventListener('click', playSafe)
max.addEventListener('click', playReckless)
