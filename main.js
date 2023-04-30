/* Fx que conecta product cards con text area en contact us. 
1. Nótese que pasa un parámetro... es la parte dinámica del texto y debe ser agregado en el html.
2. "localStorage." guarda el dato en memoria del navegador. "setItem()" requie entre paréntesis de la clave primero y el valor después. En este caso el valor es el primer "Service", la coma separa... y el valor tiene parte fija "¡Hola! Estoy interesadx en cortarme" y parte dinámica agregada desde html bajo el nombre "producto". 
3. "window.location.href" es el http al que redirecciona, que usualmente se pone en el html como "<a href>".*/

function irAContacto(producto){
    localStorage.setItem("Service", "¡Hola! Estoy interesadx en cortarme" + producto);
    window.location.href = "contactUs.html"
}


/* Aquí se busca el input del text area ("consulta"), se recupera el valor del localStorage y se muestra como valor en el text area.*/
const consulta = document.querySelector("#consulta");
function iniciar() {
  const mensaje = localStorage.getItem("Service");
  consulta.value = mensaje;
}