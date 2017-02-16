// GO!
var navState = {
	showing: true,
}
var navMenu = document.querySelector('.nav-menu')
var navButton = document.querySelector('.navbutton')

navButton.addEventListener('click',function(){
	if (navState.showing) {
		navMenu.style.opacity = '0'
		navState.showing = false
	}
	else {
		navMenu.style.opacity = '1'
		navState.showing = true
	}
})

var KEYCODES = {
  f: 70,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var inputNode = document.querySelector('.guestName')
var itemNode = document.querySelector('.guest-list')
inputNode.addEventListener('keydown', function(callback){
  if (callback.keyCode === KEYCODES.enter) {
    console.log(callback.target.value)
    var liNode = document.createElement('li')
    liNode.innerHTML += callback.target.value
    itemNode.appendChild(liNode)
    callback.target.value = ''
    }
})

