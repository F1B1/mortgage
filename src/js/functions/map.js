export function loadMap(){
    let mapContainers = document.querySelectorAll(".contact__map-container");

    function loadMap(mapContainer) {
        var map = mapContainer.querySelector('.contact__map');
        var iframe = document.createElement('iframe');
        iframe.src = map.dataset.src;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = '';
        iframe.title = 'map';
        map.appendChild(iframe);
    }

    function handleLoad() {
        mapContainers.forEach(function(mapContainer) {
            if (!mapContainer.dataset.loaded) {
                loadMap(mapContainer);
                mapContainer.dataset.loaded = true;
            }
        });
    }

    window.onload = handleLoad;

    if ('requestIdleCallback' in window) {
        requestIdleCallback(handleLoad);
    } else {
        window.setTimeout(handleLoad, 1);
    }
}

