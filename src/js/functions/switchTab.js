export function switchTab(contentSelector, tabSelector) {
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.add('is-hidden'));

            tab.classList.add('active');
            const contentToShow = document.querySelectorAll(`[data-content="${tab.dataset.tab}"]`);
            contentToShow.forEach(content => content.classList.remove('is-hidden'));
        });
    });
}
