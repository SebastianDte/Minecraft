// Función para copiar la IP al portapapeles
function copiarIP() {
  const ip = document.getElementById("server-ip").innerText;
  navigator.clipboard.writeText(ip).then(() => {
    alert("IP copiada al portapapeles!");
  });
}

// Toggle menú hamburguesa navbar
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar ul li a');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Cerrar menú al hacer click en cualquier link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});

// Función para cargar contenido HTML externo en un div
async function cargarContenido(idDiv, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al cargar ' + url);
    const html = await response.text();
    document.getElementById(idDiv).innerHTML = html;
  } catch (error) {
    document.getElementById(idDiv).innerHTML = '<p>No se pudo cargar el contenido.</p>';
    console.error(error);
  }
}

// Cuando cargue la página, traemos los contenidos para las dos pestañas
window.addEventListener('DOMContentLoaded', () => {
  cargarContenido('oficial-content', 'instruccionesOficiales.html');
  cargarContenido('pirata-content', 'instruccionesPirata.html');
});

// Tabs para instrucciones
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Quitar active a todos los botones
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Poner active en el botón clickeado
    button.classList.add('active');

    // Ocultar todos los contenidos
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    // Mostrar el contenido seleccionado
    document.getElementById(tab + '-content').classList.add('active');
  });
});
