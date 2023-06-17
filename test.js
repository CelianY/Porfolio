// JavaScript pour gérer l'effet de disparition et réapparition du texte

// Sélectionner l'élément du texte
const message = document.querySelector('.message');

let prevScrollPos = window.pageYOffset;

// Fonction pour gérer l'effet de disparition et réapparition du texte
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Défilement vers le haut
    message.style.opacity = '1';
  } else {
    // Défilement vers le bas
    message.style.opacity = '0';
  }

  prevScrollPos = currentScrollPos;
}

// Écouter l'événement de défilement de la fenêtre
window.addEventListener('scroll', handleScroll);

// Attente de 3 secondes avant d'afficher la photo de profil
document.addEventListener("DOMContentLoaded", function () {
  const message = document.querySelector(".message");
  const profilePic = document.querySelector(".profile-pic");

  // Animation de la disparition du texte et de l'apparition de l'image
  setTimeout(function () {
    message.style.marginTop = "500px"; // Descendre le texte davantage
    profilePic.style.opacity = "1";
  }, 1000);
});

const textElement = document.getElementById('animated-text');
  const text = textElement.textContent;
  textElement.textContent = '';

  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(typeText, Math.random() * 50); // Vous pouvez ajuster la vitesse de frappe en modifiant cette valeur
    }
  }

  typeText();


function closeMenu() {
  document.getElementById("menu-toggle").checked = false;
}

