
var vcedula = false;
var vnombre = false;
var vapellido = false;
var vtelefono = false;
var vdireccion = false;
var vfecha = false;
var vcorreo = false;
var vpsw = false;

var validarCampos = function(){
    if (String(document.getElementsByName("cedula")[0].value) != ""){
        vcedula = true;
    }else{
       // alert('Llenar el campo cedula');
    }
    if (String(document.getElementsByName("nombre")[0].value) != ""){
        vnombre = true;
    }else{
       // alert('Llenar el campo nombre');
    }
    if (String(document.getElementsByName("apellido")[0].value) != ""){
        vapellido = true;
    }else{
        //alert('Llenar el campo apellido');
    }
    if (String(document.getElementsByName("telefono")[0].value) != ""){
        vtelefono = true;
    }else{
        //alert('Llenar el campo telefono');
    }
    if (String(document.getElementsByName("direccion")[0].value) != ""){
        vdireccion = true;
    }else{
        //alert('Llenar el campo direccion');
    }
    if (String(document.getElementsByName("fecha")[0].value) != ""){
        vfecha = true;
    }else{
        //alert('Llenar el campo fecha');
    }
    if (String(document.getElementsByName("correo")[0].value) != ""){
        vcorreo = true;
    }else{
        //alert('Llenar el campo correo');
    }
    if (String(document.getElementsByName("psw")[0].value) != ""){
        vpsw = true;
    }else{
        //alert('Llenar el campo psw');
    }

    if((vcedula === true) && (vnombre === true) && (vapellido ===true) && (vtelefono === true) && (vfecha === true) && (vcorreo === vcorreo) && (vpsw ===true)){
        alert('Bienvenido');
    }else{
        alert('POR FAVOR LLENA TODOS LOS CAMPOS');
    }
}








//VALIDACION CEDULA
var validarCedula = function(){
    document.getElementsByName("cedula")[0].value;
    var cedula = String(document.getElementsByName("cedula")[0].value);

    if(isNaN(cedula)){
        //alert('Por Favor en el campo cedula ingresa solo numeros')
        document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida';
        document.getElementById('mensajeCedula').style.color = 'red';
        document.getElementsByName("cedula")[0].style.border = '3px red solid';
    }else{
        var aux = cedula.split("");
        if(cedula.length > 10){
            alert("Solo se permiten 10 dijitos")
        }
        if(cedula.length === 10){
            cedulaEcuador(cedula);
        }
    }

}

//VALIDACION NOMBRES
var validarNombre = function(){
    var nombre = String(document.getElementsByName("nombre")[0].value);
    var cadena = nombre.split(" ");
    var tamano = cadena.length;
    var s1 = false;   
    if(tamano > 2){
        document.getElementById('mensajenombre').innerHTML = '<br>Solo se permiten dos nombres';
        document.getElementById('mensajenombre').style.color = 'red';
        document.getElementsByName("nombre")[0].style.border = '3px red solid';
    }else if (tamano === 2) {
        var nombre1 = cadena[0].split("");
        var nombre2 = cadena[1].split("");
        var validador = false;
        for(var i=0; i<=nombre1.length; i++){              
            if(isNaN(nombre1[i])===false){
                validador = true;
                document.getElementsByName("nombre")[0].style.border =  '1px solid black';
                document.getElementById('mensajenombre').innerHTML = ''
            }
        }
        for(var i=0; i<=nombre2.length; i++){
                
            if(isNaN(nombre2[i])===false){
                validador = true;
            }else{

            }
        }
        if(validador===true){
            document.getElementById('mensajenombre').innerHTML = '<br>No se permiten numeros en los nombres';
            document.getElementById('mensajenombre').style.color = 'red';
            document.getElementsByName("nombre")[0].style.border = '3px red solid';
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
            document.getElementById('mensajenombre').innerHTML = '<br>No se permiten numeros en los nombres';
            document.getElementById('mensajenombre').style.color = 'red';
            document.getElementsByName("nombre")[0].style.border = '3px red solid';
        }else{
            document.getElementsByName("nombre")[0].style.border =  '1px solid black';
            document.getElementById('mensajenombre').innerHTML = ''
        }
    } 
}

