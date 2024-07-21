export function createCardPage1(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'blog__column pd-32';
    if (item.isActive) {
        itemDiv.classList.add('active');
    }
    if (item.isBig && window.innerWidth > 767) {
        itemDiv.classList.add('big');
    }
    itemDiv.innerHTML = `
        <div class="blog__times">
            <time class="blog__date">${item.date}</time>
            <time class="blog__time">
                ${item.month}<br>${item.year}
            </time>
        </div>
        <div class="blog__content">
            <p class="blog__sub-title">${item.title}</p>
            <p class="blog__text">${item.text}</p>
            <div class="blog__bg">
                <img src="${item.image}" alt="blog">
            </div>
        </div>`;
    return itemDiv;
  }
