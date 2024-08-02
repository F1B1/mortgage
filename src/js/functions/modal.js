export function modal(openButtonSelector, modalSelector, closeButtonSelector){
    const openButtons = openButtonSelector ? document.querySelectorAll(openButtonSelector) : null;
    const modal = document.querySelector(modalSelector);
    const closeButtons = modal.querySelectorAll(closeButtonSelector);

    function closeModal(e) {
        closeButtons.forEach(closeButton => {
            if (e.target === closeButton || e.target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('no-scrolling');
                document.removeEventListener('click', closeModal);
            }
        });
    }

    if (openButtons) {
        openButtons.forEach(button => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                modal.classList.add('show');
                document.body.classList.add('no-scrolling');
                document.addEventListener('click', closeModal);
            });
        });
    }

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.remove('show');
            document.body.classList.remove('no-scrolling');
            document.removeEventListener('click', closeModal);
        });
    });
}