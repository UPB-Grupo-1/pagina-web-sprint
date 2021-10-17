/*const FORMULARIO = document.getElementById(`form-registro`);

FORMULARIO.addEventListener(`submit`, function (e) {
	e.preventDefault();
	
})*/

function checkNumDocumento(valor, tipo) {
	let rex =/^[0-9]{8,10}$/;
	switch (tipo) {
		case "TI":
			if (rex.test(valor)) {
				return true;
			}
			break;
		case "CC":
			if (rex.test(valor)) {
				return true;
			}else {
				return false;
			}
		case "PA":
			if (/^[a-zA-Z0-9\.-]{8,10}$/) {
				return true;
			}
			break
		case "TR":
			if (rex.test(valor)) {
				return true;
			}
			break
	}
	return false;	
}

function checkCorreo(valor) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)) {
		return true;
	} else {
		return false;
	}
}

function checkContrasena(valor) {
	let myregex = /^[a-zA-Z0-9]{8,}$/;
	if (myregex.test(valor)) {
		return true;
		
	} else {
		return false;
	}
}



module.exports.checkNumDocumento = checkNumDocumento
module.exports.checkContrasena = checkContrasena
module.exports.checkCorreo = checkCorreo