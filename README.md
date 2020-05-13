# isaac114/Practica03-Javascript
 Resolucion de la Practica referente a JS
 <h2>OBJETIVO ALCANZADO:</h2>
 <ul>
  <li>1.	Entender y organizar de una mejor manera los sitios de web en Internet.</li>
  <li>2.	Diseñar adecuadamente elementos gráficos en sitios web en Internet. </li>
  <li>3.	Crear sitios web aplicando estándares actuales.</li>
 </ul>
 
 <p> Validación Formulario</p>
 <p>1._ Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. </p>
 <p>Para la interfaz grafica se creo un formulario que va dentro de una etiqueta <section> y esta esta dentro del <body>.
Para cada campo se creo una etiqueta de tipo <input>, cada una es de tipo text a excepción de pasw que debe ser de tipo pasword. Cada etiqueta tiene in span que aparecerá en la parte inferior del <input> y contendrá los errores controlados por los métodos. Para cada input también se eligió el evento onkeyup el cual nos permite actualizar o controlar los errores de acuerdo el usuario aplasta una tecla. Para la contraseña se eligió el evento onblur para que cada que salga o cliclee fuera de este input se actualice el método. Para finalizar al botón se le agrego el evento onclick para que cada que se cliclee sobre este botón se actualice. </p>
 <p> .* Selector Universal que ubica a la pagina sin bordes y cambia el modelo de caja por defecto 
Body._ Selector que da un color de fondo color crema y da la fuente de letra. 
.registro._ Aplica un tamaño total al formulario con 400 px, le da un color medio plomo, un relleno de 30px, un margen automático, un margen de 100px en la parte superior, un color de letra blanco y su fuente. 
.registro h2._ Le da un tamaño de letra de 22px y un margen en la parte inferior de 20px a todas las etiquetas h2 que estén dentro de la clase .registro. 
.controles._  Clase que da un tamaño del 100% de ancho un color blanco un relleno de 10px, un borde inferior de 16px, un borde de 1px de grosor de tipo solido y color negro, un tamaño de letra de 18px, y la fuente de letra. 
.registro p._  A todas las etiquetas p que estén dentro de una clase .registro se les dará un tamaño de ancho de 40px, centrado, tamaño de letra de 18px y la fuente respectiva. 
.registro a._ a todas las etiquetas <a> que estén dentro de la clase registro se les dará un color medio crema,sin decoración y la respectiva fuente. 
.registro a:hover._ A todas las etiquetas que <a> que estén dentro de la clase registro y que el cursor este sobre dicha etiqueta se les dará un color crema, un subrayado y un tipo de letra.
</p>
 <p>2._ Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador. </p>
 <p> Este método no recibe parámetros, pero cada vez que es invocado se toman los valores de la etiqueta correspondiente a la cedula posteriormente se procede a verificar que no tenga letras, en el caso de tenerlas se presentara un error. Una vez validado esto se procede a controlar que no ingrese mas de 10 caracteres.
Validado esto se invoca al método cedula Ecuador el cual nos devuelve como resultado si es o no ecuatoriano
Código del método empleado para verificar si es Ecuatoriano
</p>
 <p> Este método nos permite validar la si los datos ingresados por el usuario son correctos y verídicos, es decir este método fue desarrollado en base a la información proporcionada por el registro civil para calcular si una cedula es o no ecuatoriana.
https://medium.com/@bryansuarez/c%C3%B3mo-validar-c%C3%A9dula-y-ruc-en-ecuador-b62c5666186f
</p>
 <p> 2._ Se debe validar qué, en el campo del nombres, ingrese exclusivamente dos nombre y que permita ingresar sólo letras, por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido.</p>
 <p> El método no recibe ningún parámetro. Primero toma los datos de la etiqueta correspondiente a los nombres. Posteriormente la divide al identificar un espacio en blanco. Como son solo dos nombres se valida que no tenga ni mas ni menos de 2. Posteriormente toma la cadena dividida y entra en un bucle el cual es encargado de validar que no existan números en cada nombre.</p>
 <p> 3._Se debe validar qué, en el campo del apellidos, ingrese exclusivamente dos apellidos y que permita ingresar sólo letras, por ejemplo: “León Paredes”, es válido; “León”, no es válido.</p>
 <p> 4._ Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres numéricos</p>
 <p> Este método no recibe como parámetro ningún dato. Toma los datos de el input correspondiente a este ítem, Posteriormente analiza que la cadena no tenga ninguna letra o carácter siendo esto verdadero lanza un error a la interfaz. Luego valida que la cadena no tenta mas de 10 caracteres, siendo esto verdadero se lanza un error en la interfaz de usuario.</p>
 <p> Este método no recibe como parámetro ningún evento. Primero verifica que la cadena no tenga mas de 10 caracteres ya que el formato especificado tiene 10 caracteres. Luego se valida que el primer campo este entre 1 y 31, luego se verifica que tenga el símbolo “/” luego se verifica que el campo mes este entre 1 y 12, luego se verifica que este el símbolo” /” final mente se valida el intervalo de año permitido.</p>
 <p> 6._ Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.</p>
 <p> Este método no recibe como parámetro ningún dato. Si es llamado el método toma los datos del campo referente a este ítem, posteriormente divide la cadena en dos partes tomando como divisor el @, una vez hecho esto valida que la primera parte tenga al menos 3 caracteres ya q esa es la especificación, una vez cumplido esto procede a verificar que el dominio corresponda a ups.edu.ec o est.ups.edu.ec. Si no se cumple nada de esto se procede a lanzar los errores en la interfaz grafica de usuario.</p>
 <p> 7._ Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $)</p>
 <p> Este método no recibe ningún parámetro. Una vez que es llamado toma los datos de la etiqueta correspondiente a este Campo, posteriormente verifica que el tamaño sea mayor o igual a 8, luego divide esta cadena en cada uno de sus caracteres, luego este vector de caracteres creado entra a un bucle y en el se valida digito por digito si es mayúscula, minúscula, carácter o número. En el caso de que se cumpla todo esto nos permitirá crear la contraseña.</p>
 <p> 8._ Controlar que todos los campos estén llenos</p>
 <p> Mediante el metodo implementado se puede vcerificar so los campos <input> estan llenos o no. Si no estan todos llenos nos da un mensaje tipo alert.</p>
 <p> Este método no recibe ningún parámetro. Al ser llamado revisa que cada campo creado no este vacio. Posterior mente cada variable pasa a true para al final compararlas, en el caso de que todas las variables sean verdaderas se podrá ingresar caso contrario no.</p>
 <p> </p>
 <p> Calculadora</p>
 <p> 1._Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las operaciones que podrá hacer la calculadora son:: suma, resta, multiplicación y división. Además, se podrá limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas</p>
 <p> Para crear la estructura de la calculadora se procedió primero a crear una tabla en la cual cada item corresponde a un boton. Cada botón contiene el evento onclick el cual se activa al cliclearel botón. La mayoría de las teclas llaman a un método denominado add(). El evento donde se da el calculo matemático se llama al presionar la tecla =.</p>
 <p> setResult(): Actualiza la pantalla de la calculadora poniendo el valor que se pase como parámetro.
