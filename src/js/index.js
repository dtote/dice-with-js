function randomNumber () {
  const randomFloat = Math.random()
  const randomNumber = Math.floor(randomFloat * 6) + 1
  return randomNumber
}

function changeNumber () {
  const number = document.querySelector('.number')
  number.textContent = `${randomNumber()}`
}

const button = document.querySelector('.random-button')
button.addEventListener('click', changeNumber)
