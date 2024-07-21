export function createCardPage2(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'case__column';
    const situationList = item.situation.map(point => `<li>${point}</li>`).join('');
    itemDiv.innerHTML = `
        <div class="case__inner">
            <div class="case__front pd-32">
                <div class="situation__person">
                    <div class="situation__avatar">
                        <img src="${item.avatar}" alt="avatar">
                    </div>
                    <p class="situation__name">${item.name}</p>
                <p class="situation__job">${item.job}</p>
                </div>
            <div class="situation__point fz-24"><span>${item.goal}</span></div>
            <div class="situation__describe">
                <p class="situation__text">Жизненная ситуация:</p>
                <ul class="situation__list">${situationList}</ul>
            </div>
            </div>
            <div class="case__back pd-32">
            <p class="situation__text fz-24"><span>Результат</span></p>
            <p class="situation__result">Одобрена ипотека без первоначального взноса</p>
            <ul class="situation__list-result list-reset">
                <li>Срок: <span>2 дня</span></li>
                <li>Ставка: <span>10,5%</span></li>
                <li>Сумма кредита:<span></span>2 300 000&nbsp;₽</li>
            </ul>
            <a href="#" class="situation__link arr-rt">Читать отзывы
                <svg width="20" height="24">
                    <use xlink:href="./img/sprite.svg#arrow-line"></use>
                </svg>
            </a>
            </div>
        </div>`;
    return itemDiv;
  }

  