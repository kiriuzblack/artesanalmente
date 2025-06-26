document.getElementById('pedidoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('mensajeEnviado').textContent = "¡Tu pedido fue enviado con éxito!";
  this.reset();
});
// Animaciones suaves al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".animado");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1 // Qué tan visible debe estar un elemento para activar la animación
  });

  elementosAnimados.forEach((el) => observer.observe(el));
});

// Feedback al enviar formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pedidoForm");
  const mensaje = document.getElementById("mensajeEnviado");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Aquí podrías enviar los datos a un servidor si quieres
      form.reset();

      mensaje.textContent = "¡Gracias por tu pedido! Te contactaremos pronto.";
      mensaje.style.color = "#4f5d35";
      mensaje.style.fontWeight = "bold";

      setTimeout(() => {
        mensaje.textContent = "";
      }, 5000);
    });
  }
});
