// carrito.js

function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("contenedorCarrito");
  const total = document.getElementById("totalCarrito");

  contenedor.innerHTML = "";
  let totalPrecio = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
    total.textContent = "$0 COP";
    return;
  }

  carrito.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 80px; border-radius: 6px;">
      <div>
        <h3>${producto.nombre}</h3>
        <p>Precio unitario: $${producto.precio.toLocaleString()} COP</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Total: $${(producto.precio * producto.cantidad).toLocaleString()} COP</p>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
      </div>
    `;

    contenedor.appendChild(div);
    totalPrecio += producto.precio * producto.cantidad;
  });

  total.textContent = `$${totalPrecio.toLocaleString()} COP`;
}

function eliminarProducto(indice) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

function finalizarCompra() {
  alert("Gracias por tu compra. Nos pondremos en contacto contigo por correo electrónico.");
  localStorage.removeItem("carrito");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra);
});
