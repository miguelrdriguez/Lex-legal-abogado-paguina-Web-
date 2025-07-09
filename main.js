// Mostrar u ocultar menú en móvil
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('activo');
}

// Abrir WhatsApp en nueva pestaña
function abrirWhatsApp() {
  window.open("https://wa.me/573123456789?text=Hola%2C%20quisiera%20una%20asesor%C3%ADa%20jur%C3%ADdica", "_blank");
}

// Submenús táctiles en celular
document.addEventListener("DOMContentLoaded", function() {
  const submenus = document.querySelectorAll(".has-submenu > a");
  
  submenus.forEach((enlace) => {
    enlace.addEventListener("click", function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        submenu.classList.toggle("visible");
      }
    });
  });
  
  // Slider automático
  const heroImages = [
    "hero1.jpg",
    "hero2.jpg",
    "hero3.jpg",
    "hero4.jpg",
    "hero5.jpg"
  ];
  
  let currentImage = 0;
  const heroImgElement = document.getElementById("hero-image");
  
  if (heroImgElement) {
    setInterval(() => {
      currentImage = (currentImage + 1) % heroImages.length;
      heroImgElement.src = heroImages[currentImage];
    }, 4000);
  }
});