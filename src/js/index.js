function generateRandomNumber () {
  const randomFloat = Math.random()
  const randomNumber = Math.floor(randomFloat * 6) + 1
  return randomNumber
}

function changeNumber () {
  const randomNumber = generateRandomNumber()
  let elements = []
  switch (randomNumber) {
    case 1:
      hideDice()
      elements = document.querySelectorAll('.one')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline'
      }
      break
    case 2:
      hideDice()
      elements = document.querySelectorAll('.two .up-left, .two .down-right')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline'
      }
      break
    case 3:
      hideDice()
      elements = document.querySelectorAll('.three .up-left, .three .center, .three .down-right')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline'
      }
      break
    case 4:
      hideDice()
      elements = document.querySelectorAll('.four .up-left, .four .up-right, .four .down-left, .four .down-right')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline'
      }
      break
    case 5:
      hideDice()
      elements = document.querySelectorAll('.five .up-left, .five .up-right, .five .center, .five .down-left, .five .down-right')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline'
      }
      break
    case 6:
      hideDice()
      elements = document.querySelectorAll('.six .up-left, .six .up-right, .six .left-mid, .six .right-mid, .six .down-left, .six .down-right')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'inline'
      }
      break
  }
}

function hideDice () {
  const elements = document.querySelectorAll('.one, .up-left, .up-right, .down-left, .down-right, .center, .left-mid, .right-mid')
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none'
  }
}

const button = document.querySelector('.random-button')

button.addEventListener('click', changeNumber)
