var TotalButacas =[100,150,75,50];
var ButacasLibres=[100,150,75,50];
numSala=0;
var nombre = "nada";

function butacas(numeroSala) {
  document.getElementById("salacompra").innerHTML = ("Total butacas: " + TotalButacas[numeroSala] + " Butacas libres: " + ButacasLibres[numeroSala]);
}

function cambiarNombreBoton(nombre){
  document.getElementById("botonComprar").name = nombre;
}

function mostrarDetalles(sala) {
  todasSalas = document.getElementsByClassName("texto");
  for (i = 0; i < todasSalas.length; i++){
    todasSalas[i].style.display = "none";
  }
  switch (sala) {
      default:
          text = "Se ha elegido otra cosa";
          break;
      case "sala1":
          numSala = 1 - 1;
          document.getElementById("sala1").style.display = "block";
          cambiarNombreBoton("botonSala1");
          butacas(numSala);
          break;
      case "sala2":
        numSala = 2 - 1;
          document.getElementById("sala2").style.display = "block";
          cambiarNombreBoton("botonSala2");
          butacas(numSala);
          break;
      case "sala3":
          numSala = 3 - 1;
          document.getElementById("sala3").style.display = "block";
          cambiarNombreBoton("botonSala3");
          butacas(numSala);
          break;
       case "sala4":
          numSala = 4 - 1;
          document.getElementById("sala4").style.display = "block";
          cambiarNombreBoton("botonSala4");
          butacas(numSala);
          break;
  }
  document.getElementById("compraentradas").style.display = "block";

}

function comprarEntradas(nombreBoton) {
  switch (nombreBoton){
    case "botonSala1":
        ButacasLibres[0];

  }
}
