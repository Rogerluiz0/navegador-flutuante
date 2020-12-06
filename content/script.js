window.addEventListener('load' , start)

let directionX, directionY, positionX, positionY, velocidade, element

function start () {
  directionX = 0, directionY = 0, positionX = 0, positionY = 0, velocidade = 1

  element = document.getElementById( 'player' )
  document.addEventListener( 'keydown', teclaDown )
  document.addEventListener( 'keyup', teclaUp )
  setInterval( enterFrame , 1 )
}

function teclaDown () {
  let teclaPresionada = event.keyCode
  if ( teclaPresionada == 37 ) {
    directionX = -1
  } else if ( teclaPresionada == 38 ){
    directionY = -1
  } else if ( teclaPresionada == 39 ) {
    directionX = 1
  } else if ( teclaPresionada == 40 ) {
    directionY = 1
  }
}

function teclaUp () {
  let teclaPresionada = event.keyCode
  if ( teclaPresionada == 37 ) {
    directionX = 0
  } else if ( teclaPresionada == 38 ) {
    directionY = 0
  } else if ( teclaPresionada == 39 ) {
    directionX = 0
  } else if ( teclaPresionada == 40 ) {
    directionY = 0
  }
}

function enterFrame () {
  positionX += directionX * velocidade // left 
  positionY += directionY * velocidade // top 
  element.style.left = positionX + 'px'
  element.style.top = positionY + 'px'
}