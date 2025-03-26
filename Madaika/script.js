// Sélection des éléments du DOM
const header = document.querySelector('header');
const titre = document.querySelector('.titre');
const message = document.querySelector('.message');
const footer = document.querySelector('footer');

// Définition du texte initial et modifié
const texteInitial = titre.textContent;
const texteModifie = 'Boueni Anzilati Abdallah';

// Variable pour stocker l'état du titre
let estModifie = false;

// Définition du texte initial et modifié pour la classe message
const texteInitialMessage = message.textContent;
const texteModifieMessage = 'Haya🤧 bon pour une fois que je m\'investis sur quelque chose alors autant y\'aller jusqu\'au bout😩 je parle de ce que je fais là maintenant, de toi et moi fin de nous, je compte rester avec toi jusqu\'à la fin sois en certaine et te combler de bonheur et de joie tout les jours même si dès fois t\'aime un peu trop banalisé les chose mais bon hata j\'ai la flemme d\'écrire ce message mais vas-y c\'est pour ma cheffe bien aimé donc voilà, encore une fois joyeux anniversaire❤️ tu ne vas pas profiter de ta journée parce que je suis pas là et long vie à nous insh\'Allah🤲🏽✨ bisou😚❤️';

// Variable pour stocker l'état de la classe message
let estModifieMessage = false;

// Ajout d'un événement de clic sur le titre
titre.addEventListener('click', () => {
  // Vérification de l'état du titre
  if (estModifie) {
    // Revenir au texte initial
    titre.textContent = texteInitial;
    estModifie = false;
  } else {
    // Modification du texte du titre
    titre.textContent = texteModifie;
    estModifie = true;
  }
});

// Ajout d'un événement de clic sur la classe message
message.addEventListener('click', () => {
  // Vérification de l'état de la classe message
  if (estModifieMessage) {
    // Revenir au texte initial
    message.textContent = texteInitialMessage;
    estModifieMessage = false;
  } else {
    // Modification du texte de la classe message
    message.textContent = texteModifieMessage;
    estModifieMessage = true;
  }
});

// Fonction pour afficher un message de bienvenue
function afficherMessageBienvenue() {
  // Création d'un élément de paragraphe
  const paragraphe = document.createElement('p');
  // Définition du texte du paragraphe
  paragraphe.textContent = 'De la part de ton homme❤️';
  // Ajout de l'élément de paragraphe à la page
  document.body.appendChild(paragraphe);
  
  // Ajout de styles pour placer le paragraphe à droite et un peu en bas
  paragraphe.style.position = 'absolute';
  paragraphe.style.bottom = '10%';
  paragraphe.style.right = '20px';
  paragraphe.style.padding = '10px';
  paragraphe.style.fontSize = '20px'; // Ajout de la propriété font-size
}

// Appel de la fonction pour afficher le message de bienvenue
afficherMessageBienvenue();