// producto.js

const productos = [
  {
    id: "1",
    nombre: "Soporte para Celular",
    precio: 25000,
    descripcion: "Soporte compacto hecho en madera de pino reciclada. Ideal para escritorios.",
    imagen: "img/soporte-celular.png"
  },
  {
    id: "2",
    nombre: "Organizador de Escritorio",
    precio: 32000,
    descripcion: "Organizador multifuncional para lápices, notas y celular. Diseño minimalista.",
    imagen: "img/organizador.png"
  },
  {
    id: "5",
    nombre: "Mini Escultura de Animal",
    precio: 27000,
    descripcion: "Escultura artesanal pequeña, ideal para decorar espacios reducidos.",
    imagen: "img/escultura.png"
  },
  {
    id: "6",
    nombre: "Placa con Frase",
    precio: 22000,
    descripcion: "Placa de madera con grabado personalizado. Elige tu frase favorita.",
    imagen: "img/placa.png"
  }
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const producto = productos.find(p => p.id === id);

if (producto) {
  document.getElementById("imagenProducto").src = producto.imagen;
  document.getElementById("imagenProducto").alt = producto.nombre;
  document.getElementById("nombreProducto").textContent = producto.nombre;
  document.getElementById("precioProducto").textContent = `$${producto.precio.toLocaleString()} COP`;
  document.getElementById("descripcionProducto").textContent = producto.descripcion;
} else {
  document.querySelector("main").innerHTML = `<p style='text-align:center'>Producto no encontrado.</p>`;
}

function agregarAlCarrito() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  if (!cantidad || cantidad <= 0) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carrito.findIndex(item => item.id === producto.id);

  if (index >= 0) {
    carrito[index].cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito.");
}
