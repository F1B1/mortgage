export function dropdown(){
  const dropdownBtn = document.querySelector(".drop-list");
  const dropdownLink = document.querySelector(".drop-link");
  const dropdownMenu = document.querySelector(".header__sub-menu");
  const toggleArrow = dropdownBtn.querySelector("svg");

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
    toggleArrow.classList.toggle('show');
    dropdownLink.classList.toggle('show');
  });

  // Отменяем закрытие меню при клике внутри подменю
  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('header__sub-link')) {
      dropdownMenu.classList.remove('show');
      toggleArrow.classList.remove('show');
      dropdownLink.classList.remove('show');
    }
  });

  // Закрываем меню при клике вне его
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show');
      toggleArrow.classList.remove('show');
      dropdownLink.classList.remove('show');
    }
  });
}