//VALIDAR APELLIDO
var validarApellido = function(){
    var nombre = String(document.getElementsByName("apellido")[0].value);
    var cadena = nombre.split(" ");
    var tamano = cadena.length;
    var s1 = false;  
    if(tamano > 2){
        document.getElementById('mensajeapellido').innerHTML = '<br>Solo se permiten dos apellidos';
        document.getElementById('mensajeapellido').style.color = 'red';
        document.getElementsByName("apellido")[0].style.border = '3px red solid';
    }else if (tamano === 2) {
        var nombre1 = cadena[0].split("");
        var nombre2 = cadena[1].split("");
        var validador = false;
        for(var i=0; i<=nombre1.length; i++){
                
            if(isNaN(nombre1[i])===false){
                validador = true;
                document.getElementsByName("apellido")[0].style.border =  '1px solid black';
                document.getElementById('mensajeapellido').innerHTML = ''
            }
        }
        for(var i=0; i<=nombre2.length; i++){
                
            if(isNaN(nombre2[i])===false){
                validador = true;
            }else{

            }
        }
        if(validador===true){
            document.getElementById('mensajeapellido').innerHTML = '<br>No se permiten numeros en los apellidos';
            document.getElementById('mensajeapellido').style.color = 'red';
            document.getElementsByName("apellido")[0].style.border = '3px red solid';
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
            document.getElementById('mensajeapellido').innerHTML = '<br>No se permiten numeros en los apellidos';
            document.getElementById('mensajeapellido').style.color = 'red';
            document.getElementsByName("apellido")[0].style.border = '3px red solid';
        }else{
            document.getElementsByName("apellido")[0].style.border =  '1px solid black';
            document.getElementById('mensajeapellido').innerHTML = ''
        }
    } 
}

//VALIDAR TELEFONO
var validarTelefono = function(){
    var telefono1 = String(document.getElementsByName("telefono")[0].value).split("");


    if(isNaN(String(document.getElementsByName("telefono")[0].value))===true){
        //alert('no se permiten numeros')
        document.getElementById('mensajetelefono').innerHTML = '<br>No se permiten letras';
        document.getElementById('mensajetelefono').style.color = 'red';
        document.getElementsByName("telefono")[0].style.border = '3px red solid';
    }else{
        document.getElementsByName("telefono")[0].style.border =  '1px solid black';
        document.getElementById('mensajetelefono').innerHTML = '';
    }

    if(telefono1.length>10){
        //alert("Solo se permite un maximo de 10 caracteres");
        document.getElementsByName("telefono")[0].style.border = '3px red solid';
        document.getElementById('mensajetelefono').innerHTML = '<br>Solo 10 digitos';
        document.getElementById('mensajetelefono').style.color = 'red';
        
    }else{
        document.getElementsByName("telefono")[0].style.border =  '1px solid black';
        document.getElementById('mensajetelefono').innerHTML = '';
        
    }
    
}

//VALIDAR FECHA
var validarFecha = function() {
    var elemento = document.getElementsByName("fecha")[0];
    if(elemento.value.length == 10) {
        var dia = elemento.value[0]+elemento.value[1];
        var mes = elemento.value[3]+elemento.value[4];
        var ano = elemento.value[6]+elemento.value[7]+elemento.value[8]+elemento.value[9];

        console.log(ano);

        if( ((dia < 1)||(dia > 31)) || (elemento.value[2] != "/") || ((mes < 1) || (mes > 12)) || (elemento.value[5] != "/") || ((ano < 0) || (ano > 2020) || (ano < 1900)) ) {
            //alert('Formato Incorrecto');
            document.getElementsByName("fecha")[0].style.border = '3px red solid';
            document.getElementById('mensajefecha').innerHTML = '<br>Formato Incorrecto';
            document.getElementById('mensajefecha').style.color = 'red';
        }else{
            document.getElementsByName("fecha")[0].style.border =  '1px solid black';
            document.getElementById('mensajefecha').innerHTML = '';
        }

    } else if(elemento.value.length > 10) {
        //alert('Formato Incorrectoa');
        document.getElementsByName("fecha")[0].style.border = '3px red solid';
        document.getElementById('mensajefecha').innerHTML = '<br>Formato Incorrecto';
        document.getElementById('mensajefecha').style.color = 'red';

    }else{
        document.getElementsByName("fecha")[0].style.border =  '1px solid black';
        document.getElementById('mensajefecha').innerHTML = '';
    }
}

