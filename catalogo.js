// catalogo.js

const utilitarios = [
  {
    id: "1",
    nombre: "Soporte para Celular",
    precio: 25000,
    imagen: "img/soporte-celular.png"
  },
  {
    id: "2",
    nombre: "Organizador de Escritorio",
    precio: 32000,
    imagen: "img/organizador.png"
  }
];

const decorativos = [
  {
    id: "5",
    nombre: "Mini Escultura de Animal",
    precio: 27000,
    imagen: "img/escultura.png"
  },
  {
    id: "6",
    nombre: "Placa con Frase",
    precio: 22000,
    imagen: "img/placa.png"
  }
];

function crearTarjeta(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("producto");
  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio.toLocaleString()} COP</p>
  `;

  tarjeta.addEventListener("click", () => {
    window.location.href = `producto.html?id=${producto.id}`;
  });

  return tarjeta;
}

function cargarProductos(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";
  lista.forEach(producto => contenedor.appendChild(crearTarjeta(producto)));
}

document.addEventListener("DOMContentLoaded", () => {
  const btnUtilitarios = document.getElementById("mostrarUtilitarios");
  const btnDecorativos = document.getElementById("mostrarDecorativos");
  const seccionUtilitarios = document.getElementById("utilitarios");
  const seccionDecorativos = document.getElementById("decorativos");

  btnUtilitarios.addEventListener("click", () => {
    seccionUtilitarios.classList.remove("oculto");
    seccionDecorativos.classList.add("oculto");
    btnUtilitarios.classList.add("activo");
    btnDecorativos.classList.remove("activo");
  });

  btnDecorativos.addEventListener("click", () => {
    seccionDecorativos.classList.remove("oculto");
    seccionUtilitarios.classList.add("oculto");
    btnDecorativos.classList.add("activo");
    btnUtilitarios.classList.remove("activo");
  });

  cargarProductos(utilitarios, "utilitarios");
  cargarProductos(decorativos, "decorativos");
});
function mostrarCategoria(id) {
  document.querySelectorAll('.categoria').forEach(cat => cat.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

function irADetalle(id) {
  window.location.href = `detalle.html?id=${id}`;
}
