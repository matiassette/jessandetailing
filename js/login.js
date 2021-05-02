let miFormulario = document.getElementById("formulario");

function validarFormulario(dato) {

	dato.preventDefault();

	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;

	//validar la informaciòn cargada del formulario
	if (nombre == "") {
		alert("complete su nombre completo para ingresar");
		return false;
	}
	if (apellido == "") {
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

	localStorage.setItem('nombre', nombre);

  	alert("puede entrar sr/sra" +" "+ nombre +" "+ apellido +" "+ dni.value);
  	formulario.submit()
}

miFormulario.addEventListener("submit", validarFormulario);
