// JavaScript pour ajouter des interactions aux projets

const projects = document.querySelectorAll('.project');

// Ajouter l'événement au survol des projets
projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    project.classList.add('active');
  });

  project.addEventListener('mouseout', () => {
    project.classList.remove('active');
  });
});

const textElement = document.getElementById('language-java');
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