let login_hola = document.getElementById("login_out_hola");
let login_salir = document.getElementById("login_out_salir");
let login_in = document.getElementById("login_in");
let nombre_usuario_span = document.getElementById("nombre_usuario");
let boton_informacion = document.getElementById("boton_informacion");

login_hola.style.display = "none";
login_salir.style.display = "none";

let nombre_usuario = localStorage.getItem('nombre');


if(estaLogeado()){
  login_hola.style.display = "block";
  login_salir.style.display = "block";
  login_in.style.display = "none";
  nombre_usuario_span.innerHTML = nombre_usuario;
}

login_salir.onclick = function(event) { 
  borrarLocalStorage();
  location.reload();
};

boton_informacion.onclick = function(event) { 

  if(!estaLogeado()){
    alert("tenes que estar logeado");
    return false;
  }
};

function estaLogeado(){
  if(nombre_usuario != null){
    return true;
  }
  return false;
}

function borrarLocalStorage(){
  localStorage.clear();
}
