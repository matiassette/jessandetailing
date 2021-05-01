let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(tomaValor) {
  //validar la informaciòn cargada del formulario
  tomaValor.preventDefault();
  if (document.getElementById("nombre").value == "") {
    alert("complete su nombre completo para ingresar");
    return false;
  }
  if (document.getElementById("apellido").value == "") {
    alert("complete su apellido");
    return false;
  }
  if (document.getElementById("dni").value == "") {
    alert("complete su dni");
    return false;
  }
  if (document.getElementById("mail").value == "") {
    alert("complete su mail");
    return false;
  }
  if (document.getElementById("telefono").value == "") {
    alert("complete su numero de telefono");
    return false;
  }
  alert("puede entrar sr/sra" +" "+ nombre.value +" "+ apellido.value +" "+ dni.value)
  // console.log("Formulario Enviado"); se probo y funciona 
}
