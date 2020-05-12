
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
        alert('Llenar el campo cedula');
    }
    if (String(document.getElementsByName("nombre")[0].value) != ""){
        vnombre = true;
    }else{
        alert('Llenar el campo nombre');
    }
    if (String(document.getElementsByName("apellido")[0].value) != ""){
        vapellido = true;
    }else{
        alert('Llenar el campo apellido');
    }
    if (String(document.getElementsByName("telefono")[0].value) != ""){
        vtelefono = true;
    }else{
        alert('Llenar el campo telefono');
    }
    if (String(document.getElementsByName("direccion")[0].value) != ""){
        vdireccion = true;
    }else{
        alert('Llenar el campo direccion');
    }
    if (String(document.getElementsByName("fecha")[0].value) != ""){
        vfecha = true;
    }else{
        alert('Llenar el campo fecha');
    }
    if (String(document.getElementsByName("correo")[0].value) != ""){
        vcorreo = true;
    }else{
        alert('Llenar el campo correo');
    }
    if (String(document.getElementsByName("psw")[0].value) != ""){
        vpsw = true;
    }else{
        alert('Llenar el campo psw');
    }

    if((vcedula === true) && (vnombre === true) && (vapellido ===true) && (vtelefono === true) && (vfecha === true) && (vcorreo === vcorreo) && (vpsw ===true)){
        
    }
}









var validarCedula = function(){
    document.getElementsByName("cedula")[0].value;
    var cedula = String(document.getElementsByName("cedula")[0].value);

    if(isNaN(cedula)){
        alert('Por Favor en el campo cedula ingresa solo numeros')
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

var validarNombre = function(){
    var nombre = String(document.getElementsByName("nombre")[0].value);
    var cadena = nombre.split(" ");
    var tamano = cadena.length;
    var s1 = false;
    
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
            }else{

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







var cedulaEcuador = function(cedula){
  
    /**
       * Algoritmo para validar cedulas de Ecuador
       * @Author : Victor Diaz De La Gasca.
       * @Fecha  : Quito, 15 de Marzo del 2013 
       * @Email  : vicmandlagasca@gmail.com
       * @Pasos  del algoritmo
       * 1.- Se debe validar que tenga 10 numeros
       * 2.- Se extrae los dos primero digitos de la izquierda y compruebo que existan las regiones
       * 3.- Extraigo el ultimo digito de la cedula
       * 4.- Extraigo Todos los pares y los sumo
       * 5.- Extraigo Los impares los multiplico x 2 si el numero resultante es mayor a 9 le restamos 9 al resultante
       * 6.- Extraigo el primer Digito de la suma (sumaPares + sumaImpares)
       * 7.- Conseguimos la decena inmediata del digito extraido del paso 6 (digito + 1) * 10
       * 8.- restamos la decena inmediata - suma / si la suma nos resulta 10, el decimo digito es cero
       * 9.- Paso 9 Comparamos el digito resultante con el ultimo digito de la cedula si son iguales todo OK sino existe error.     
       */
  
       //var cedula = '0931811087';
  
       //Preguntamos si la cedula consta de 10 digitos
       if(cedula.length == 10){
          
          //Obtenemos el digito de la region que sonlos dos primeros digitos
          var digito_region = cedula.substring(0,2);
          
          //Pregunto si la region existe ecuador se divide en 24 regiones
          if( digito_region >= 1 && digito_region <=24 ){
            
            // Extraigo el ultimo digito
            var ultimo_digito   = cedula.substring(9,10);
  
            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
  
            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
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
  
            //Suma total
            var suma_total = (pares + impares);
  
            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0,1);
  
            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1)  * 10;
  
            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;
  
            //Si el digito validador es = a 10 toma el valor de 0
            if(digito_validador == 10)
              var digito_validador = 0;
  
            //Validamos que el digito validador sea igual al de la cedula
            if(digito_validador == ultimo_digito){
              console.log('la cedula:' + cedula + ' es correcta');
              vcedula = true;
            }else{
              console.log('la cedula:' + cedula + ' es incorrecta');
              alert('la cedula:' + cedula + ' es incorrecta');
            }
            
          }else{
            // imprimimos en consola si la region no pertenece
            console.log('Esta cedula no pertenece a ninguna region');
            alert("Esta cedula no pertenece a ninguna region");
          }
       }else{
          //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
          console.log('Esta cedula tiene menos de 10 Digitos');
          alert('Esta cedula tiene menos de 10 Digitos')
       }    
    
  }