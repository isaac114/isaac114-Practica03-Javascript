fotos=[]
muestra=0;
var aux=0;
function calcularFotosAleatorias(){ 
    fotos=["<img src='imagenes/img1.jpg' alt='' >",
    "<img src='imagenes/img2.jpg' alt='' >",
    "<img src='imagenes/img3.jpg' alt='' >",
    "<img src='imagenes/img4.jpg' alt='' >",
    "<img src='imagenes/img5.jpg' alt='' >",
    "<img src='imagenes/img6.jpg' alt='' >",
    "<img src='imagenes/img7.jpg' alt='' >",
    "<img src='imagenes/img8.jpg' alt='' >",
    "<img src='imagenes/img9.jpg' alt='' >",
    "<img src='imagenes/img10.jpg' alt='' >"]
    for (var i=1; i<6; i++) {
        
        var aleatorio = Math.ceil(Math.random()*11);
        fotos[i]="<img src ='imagenes/img"+aleatorio +".jpg' alt='' >";
        var existe = false;
        for (var i=0; i<6; i++){
            if (fotos [i] == aleatorio){
                existe =true;
            }
        }
        if (!existe) {
            fotos[6]=aleatorio;  
        }
       
    }
    foto.innerHTML=fotos[1];
    muestra=1;
    document.getElementById("regresa").disabled=false;
    document.getElementById("avanza").disabled=false;
    document.getElementById("dinamico").disabled=true;
}

function moverFoto(opcion) {
    anterior=fotos[muestra]; 
    fotoAnt.innerHTML=anterior;

    if(opcion === "avanzar"){
        muestra++;
        if (muestra>=5) {
           muestra=5; 
           document.getElementById("avanza").disabled=true;
            document.getElementById("dinamico").disabled=false;
        } 
        estilo="derecho";
    }else if(opcion === "retroceder"){
        muestra--;
        if (muestra<2) { 
         muestra=1;
         document.getElementById("regresa").disabled=true;
         document.getElementById("dinamico").disabled=false;
        } 
        estilo="izquierdo" 
    }
     ver=fotos[muestra]; 
     mueveFoto = 600; 
     mueveFoto2=-600; 
     completado=setInterval(transicion,40); 
}

function transicion() { 
     if (estilo=="derecho") {	
        mueveFoto-=10; 
        mueveAnt=mueveFoto-600; 
        cambioFoto=mueveFoto+"px"; 
        cambioAnt=mueveAnt+"px";
        foto.style.left=cambioFoto; 
        fotoAnt.style.left=cambioAnt;
        foto.innerHTML=ver; 
        if (mueveFoto<=0) { 
           parar() 
           }
        }
     else if (estilo=="izquierdo") {  		
        mueveFoto2+=10;  
        mueveAnt=mueveFoto2+600;
        cambioFoto=mueveFoto2+"px";
        cambioAnt=mueveAnt+"px";
        foto.style.left=cambioFoto;
        fotoAnt.style.left=cambioAnt;
        foto.innerHTML=ver;
        if (mueveFoto2>=0) {
           parar()
           }
        }
}
     
function parar() { 
    clearInterval(completado); 
    numFoto=+muestra;
    numff=muestra+1; 
    fotoFondo="img"+numff+".jpg";
    imagenFondo="url(imagenes/"+fotoFondo+")";
    pantalla.style.backgroundImage=imagenFondo
}

window.onload = function() {

    pantalla=document.getElementById("visor"); 
    foto=document.getElementById("fotoSale"); 
    fotoAnt=document.getElementById("fotoEntra"); 
    document.getElementById("regresa").disabled=true;
    document.getElementById("avanza").disabled=true;
    document.getElementById("dinamico").disabled=false;
}