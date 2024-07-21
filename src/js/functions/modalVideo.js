export function modalVideo() {
    const modal = document.querySelector('.video-modal');
    const videoContainer = modal.querySelector('.video');
    const closeButton = document.getElementById('close-btn');

    function stopVideo() {
        const iframe = videoContainer.querySelector('iframe');
        if (iframe) {
            iframe.src = '';
            videoContainer.classList.remove('ready');
            document.body.classList.remove('no-scrolling');
        }
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') !== null) {
            modal.classList.remove('show');
            stopVideo();
        }
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        stopVideo();
    });

    document.addEventListener('click', (e) => {
        const wrapper = e.target.closest('.video__wrapper');
        if (wrapper) {
            if (videoContainer.classList.contains('ready')) {
                return;
            }

            const src = wrapper.getAttribute('data-src');
            videoContainer.classList.add('ready');
            document.body.classList.add('no-scrolling');
            modal.classList.add('show');

            videoContainer.innerHTML = '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        }
    });
}
