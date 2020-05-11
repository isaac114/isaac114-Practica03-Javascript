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
        alert('Solo se permiten 2 Nombres')
    }else if(tamano < 2){
        alert('Solo se permiten 2 Nombres')
    }else {
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
            alert("No se permiten numeros en los nombres");
        }
    }

    
    

    
}