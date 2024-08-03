export function loadMap(){
    var mapContainers = document.querySelectorAll('.contact__map');

    function initializeYandexMap(mapContainer) {
        var iframe = document.createElement('iframe');
        iframe.src = mapContainer.dataset.src;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = '';
        iframe.title = 'map';
        mapContainer.innerHTML = ''; 
        mapContainer.appendChild(iframe);
    }

    // Используем IntersectionObserver для ленивой загрузки
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var mapContainer = entry.target;
                initializeYandexMap(mapContainer);
                observer.unobserve(mapContainer); // Останавливаем наблюдение за загруженной картой
            }
        });
    });

    mapContainers.forEach(function(mapContainer) {
        observer.observe(mapContainer);
    });

    // Асинхронная загрузка скрипта Яндекс.Карт
    function loadYandexMapScript(callback) {
        var script = document.createElement('script');
        script.defer = true;
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=602846fc-cf70-4081-bf1e-5d000502903e';
        script.onload = callback;
        script.onerror = function() {
            console.error("Не удалось загрузить скрипт Яндекс.Карт. Проверьте API ключ.");
        };
        document.head.appendChild(script);
    }

    loadYandexMapScript(function() {
        mapContainers.forEach(function(mapContainer) {
            // Инициализируем карту, если она видима сразу
            var rect = mapContainer.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight) {
                initializeYandexMap(mapContainer);
            }
        });
    });
}