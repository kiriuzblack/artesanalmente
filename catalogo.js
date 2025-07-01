// catalogo.js

// Mostrar sección correspondiente al hacer clic en la pestaña
function mostrarSeccion(tipo) {
  const utilitarios = document.getElementById('utilitarios');
  const decorativos = document.getElementById('decorativos');

  if (tipo === 'utilitarios') {
    utilitarios.style.display = 'flex';
    decorativos.style.display = 'none';
  } else {
    decorativos.style.display = 'flex';
    utilitarios.style.display = 'none';
  }
}

// Detectar clic en tarjetas de producto para redirigir
function configurarRedireccionProductos() {
  const productos = document.querySelectorAll('.producto');
  productos.forEach(producto => {
    producto.addEventListener('click', () => {
      const id = producto.getAttribute('data-id');
      window.location.href = `producto.html?id=${id}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('utilitarios');
  configurarRedireccionProductos();
});
