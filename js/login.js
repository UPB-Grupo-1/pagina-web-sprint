let registros = []

function login() {
	
}

function agregarRegistro() {
	
}

let captcha = document.getElementById('captcha').value
let numberCaptcha = parseInt(captcha)

function validarCAPTCHA(valor) {
	if (valor === 15) {
		return true
	} else {
		return false
	}
}

validarCAPTCHA(numberCaptcha)

module.exports.login  = login;
module.exports.registros  = registros;
module.exports.validarCAPTCHA  = validarCAPTCHA;
module.exports.agregarRegistro  = agregarRegistro;
