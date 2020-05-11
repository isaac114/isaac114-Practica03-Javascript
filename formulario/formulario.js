var validarCedula = function(){
    document.getElementsByName("cedula")[0].value;
    var cedula = String(document.getElementsByName("cedula")[0].value);
    var cedula2 = cedula.split("");
    if(isNaN(cedula)){
        alert('Por Favor en el campo cedula ingresa solo numeros')
    }

}

var validarNombre = function(){
    var nombre = String(document.getElementsByName("nombre")[0].value);
}