
document.addEventListener('DOMContentLoaded', () => {
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach(card => {
        const header = card.querySelector('h2');
        const foldersContainer = card.querySelector('.folders-container');
        
        header.addEventListener('click', (e) => {
            // Ferme tous les autres containers
            document.querySelectorAll('.folders-container').forEach(container => {
                if (container !== foldersContainer) {
                    container.classList.add('hidden');
                    container.classList.remove('visible');
                }
            });
            
            // Ouvre/ferme le container actuel
            foldersContainer.classList.toggle('hidden');
            foldersContainer.classList.toggle('visible');
            
            // Empêche la propagation si nécessaire
            e.stopPropagation();
        });
        
        // Gestion des clics sur les dossiers
        card.querySelectorAll('.folder').forEach(folder => {
            folder.addEventListener('click', (e) => {
                e.stopPropagation();
                const level = card.dataset.level;
                const dossier = folder.dataset.dossier;
                window.location.href = `exercices.html?level=${level}&dossier=${dossier}`;
            });
        });
    });
});