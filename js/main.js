const productos = [
  // 59fifty
  {
      id: "Detroit Tigers 59FIFTY Citrus Pop",
      titulo: "Detroit Tigers 59FIFTY Citrus Pop",
      imagen: "./img/59fifty/detroit/1.jpg",
      categoria: {
          nombre: "59fifty",
          id: "59fifty"
      },
      precio: 19499
  },
  {
    id: "Los Angeles Dodgers 59FIFTY Citrus Pop",
    titulo: "Los Angeles Dodgers 59FIFTY Citrus Pop",
    imagen: "./img/59fifty/los-angeles/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},{
    id: "New York Yankees 59FIFTY Diamond Era",
    titulo: "New York Yankees 59FIFTY Diamond Era",
    imagen: "./img/59fifty/new-york/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 17599
},{
    id: "Boston Red Sox 59FIFTY Citrus Pop",
    titulo: "Boston Red Sox 59FIFTY Citrus Pop",
    imagen: "./img/59fifty/boston/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},{
    id: "San Francisco Giants 59FIFTY Citrus Pop",
    titulo: "San Francisco Giants 59FIFTY Citrus Pop",
    imagen: "./img/59fifty/san-francisco/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},{
    id: "Philadelphia Phillies 59FIFTY Citrus Pop",
    titulo: "Philadelphia Phillies 59FIFTY Citrus Pop",
    imagen: "./img/59fifty/philadelphia/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},{
    id: "New York Mets 59FIFTY Citrus Pop",
    titulo: "New York Mets 59FIFTY Citrus Pop",
    imagen: "./img/59fifty//new-york-mets/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},{
    id: "Miami Heat 59FIFTY Dual Logo",
    titulo: "Miami Heat 59FIFTY Dual Logo",
    imagen: "./img/59fifty//miami/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},{
    id: "Golden State Warriors 59FIFTY Citrus Pop",
    titulo: "Golden State Warriors 59FIFTY Citrus Pop",
    imagen: "./img/59fifty/golden-state/1.jpg",
    categoria: {
        nombre: "59fifty",
        id: "59fifty"
    },
    precio: 19499
},
  // 9forty
  {
      id: "Manchester United FC 9FORTY",
      titulo: "Manchester United FC 9FORTY",
      imagen: "./img/9forty/manchester/1.jpg",
      categoria: {
          nombre: "9forty",
          id: "9forty"
      },
      precio: 12299
  },
  {
    id: "Tottenham Hotspur FC 9FORTY",
    titulo: "Tottenham Hotspur FC 9FORTY",
    imagen: "./img/9forty/tottenham/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},{
    id: "Ducati Motor Logo Tonal Camo Mesh 9FORTY",
    titulo: "Ducati Motor Logo Tonal Camo Mesh 9FORTY",
    imagen: "./img/9forty/ducati/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},{
    id: "Los Angeles Lakers 9FORTY NBA Grayscale",
    titulo: "Los Angeles Lakers 9FORTY NBA Grayscale",
    imagen: "./img/9forty/lakers/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},{
    id: "Chelsea FC Lion Crest Bob Ripstop 9FORTY",
    titulo: "Chelsea FC Lion Crest Bob Ripstop 9FORTY",
    imagen: "./img/9forty/chealse/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},{
    id: "Houston Rockets Era 9FORTY",
    titulo: "Houston Rockets Era 9FORTY",
    imagen: "./img/9forty/houston/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},{
    id: "Los Angeles Dodgers Diamond Era 9FORTY",
    titulo: "Los Angeles Dodgers Diamond Era 9FORTY",
    imagen: "./img/9forty/dodgers/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},{
    id: "New York Yankees 9FORTY Tonal Mesh Trucker",
    titulo: "New York Yankees 9FORTY Tonal Mesh Trucker",
    imagen: "./img/9forty/yankees/1.jpg",
    categoria: {
        nombre: "9forty",
        id: "9forty"
    },
    precio: 12299
},
  // 39thirty
  {
      id: "Jacksonville Jaguars NFL22 Sideline 39THIRTY",
      titulo: "Jacksonville Jaguars NFL22 Sideline 39THIRTY",
      imagen: "./img/39thirty/jacksonville/1.jpg",
      categoria: {
          nombre: "39thirty",
          id: "39thirty"
      },
      precio: 13599
  },{
    id: "Chicago Bears NFL22 Sideline 39THIRTY",
    titulo: "Chicago Bears NFL22 Sideline 39THIRTY",
    imagen: "./img/39thirty/chicago/1.jpg",
    categoria: {
        nombre: "39thirty",
        id: "39thirty"
    },
    precio: 13599
},{
    id: "Brooklyn Nets Team Classic 39THIRTY",
    titulo: "Brooklyn Nets Team Classic 39THIRTY",
    imagen: "./img/39thirty/brooklyn/1.jpg",
    categoria: {
        nombre: "39thirty",
        id: "39thirty"
    },
    precio: 13599
},{
    id: "New England Patriots NFL22 Sideline 39THIRTY",
    titulo: "New England Patriots NFL22 Sideline 39THIRTY",
    imagen: "./img/39thirty/new-england/1.jpg",
    categoria: {
        nombre: "39thirty",
        id: "39thirty"
    },
    precio: 13599
},{
    id: "Tampa Bay Buccaneers NFL22 Sideline 39THIRTY",
    titulo: "Tampa Bay Buccaneers NFL22 Sideline 39THIRTY",
    imagen: "./img/39thirty/tampa/1.jpg",
    categoria: {
        nombre: "39thirty",
        id: "39thirty"
    },
    precio: 13599
},
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
      `;

      contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          tituloPrincipal.innerText = productoCategoria.categoria.nombre;
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
      }

  })
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
} 