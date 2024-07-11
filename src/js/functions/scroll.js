export function scroll() {
    const headerElement = document.querySelector('.header');

    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.width = '100%';
    sentinel.style.height = '1px';
    sentinel.style.visibility = 'hidden';
    document.body.appendChild(sentinel);

    const callback = function (entries) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('scroll');
        } else {
            headerElement.classList.add('scroll');
        }
    };

    const headerObserver = new IntersectionObserver(callback, { threshold: [0] });
    headerObserver.observe(sentinel);
  }