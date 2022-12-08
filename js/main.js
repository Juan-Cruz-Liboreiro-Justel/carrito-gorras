let nombreUsuario = prompt("Hola! ingresa tu nombre para comenzar a comprar");

let detroit = 19499;
let losAngeles = 17999;
let newYork = 15499;
let boston = 21999;
let sanFrancisco = 22499;
let precioFinal = 0;



let productos = prompt("Hola " + nombreUsuario + ", que gorra vas a querer comprar? \nDetroit \nLos Angeles \nNew York \nBoston \nSan Francisco \nPresiona x para finalizar.");
while (productos != "x") {

  switch (productos) {
    case "detroit":
      let color = prompt("Elegi el color: \nNegro \nAzul \nNaranja \nBlanco");
      if (color === "negro") {
        precioFinal = parseInt(precioFinal + detroit)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color === "azul") {
        precioFinal = parseInt(precioFinal + detroit)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color === "naranja") {
        precioFinal = parseInt(precioFinal + detroit)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color === "blanco") {
        precioFinal = parseInt(precioFinal + detroit)
        alert("El total de tu compra es de $ " + precioFinal);
      }
      else {
        alert("Opcion incorrecta, seleccione uno de nuestros productos o presiona x para finalizar.");
      }
      break;
    case "los angeles":
      let color2 = prompt("Elegi el color: \nNegro \nAzul \nBlanco");
      if (color2 === "negro") {
        precioFinal = parseInt(precioFinal + losAngeles)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color2 === "azul") {
        precioFinal = parseInt(precioFinal + losAngeles)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color2 === "blanco") {
        precioFinal = parseInt(precioFinal + losAngeles)
        alert("El total de tu compra es de $ " + precioFinal);
      }
      else {
        alert("Opcion incorrecta, seleccione uno de nuestros productos o presiona x para finalizar.");
      }
      break;
    case "new york":
      let color3 = prompt("Elegi el color: \nNegro \nAzul \nBlanco");
      if (color3 === "negro") {
        precioFinal = parseInt(precioFinal + newYork)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color3 === "azul") {
        precioFinal = parseInt(precioFinal + newYork)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color3 === "blanco") {
        precioFinal = parseInt(precioFinal + newYork)
        alert("El total de tu compra es de $ " + precioFinal);
      }
      else {
        alert("Opcion incorrecta, seleccione uno de nuestros productos o presiona x para finalizar.");
      }
      break;
    case "boston":
      let color4 = prompt("Elegi el color: \nNegro \nAzul \nRojo \nBlanco");
      if (color4 === "negro") {
        precioFinal = parseInt(precioFinal + boston)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color4 === "azul") {
        precioFinal = parseInt(precioFinal + boston)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color4 === "rojo") {
        precioFinal = parseInt(precioFinal + boston)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color4 === "blanco") {
        precioFinal = parseInt(precioFinal + boston)
        alert("El total de tu compra es de $ " + precioFinal);
      }
      else {
        alert("Opcion incorrecta, seleccione uno de nuestros productos o presiona x para finalizar.");
      }
      break;
    case "san francisco":
      let color5 = prompt("Elegi el color: \nNegro \nNaranja \nBlanco");
      if (color5 === "negro") {
        precioFinal = parseInt(precioFinal + sanFrancisco)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color5 === "naranja") {
        precioFinal = parseInt(precioFinal + sanFrancisco)
        alert("El total de tu compra es de $ " + precioFinal);
      } else if (color5 === "blanco") {
        precioFinal = parseInt(precioFinal + sanFrancisco)
        alert("El total de tu compra es de $ " + precioFinal);
      }
      else {
        alert("Opcion incorrecta, seleccione uno de nuestros productos o presiona x para finalizar.");
      }
      break;

    default:
      alert("Opción no valida");
      break;
  }
  productos = prompt("Que gorra vas a querer comprar?: \nDetroit \nLos Angeles \nNew York \nBoston \nSan Francisco \nPresiona x para finalizar.");


};