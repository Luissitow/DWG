document.addEventListener('DOMContentLoaded', function() {
  const btnOpen  = document.getElementById('btn-ver-paquetes');
  const modal    = document.getElementById('modal-paquetes');
  const btnClose = document.getElementById('close-paquetes');

  // Abrir modal
  btnOpen.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
  });

  // Cerrar con la X
  btnClose.addEventListener('click', function() {
    modal.classList.remove('active');
  });

  // Cerrar al hacer click fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
