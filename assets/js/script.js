document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour afficher l'alerte de bienvenue
    const welcomeButton = document.getElementById('welcomeButton');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', function() {
            alert('Bienvenue sur mon CV en ligne !');
        });
    }

    // Animation des barres de progression
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
        const progress = bar.getAttribute('data-progress');
        setTimeout(function() {
            bar.querySelector('span').style.width = progress;
        }, 500); // délai pour laisser le temps au DOM de charger
    });

    // Validation et envoi du formulaire de contact
    const form = document.getElementById('contactForm');
    const messageEl = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le formulaire de se soumettre normalement
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Vérifie si tous les champs sont remplis
            if (name && email && message) {
                messageEl.textContent = `Merci ${name}, votre message a été envoyé avec succès !`;
                messageEl.style.color = 'green';
            } else {
                messageEl.textContent = 'Veuillez remplir tous les champs.';
                messageEl.style.color = 'red';
            }
        });
    }
});