getResult(): Recoge el valor del último resultado obtenido, o de la expresión matemática que se debe calcular, y que se está visualizando en la pantalla de la calculadora.
add(): Añade a la pantalla la tecla pulsada (por ejemplo, el dígito o la operación a realizar). Si la pantalla ya contiene algún dato o la tecla que se pulsa no es un dígito, el carácter de la tecla pulsada se añadirá a la pantalla. En caso contrario (por ejemplo, si la pantalla está a cero, y se pulsa otro dígito), el contenido de la pantalla se reemplazará con la tecla pulsada.
calc(): Realiza el cálculo de la expresión que se encuentre en la pantalla (utilizando la función eval()), y escribe el resultado.
del(): Pone a cero el contenido de la pantalla de la calculadora.
</p>
 <p> </p>
 <p> Galeria de Fotos</p>
 <p> La estructura del código es bastante sencilla se compone de un body, que contiene una sección en la cual tiene la ventana donde iran las fotos y en su parte baja los botones de avanzar, calcular aleatorio, y retroceder.</p>
 <p> Primeramente instanciamos un vector o un arreglo, posteriormente se crea un bucle que recorrerá el arreglo, la función de este bucle es calcurar un numero aleatorio entre 1 y 10, luego se anida otro bucle el cual recorrerá las 6 primeras posiciones de el arreglo verificando que el numero aleatorio calculado no se repita en una de las 6 posiciones. </p>
 <p> Esta función es la encargada de mover a la derecha o izquierda la foto. Posteriormente se creo una variable global llamada estilo la cual no permite saber, según su contenido, si la foto debe mo0verse a la derecha o a la izquierda. Cada if corresponde a una orientación. Dado cierto punto la función valida cuando debe llamar a la función parar().</p>
 <p> </p>
  
  <h2>RESULTADO(S) OBTENIDO(S):</h2>
 <ul>
  <li>1.	Entender y organizar de una mejor manera los sitios de web en Internet.</li>
  <li>2.	Diseñar adecuadamente elementos gráficos en sitios web en Internet. </li>
  <li>3.	Los estudiantes manejan a un nivel aceptable html, css y JS.</li>
  <li>4.	 Los estudiantes son capaces de satisfacer requerimientos de Hipermedia basándose en html, css y JS.</li>
  <li>5.	 Los estudiantes saben manejar de forma correcta y eficiente herramientas html, css y JS.</li>
  <li>6.	 Los estudiantes son capaces de diseñar y estructurar un sitio web </li>
 <li>7.	Los conceptos analizados en clase se implementaron de forma correcta y satisfactoria.</li>
 </ul>
  <h2>CONCLUSIONES:</h2>
 <ul>
  <li>1.	Para poder implementar un diseño web primero se debe aprender bien la estructura html y como funciona cada etiqueta y sección, posteriormente para que un sitio web se vea de forma mucho mas llamativa y vistosa se debe implementar css, finalmente para que una aplicación pueda validar ciertos datos de entrada podemos usa JS.</li>
  <li>2.	JS es un lenguaje muy parecido a java pero enfocado al desarrollo web, nos permite implementar casi los mismo métodos que vienen por defecto, por ende es una herramienta muy poderosa para validar datos.</li>
  <li>3.	El uso de css es una herramienta muy útil al momento de diseñar a nuestro gusto o al gusto del cliente una pagina web.</li>
 </ul>
  <h2>RECOMENDACIONES:</h2>
 <ul>
  <li>1.	Tratar de verificar el diseño en diferentes navegadores.</li>
  <li>2.	 En caso de dudas recurrir a la información proporcionada por el docente o consultarlo en las horas practicas.</li>
  <li>3.	Tener cuidado con los nombres repetidos de las variables ya que pueden dar errores y alargar el tiempo de desarrollo</li>
  <li>4.	En caso de que hagamos cambios en las aplicaciones y estas no se vean en el navegador(aun estando en modo incognito), una solución seria cerrar el navegador, detener xamp y posteriormente volver abrir el navegador y probar,</li>

 </ul>
  <p></p>
