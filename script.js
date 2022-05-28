var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var enviar = document.getElementById('enviar');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  let valor = usuario.value;
// validacion “usuario y clave” no se encuentren vacíos
  if (usuario.value === '' || clave.value === '') {
    e.preventDefault();
    para.textContent = 'Complete ambos datos';
  // "usuario" contenga arroba
  } else if (valor.includes("@")){
    alert("enviando formulario");
  } else{
    e.preventDefault();
    para.textContent = 'El Usuario debe contener @';
  }

}










//String.prototype.includes(searchString [, position])
//Un formulario sencillo en html que solicite el ingreso de usuario y clave

//c)      El formulario posea un botón submit con el texto “Ingresar”

//d)      Mediante el uso del evento que se ejecuta en el momento del envío del formulario se valide que los cuadros 
//de texto correspondientes a “usuario y clave” no se encuentren vacíos y que el cuadro de texto del “usuario”
// incluya un arroba.
// Si ambos campos no se validan correctamente el formulario no debe enviarse y deberá desplegarse
// una ventana indicando el motivo por el cual no puede ingresar por ej: “Falta el arroba en el usuario”//