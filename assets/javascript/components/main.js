import { createHeader } from './header.js';
import { createFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.containeren');

    // Tilføj header
    container.appendChild(createHeader());

    // Tilføj hovedindhold
    const mainContent = document.createElement('main');
    mainContent.textContent = 'Velkommen til Wallywood!';
    container.appendChild(mainContent);

    // Tilføj footer
    container.appendChild(createFooter());
});
