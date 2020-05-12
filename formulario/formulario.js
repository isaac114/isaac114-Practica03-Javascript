var validarCedula = function(){
    document.getElementsByName("cedula")[0].value;
    var cedula = String(document.getElementsByName("cedula")[0].value);

    if(isNaN(cedula)){
        alert('Por Favor en el campo cedula ingresa solo numeros')
    }

}

var validarNombre = function(){
    var nombre = String(document.getElementsByName("nombre")[0].value);
    var cadena = nombre.split(" ");
    var tamano = cadena.length;
    
    if(tamano > 2){
        alert('Solo se permiten 2 Apellidos')
    }else if (tamano === 2) {
        var nombre1 = cadena[0].split("");
        var nombre2 = cadena[1].split("");
        var validador = false;
        for(var i=0; i<=nombre1.length; i++){
                
            if(isNaN(nombre1[i])===false){
                validador = true;
            }
        }
        for(var i=0; i<=nombre2.length; i++){
                
            if(isNaN(nombre2[i])===false){
                validador = true;
            }
        }

        if(validador===true){
            alert("No se permiten numeros en los Apellidos");
        }
    }else if(tamano ===1){
        var aux = nombre.split("");
        var validador = false;
        for(var i=0; i<=aux.length; i++){
                
            if(isNaN(aux[i])===false){
                validador = true;
            }
        }
        if(validador===true){
            alert("No se permiten numeros en los Apellidos");
        }
    } 
}


var validarApellido = function(){
    var nombre = String(document.getElementsByName("apellido")[0].value);
    var cadena = nombre.split(" ");
    var tamano = cadena.length;
    
    if(tamano > 2){
        alert('Solo se permiten 2 Apellidos')
    }else if (tamano === 2) {
        var nombre1 = cadena[0].split("");
        var nombre2 = cadena[1].split("");
        var validador = false;
        for(var i=0; i<=nombre1.length; i++){
                
            if(isNaN(nombre1[i])===false){
                validador = true;
            }
        }
        for(var i=0; i<=nombre2.length; i++){
                
            if(isNaN(nombre2[i])===false){
                validador = true;
            }
        }

        if(validador===true){
            alert("No se permiten numeros en los Apellidos");
        }
    }else if(tamano ===1){
        var aux = nombre.split("");
        var validador = false;
        for(var i=0; i<=aux.length; i++){
                
            if(isNaN(aux[i])===false){
                validador = true;
            }
        }
        if(validador===true){
            alert("No se permiten numeros en los Apellidos");
        }
    }
}


var validarTelefono = function(){
    var telefono = String(document.getElementsByName("telefono")[0].value).split("");
    if(telefono.length>=11){
        alert("Solo se permite un maximo de 10 caracteres");
    }


    if(isNaN(String(document.getElementsByName("telefono")[0].value))===true){
        alert('no se permiten numeros')
    }
    
}


var validarFecha = function() {
    var elemento = document.getElementsByName("fecha")[0];
    if(elemento.value.length > 9) {
        var dia = elemento.value[0]+elemento.value[1];
        var mes = elemento.value[3]+elemento.value[4];
        var ano = elemento.value[6]+elemento.value[7]+elemento.value[8]+elemento.value[9];

        console.log(ano);

        if( ((dia < 1)||(dia > 31)) || (elemento.value[2] != "/") || ((mes < 1) || (mes > 12)) || (elemento.value[5] != "/") || ((ano < 0) || (ano > 2020) || (ano > 1900)) ) {
            alert('Formato Incorrecto');
        }
    } else if (elemento.value.length > 10) {
        alert('Formato Incorrecto');

    }
}