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
    if(elemento.value.length == 10) {
        var dia = elemento.value[0]+elemento.value[1];
        var mes = elemento.value[3]+elemento.value[4];
        var ano = elemento.value[6]+elemento.value[7]+elemento.value[8]+elemento.value[9];

        console.log(ano);

        if( ((dia < 1)||(dia > 31)) || (elemento.value[2] != "/") || ((mes < 1) || (mes > 12)) || (elemento.value[5] != "/") || ((ano < 0) || (ano > 2020) || (ano < 1900)) ) {
            alert('Formato Incorrecto');
        }
    } else if(elemento.value.length > 10) {
        alert('Formato Incorrectoa');

    }
}


var validarCorreo = function() {
    var nombre = String(document.getElementsByName("correo")[0].value);
    var cadena = nombre.split("@");
    if((cadena[0] != " ") && cadena[1] != null ){
        
        var parte1 = cadena[0].split("");
        console.log(parte1.length);

        if(parte1.length >= 3){
            var parte2 = cadena[1];
            var dominio1 = "ups.edu.ec";
            var dominio2 = "est.ups.edu.ec";
            if((parte2 === dominio1)||(parte2 === dominio2)){

            }else{
                if(parte2.length > 9){
                    alert("Se nececita un dominio de la forma ups.edu.ec o est.ups.edu.ec")
                }
            }

        }else{
            alert("Formato no compatible. Se nececita minimo 3 caracteres antes del @");
        }

    }
}






var validarContrasena = function() {
    var el = document.getElementsByName("psw")[0].value;
    var elemento = el.split("");
    if(elemento.length > 0) {
        if(elemento.length >= 8) {		
            var mayuscula = false;
            var minuscula = false;
            var numero = false;
            var caracter_especial = false;
            for(var i = 0;i<elemento.length;i++) {
                if(el.charCodeAt(i) >= 65 && el.charCodeAt(i) <= 90) {
                    mayuscula = true;
                } else if(el.charCodeAt(i) >= 97 && el.charCodeAt(i) <= 122) {
                    minuscula = true;
                } else if(el.charCodeAt(i) >= 48 && el.charCodeAt(i) <= 57) {
                    numero = true;
                } else if(el.charCodeAt(i) == 64 || el.charCodeAt(i) == 95 || el.charCodeAt(i) == 36) {
                    caracter_especial = true;
                }  else {
                    return true;
                }
            }
            if(mayuscula == true && minuscula == true && caracter_especial == true && numero == true) {
                
            } else {
                alert('Su contrasena debe tener: Numeros, Letras Mayusculas y minusculas y caracteres especiales');
                
            }
        } else {
            
            alert('contrasena demasiado Corta');
        }
    } else {
        alert('No hay Contrasena');
    }
}