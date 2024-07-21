export function createCardPage3(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'review__column review-margin';
    if (item.type === 'video') {
        itemDiv.innerHTML = `
            <div class="video__wrapper" data-src="${item.videoUrl}">
                <span class="video__icon">
                    <svg width="32" height="32">
                        <use xlink:href="./img/sprite.svg#player"></use>
                    </svg>
                </span>
                <img src="${item.thumbnail}" alt="poster" class="video__poster">
            </div>
        `;
    } else if (item.type === 'text') {
        itemDiv.innerHTML = `
            <div class="review__item pd-32 review-gray">
                <div class="review__grade">
                    <p class="review__name fz-24">${item.name}</p>
                    <div class="review__rating">
                        <svg width="20" height="20">
                            <use xlink:href="./img/sprite.svg#Star"></use>
                        </svg> 
                        <svg width="20" height="20">
                            <use xlink:href="./img/sprite.svg#Star"></use>
                        </svg> 
                        <svg width="20" height="20">
                            <use xlink:href="./img/sprite.svg#Star"></use>
                        </svg> 
                        <svg width="20" height="20">
                            <use xlink:href="./img/sprite.svg#Star"></use>
                        </svg> 
                        <svg width="20" height="20">
                            <use xlink:href="./img/sprite.svg#Star"></use>
                        </svg> 
                    </div>
                </div>
                <div class="review__text">${item.reviewFirst}<span class="review__more-text">${item.reviewSecond}</span></div>
                <div class="review__button">Оригинал отзыва</div>
            </div>
        `;
    }
    return itemDiv;
  }
