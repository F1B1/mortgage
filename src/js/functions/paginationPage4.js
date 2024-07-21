export function createCardPage4(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'vacation__column';
    itemDiv.innerHTML = `
        <div class="vacation__item pd-32">
            <p class="vacation__sub-title fz-24">${item.title}</p>
            <p class="vacation__salary">${item.salary}</p>
            <p class="vacation__text">${item.description}</p>
            <a href="${item.link}" class="vacation__link link-refer arr-rt">Информация о вакансии
                <svg width="20" height="24">
                    <use xlink:href="./img/sprite.svg#arrow-line"></use>
                </svg>
            </a>
        </div>
    `;
    return itemDiv;
  }
