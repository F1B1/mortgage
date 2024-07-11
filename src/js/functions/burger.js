export function burger(){
  const iconMenu = document.querySelector('.icon-menu');
  const bodyMenu = document.querySelector('.header__mobile');

  iconMenu.addEventListener("click", function(e) {
	iconMenu.classList.toggle('active')
	bodyMenu.classList.toggle('active')
	document.body.classList.toggle('no-scrolling')
	});
}