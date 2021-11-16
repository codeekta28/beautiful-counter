console.log('This is counter')
// variables
let countValue = document.querySelector('#count')
let counter = 0
// Event
let btns = document.querySelectorAll('.btn')

for (let btn of btns) {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('lowerCount')) {
      counter--
      countValue.textContent = counter
      colorGenerator()
    } else {
      counter++
      countValue.textContent = counter
      colorGenerator()
    }
  })
}
function colorGenerator () {
  if (counter < 0) {
    countValue.style.color = 'red'
  } else if (counter > 0) {
    countValue.style.color = 'green'
  } else {
    countValue.style.color = 'white'
  }
}

