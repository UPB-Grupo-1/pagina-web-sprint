let registros = []

function login(){
    let email = document.getElementById('correo').value
    let contrasena = document.getElementById('contrasena').value
    let buscarEmail = registros.find(o => o.correo === email)
    let buscarContrasena = registros.find(o => o.contrasena === contrasena)
    if(buscarEmail && buscarContrasena) {
        validarCAPTCHA()
        return true
    }
    else{
         return false
    }
}

function agregarRegistro() {
  
    function crearObjetoRegistro(n, a, t, c, co) {
      return { nombre: n, apellido: a, telefono: t, correo: c, contrasena: co }
    }
  
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var telefono = document.getElementById('telefono').value
    var correo = document.getElementById('correo').value
    var contrasena = document.getElementById('contrasena').value
  
    var miRegistro = new crearObjetoRegistro(nombre,apellido,telefono,correo,contrasena)
  
    registros.push(miRegistro)
}

function validarCAPTCHA(valor){
    if (valor == 15){
        return true
    }
    else{
        return false
    }
}

module.exports.login = login
module.exports.registros = registros
module.exports.validarCAPTCHA = validarCAPTCHA
module.exports.agregarRegistro = agregarRegistro
