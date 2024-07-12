export function paginationWidget(){
    const content = [
        { date: '24', month: 'ФЕВРАЛЬ', year: '2024', title: 'Выгодные кредиты на образование', text: 'Обеспечьте себе доступное образование с нашим подробным гидом по кредитам. Мы расскажем, как получить выгодные условия, минимизировать расходы и сделать образование доступным для каждого.', image: 'img/blog1.webp', isBig: true },
        { date: '26', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '22', month: 'МАЙ', year: '2024', title: 'Рефинансирование с низкой ставкой', text: 'Узнайте о нашей новой программе рефинансирования. Программа предоставляющая клиентам возможность снизить процен...', image: 'img/blog1.webp', isBig: false },
        { date: '19', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '17', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '16', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '13', month: 'МАЙ', year: '2024', title: 'Выгодные кредиты на образование', text: 'Обеспечьте себе доступное образование с нашим подробным гидом по кредитам. Мы расскажем, как получить выгодные условия, минимизировать расходы и сделать образование доступным для каждого.', image: 'img/blog2.webp', isBig: false },
        { date: '11', month: 'ФЕВРАЛЬ', year: '2024', title: 'Выгодные кредиты на образование', text: 'Обеспечьте себе доступное образование с нашим подробным гидом по кредитам. Мы расскажем, как получить выгодные условия, минимизировать расходы и сделать образование доступным для каждого.', image: 'img/blog1.webp', isBig: false },
        { date: '10', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '9', month: 'МАЙ', year: '2024', title: 'Рефинансирование с низкой ставкой', text: 'Узнайте о нашей новой программе рефинансирования. Программа предоставляющая клиентам возможность снизить процен...', image: 'img/blog1.webp', isBig: false },
        { date: '8', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '7', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '6', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '5', month: 'МАЙ', year: '2024', title: 'Выгодные кредиты на образование', text: 'Обеспечьте себе доступное образование с нашим подробным гидом по кредитам. Мы расскажем, как получить выгодные условия, минимизировать расходы и сделать образование доступным для каждого.', image: 'img/blog2.webp', isBig: false },
        { date: '11', month: 'ФЕВРАЛЬ', year: '2024', title: 'Выгодные кредиты на образование', text: 'Обеспечьте себе доступное образование с нашим подробным гидом по кредитам. Мы расскажем, как получить выгодные условия, минимизировать расходы и сделать образование доступным для каждого.', image: 'img/blog1.webp', isBig: false },
        { date: '10', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '9', month: 'МАЙ', year: '2024', title: 'Рефинансирование с низкой ставкой', text: 'Узнайте о нашей новой программе рефинансирования. Программа предоставляющая клиентам возможность снизить процен...', image: 'img/blog1.webp', isBig: false },
        { date: '8', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '7', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '6', month: 'МАЙ', year: '2024', title: 'Управляйте долгами эффективно', text: 'От экономии времени и ресурсов до возможности переноса и долговечности — узнайте, почему мод...', image: 'img/blog1.webp', isBig: false },
        { date: '5', month: 'МАЙ', year: '2024', title: 'Выгодные кредиты на образование', text: 'Обеспечьте себе доступное образование с нашим подробным гидом по кредитам. Мы расскажем, как получить выгодные условия, минимизировать расходы и сделать образование доступным для каждого.', image: 'img/blog2.webp', isBig: false },

    ];

    const contentDiv = document.getElementById('content');
    const pageNumbersDiv = document.getElementById('pageNumbers');
    const showMoreButton = document.getElementById('showMore');

    
    let currentPage = 1;
    let itemsPerPage = calculateItemsPerPage(currentPage);
    let totalPages = calculateTotalPages();

    function calculateItemsPerPage(page) {
        const maxColumns = 8;
        const bigItemColumns = 2;
        const smallItemColumns = 1;

        let columns = maxColumns;
        let startIndex = (page - 1) * maxColumns;
        let endIndex = startIndex + maxColumns;
        let pageItems = content.slice(startIndex, endIndex);
        
        pageItems.forEach(item => {
            if (item.isBig) {
                columns -= (bigItemColumns - smallItemColumns);
            }
        });

        if (columns < 4) columns = 4;

        if (window.innerWidth <= 767) {
            columns = 5;
        }

        return columns;
    }

    function calculateTotalPages() {
        let totalColumns = 0;

        content.forEach(item => {
            if (item.isBig) {
                totalColumns += 2;
            } else {
                totalColumns += 1;
            }
        });

        return Math.ceil(totalColumns / 8);
    }

    function renderContent(page, append = false) {
        if (!append) contentDiv.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        const pageContent = content.slice(start, end);

        pageContent.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'blog__column pd-32';
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
            contentDiv.appendChild(itemDiv);
        });

        // Hide the "Show More" button if on the last page
        if (currentPage >= totalPages) {
            showMoreButton.style.display = 'none';
        } else {
            showMoreButton.style.display = 'block';
        }
    }

    function renderPageNumbers() {
        pageNumbersDiv.innerHTML = '';
        const maxPagesToShow = 3;
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);

        if (endPage - startPage < maxPagesToShow - 1) {
            if (currentPage === 1) {
                endPage = Math.min(totalPages, endPage + (maxPagesToShow - (endPage - startPage) - 1));
            } else if (currentPage === totalPages) {
                startPage = Math.max(1, startPage - (maxPagesToShow - (endPage - startPage) - 1));
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageDiv = document.createElement('div');
            pageDiv.textContent = i;
            if (i === currentPage) {
                pageDiv.classList.add('active');
            }
            pageDiv.addEventListener('click', () => {
                currentPage = i;
                itemsPerPage = calculateItemsPerPage(currentPage);
                renderContent(currentPage);
                renderPageNumbers();
            });
            pageNumbersDiv.appendChild(pageDiv);
        }
    }

    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            itemsPerPage = calculateItemsPerPage(currentPage);
            renderContent(currentPage);
            renderPageNumbers();
        }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            itemsPerPage = calculateItemsPerPage(currentPage);
            renderContent(currentPage);
            renderPageNumbers();
        }
    });

    showMoreButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            itemsPerPage = calculateItemsPerPage(currentPage);
            renderContent(currentPage, true);
            renderPageNumbers();
        }
    });

    renderContent(currentPage);
    renderPageNumbers();

    window.addEventListener('resize', () => {
        itemsPerPage = calculateItemsPerPage(currentPage);
        totalPages = calculateTotalPages();
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        renderContent(currentPage);
        renderPageNumbers();
    });
}