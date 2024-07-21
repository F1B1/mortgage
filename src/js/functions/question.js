export function question(){
    document.querySelectorAll('.question__btn').forEach(button => {
        button.addEventListener('click', () => {
            const column = button.parentElement;
            const textElement = button.nextElementSibling;
    
            if (column.classList.contains('active')) {
                textElement.style.maxHeight = null;
                column.classList.remove('active');
            } else {
                textElement.style.maxHeight = textElement.scrollHeight + 'px';
                column.classList.add('active');
            }
        });
      });
}