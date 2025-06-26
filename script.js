document.getElementById('pedidoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('mensajeEnviado').textContent = "¡Tu pedido fue enviado con éxito!";
  this.reset();
});
