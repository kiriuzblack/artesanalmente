document.getElementById('pedidoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('mensajeEnviado').textContent = "¡Tu pedido fue enviado con éxito!";
  this.reset();
});
// Animaciones suaves en scroll (solo si deseas agregar efecto)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.producto-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });
});
