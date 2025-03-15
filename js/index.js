
    // Navegación entre páginas
/*
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const accessibilityBtn = document.querySelector('.accessibility-btn');
  const accessibilityPanel = document.querySelector('.accessibility-panel');
  const fontSizeBtns = document.querySelectorAll('.font-size-btn');
  const highContrastToggle = document.getElementById('high-contrast');
  const chatInput = document.querySelector('.chat-input input');
  const chatSendBtn = document.querySelector('.chat-input button');
  const chatMessages = document.querySelector('.chat-messages');

  // Función para cambiar de página
  function navigateToPage(pageId) {
    pages.forEach(page => {
      page.classList.remove('active-page');
      page.classList.add('hidden-page');
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.classList.remove('hidden-page');
      activePage.classList.add('active-page');
    }

    // Cerrar el menú en móviles
    navMenu.classList.remove('active');

    // Scroll al inicio
    window.scrollTo(0, 0);
  }

  // Eventos para los enlaces de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const pageId = this.getAttribute('data-page');
      navigateToPage(pageId);
    });
  });

  // Menú móvil
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Panel de accesibilidad
  accessibilityBtn.addEventListener('click', function () {
    accessibilityPanel.classList.toggle('active');
  });

  // Tamaño de la fuente
  fontSizeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const action = this.getAttribute('data-action');
      const html = document.documentElement;
      let currentSize = parseFloat(getComputedStyle(html).fontSize);

      if (action === 'increase') {
        html.style.fontSize = (currentSize + 2) + 'px';
      } else if (action === 'decrease') {
        html.style.fontSize = (currentSize - 2) + 'px';
      } else if (action === 'reset') {
        html.style.fontSize = '16px';
      }
    });
  });

  // Alto contraste
  highContrastToggle.addEventListener('change', function () {
    document.body.classList.toggle('high-contrast', this.checked);
  });

  // Funcionalidad del chat
  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }

  function sendChatMessage() {
    const messageText = chatInput.value.trim(); // Obtenemos el texto del input y eliminamos espacios en blanco
    if (messageText) { // Solo enviamos si hay texto
      const messageElement = document.createElement('div'); // Creamos un nuevo elemento div para el mensaje
      messageElement.classList.add('chat-message'); // Añadimos una clase para estilos
      messageElement.textContent = messageText; // Establecemos el contenido del mensaje
      chatMessages.appendChild(messageElement); // Añadimos el mensaje al contenedor de mensajes
      chatInput.value = ''; // Limpiamos el campo de entrada
      chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazamos hacia abajo para mostrar el nuevo mensaje
    }
  }
});*/