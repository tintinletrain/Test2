function navigateTo(page) {
    window.location.href = page;
}

function showContent(option) {
    const contentDiv = document.querySelector('.content');
    // Ici, nous pouvons ajouter le contenu spécifique pour chaque option
    switch (option) {
        case 'savoirs':
            contentDiv.innerHTML = '<h2>Savoirs</h2><p>[Votre contenu ici]</p>';
            break;
        case 'antecedents':
            contentDiv.innerHTML = '<h2>Antécédents</h2><p>[Votre contenu ici]</p>';
            break;
        // Ajoutez des cas pour les autres options...
        default:
            contentDiv.innerHTML = '<p>Sélectionnez une option</p>';
    }
}
