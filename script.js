document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.cards');

    function showCard(cardIndex) {
        container.style.visibility = 'visible';
        cards.forEach((card, index) => {
            if (index === cardIndex - 1) {
                card.style.transform = 'scale(1)';
            } else {
                card.style.transform = 'scale(0)';
            }
        });
    }

    window.showCard = showCard;
});
