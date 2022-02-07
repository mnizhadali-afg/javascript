let btn = document.querySelectorAll('button')

for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML)
    makeAnimation(buttonInnerHTML)
  })
}

document.addEventListener('keypress', function (e) {
  makeSound(e.key)
  makeAnimation(e.key)
})

// document.addEventListener('keyup', function (e) {
//   removeAnimation(e.key)
// })


function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('./sounds/crash.mp3')
      audio.play()
      break;
    case 'a':
      var audio = new Audio('./sounds/kick-bass.mp3')
      audio.play()
      break;
    case 's':
      var audio = new Audio('./sounds/snare.mp3')
      audio.play()
      break;
    case 'd':
      var audio = new Audio('./sounds/tom-1.mp3')
      audio.play()
      break;
    case 'j':
      var audio = new Audio('./sounds/tom-2.mp3')
      audio.play()
      break;
    case 'k':
      var audio = new Audio('./sounds/tom-3.mp3')
      audio.play()
      break;
    case 'l':
      var audio = new Audio('./sounds/tom-4.mp3')
      audio.play()
      break;
    default:
      console.log('wrong key pressed')
      break;
  }
}

function makeAnimation(currentKey) {
  var currentBtn = `.${currentKey}`
  document.querySelector(currentBtn).classList.add('pressed')

  setTimeout(function () {
    document.querySelector(currentBtn).classList.remove('pressed')
  }, 100)
}

// function removeAnimation(currentKey) {
//   var btn = `.${currentKey}`
//   document.querySelector(btn).classList.remove('pressed')
// }