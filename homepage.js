document.addEventListener('DOMContentLoaded', () => {
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach(card => {
        const header = card.querySelector('h2');
        const foldersContainer = card.querySelector('.folders-container');
        
        // Initialisation : cache tous les containers au chargement
        foldersContainer.classList.add('hidden');
        
        header.addEventListener('click', (e) => {
            // Empêche le déclenchement sur les dossiers
            if (e.target.classList.contains('folder')) return;
            
            // Ferme tous les autres containers ouverts
            document.querySelectorAll('.folders-container.visible').forEach(container => {
                if (container !== foldersContainer) {
                    container.classList.remove('visible');
                    container.classList.add('hidden');
                }
            });
            
            // Bascule l'état du container actuel
            foldersContainer.classList.toggle('hidden');
            foldersContainer.classList.toggle('visible');
        });
        
        // Gestion des clics sur les dossiers
        card.querySelectorAll('.folder').forEach(folder => {
            folder.addEventListener('click', (e) => {
                const level = card.dataset.level;
                const dossier = folder.dataset.dossier;
                
                // Validation basique des paramètres
                if (!level || !dossier) {
                    console.error('Niveau ou dossier non défini');
                    return;
                }
                
                // Redirection avec paramètres
                window.location.href = `exercices.html?level=${encodeURIComponent(level)}&dossier=${encodeURIComponent(dossier)}`;
            });
        });
    });
});