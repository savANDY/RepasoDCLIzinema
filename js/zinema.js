var TotalButacas =[100,150,75,50];
var ButacasLibres=[100,150,75,50];
numSala=0;
var numeroEntradas = 0;
var nombre = "nada";
var totalApagar = 0;

function butacas(numeroSala) {
  document.getElementById("salacompra").innerHTML = ("Total butacas: " + TotalButacas[numeroSala] + " Butacas libres: " + ButacasLibres[numeroSala]);
}


function cambiarNombreBoton(nombre){
  document.getElementById("botonComprar").name = nombre;
}

function mostrarDetalles(sala) {
  // Vaciar inputs
  document.getElementById("numeroent").value = "";
  document.getElementById("total").value = "";
  // funcion:
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

function comprarEntradas() {
  numeroEntradas = document.getElementById("numeroent").value;
  var e = document.getElementById("tipo");
  var tipoEntradas = e.options[e.selectedIndex].value;

  totalApagar = numeroEntradas * tipoEntradas;

  document.getElementById("precio").value = tipoEntradas;
  document.getElementById("total").value = totalApagar;
}

function restarButacas(nombreBoton) {
  numeroEntradas = document.getElementById("numeroent").value;
  switch (nombreBoton){
        case "botonSala1":
        ButacasLibres[0] = (ButacasLibres[0] - numeroEntradas);
        butacas(1 - 1);
        break;
    case "botonSala2":
        ButacasLibres[1] = (ButacasLibres[1] - numeroEntradas);
        butacas(2 - 1);
        break;
    case "botonSala3":
        ButacasLibres[2] = (ButacasLibres[2] - numeroEntradas);
        butacas(3 - 1);
        break;
    case "botonSala4":
        ButacasLibres[3] = (ButacasLibres[3] - numeroEntradas);
        butacas(4 - 1);
        break;
  }
}