//ValidarCorreo
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
                    //alert("Se nececita un dominio de la forma ups.edu.ec o est.ups.edu.ec")
                    document.getElementsByName("correo")[0].style.border = '3px red solid';
                    document.getElementById('mensajecorreo').innerHTML = '<br>Se nececita un dominio de la forma ups.edu.ec o est.ups.edu.ec';
                    document.getElementById('mensajecorreo').style.color = 'red';
                }else{
                    document.getElementsByName("correo")[0].style.border =  '1px solid black';
                    document.getElementById('mensajecorreo').innerHTML = '';
                }
            }

        }else{
            //alert("Formato no compatible. Se nececita minimo 3 caracteres antes del @");
            document.getElementsByName("correo")[0].style.border = '3px red solid';
            document.getElementById('mensajecorreo').innerHTML = '<br>Formato no compatible. Se nececita minimo 3 caracteres antes del @';
            document.getElementById('mensajecorreo').style.color = 'red';
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
            if(mayuscula === true && minuscula === true && caracter_especial === true && numero === true) {
                document.getElementsByName("psw")[0].style.border =  '1px solid black';
                document.getElementById('mensajepsw').innerHTML = '';
            } else {
                //alert('Su contrasena debe tener: Numeros, Letras Mayusculas y minusculas y caracteres especiales');
                document.getElementsByName("psw")[0].style.border = '3px red solid';
                document.getElementById('mensajepsw').innerHTML = '<br>Su contrasena debe tener: Numeros, Letras Mayusculas y minusculas y caracteres especiales';
                document.getElementById('mensajepsw').style.color = 'red';
            }
        } else {
            
            //alert('contrasena demasiado Corta');
            document.getElementsByName("psw")[0].style.border = '3px red solid';
            document.getElementById('mensajepsw').innerHTML = '<br>contrasena demasiado Corta';
            document.getElementById('mensajepsw').style.color = 'red';
        }
    } else {
        //alert('No hay Contrasena');
        document.getElementsByName("psw")[0].style.border = '3px red solid';
        document.getElementById('mensajepsw').innerHTML = '<br>No hay Contrasena';
        document.getElementById('mensajepsw').style.color = 'red';
    }
}







var cedulaEcuador = function(cedula){
       if(cedula.length == 10){
          var digito_region = cedula.substring(0,2);
          if( digito_region >= 1 && digito_region <=24 ){
            var ultimo_digito   = cedula.substring(9,10);
            var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
            var numero1 = cedula.substring(0,1);
            var numero1 = (numero1 * 2);
            if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
            var numero3 = cedula.substring(2,3);
            var numero3 = (numero3 * 2);
            if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
            var numero5 = cedula.substring(4,5);
            var numero5 = (numero5 * 2);
            if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
            var numero7 = cedula.substring(6,7);
            var numero7 = (numero7 * 2);
            if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
            var numero9 = cedula.substring(8,9);
            var numero9 = (numero9 * 2);
            if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
            var impares = numero1 + numero3 + numero5 + numero7 + numero9;
            var suma_total = (pares + impares);
            var primer_digito_suma = String(suma_total).substring(0,1);
            var decena = (parseInt(primer_digito_suma) + 1)  * 10;
            var digito_validador = decena - suma_total;
            if(digito_validador == 10)
              var digito_validador = 0;
            if(digito_validador == ultimo_digito){
              console.log('la cedula:' + cedula + ' es correcta');
              document.getElementsByName("cedula")[0].style.border =  '1px solid black';
              document.getElementById('mensajeCedula').innerHTML = ''
              vcedula = true;
            }else{
              console.log('la cedula:' + cedula + ' es incorrecta');
              document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida...'
              document.getElementsByName("cedula")[0].style.border = '3px red solid';
            }  
          }else{
            console.log('Esta cedula no pertenece a ninguna region');
            document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida...'
              document.getElementsByName("cedula")[0].style.border = '3px red solid';
          }
       }else{os
          console.log('Esta cedula tiene menos de 10 Digitos');
          document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida...'
          document.getElementsByName("cedula")[0].style.border = '3px red solid';
       }    
  }