//Funcion para inicializar variales y limpiar articulos y mostrar otras cajas
function temaSeleccionado(){
document.getElementById("respuesta1").value=null;

document.getElementById("resultado").innerHTML="¡Respuestas!";
//getElementsByTagName convierte en arreglo porque guarda más de un elemento
capas = document.getElementsByTagName("article");
//Ocultar varios elementos 
	for(i=0; i<capas.length;i++){
		capas[i].style.display="none";
	}
	//almacenar el dato de la opcion del usuario
var articulo=document.getElementById("temas").value;
document.getElementById(articulo).style.display="block";
}
function mostrarDatos(){
	var resp1=document.getElementById("respuesta1").value;
	var resp2=document.getElementById("respuesta2").value;
	var resp3=document.getElementById("respuesta3").value;
	var resp4=document.getElementById("respuesta4").value;
	var resp5=document.getElementById("respuesta5").value;	
	videojuegos="¿Juegas videojuegos?: "+resp1+
	"<br> ¿Cuándo se crearon los videojuegos?: "+resp2+
	"<br> ¿Que prefieres Xbox o Play Station?: "+resp3+
	"<br> ¿Qué videojuegos conoces?: "+resp4+
	"<br> ¿Cuál es el videojuego más reciente?: "+resp5;
	document.getElementById("resultado").innerHTML=videojuegos;
}
document.getElementById('temas').addEventListener("change",temaSeleccionado);