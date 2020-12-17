// Tu código aquí
const btnRestar = document.querySelector('.prevBtn')
//console.log("este boton tiene la id: ", btnRestar.id)
const btnSumar = document.querySelector('.nextBtn')
//console.log("este boton tiene la id: ", btnSumar.id)
var counter = document.querySelector('#counter')

let contador = 0;

btnSumar.addEventListener('click', function(){
  // 1. Incrementar la variable 'contador'
  // 2. Actualizar el valor de textcontent con el nuevo valor de contador
  contador++
  counter.textContent = contador

  funcionColorTexto();
})

btnRestar.addEventListener('click', function(){
  // 1. Disminuir la variable 'contador'
  // 2. Actualizar el valor de textcontent con el nuevo valor de contador
  contador--
  counter.textContent = contador
  
  funcionColorTexto();
})

// Agrupamos el código para cambiar el color del texto en una función
function funcionColorTexto() {
  if (contador<0){
    counter.style.color ="red"
  }
  else if (contador>0){
    counter.style.color ="green"
  }
  else{
    counter.style.color ="black"
  }
}
