export function spoiler(event){
    event.preventDefault()
    if (event.target.classList.contains('review__button') && innerWidth < 577) {
        document.querySelector('.review__button').innerHTML = 'Показать полностью'
        const reviewContent = event.target.closest('.review__item');
        if (!reviewContent) return;

        reviewContent.classList.toggle('show-full');
        const isExpanded = reviewContent.classList.contains('show-full');
        event.target.textContent = isExpanded ? 'Скрыть' : 'Показать полностью';
    }

}