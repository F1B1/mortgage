export function modalVideo(){
	const modal = document.querySelector('.video-modal')
    const videoContainer  = modal.querySelector('.video')
	const videoWrappers  = document.querySelectorAll('.video__wrapper')
	const closeButton = document.getElementById('close-btn');


	function stopVideo() {
		const iframe = videoContainer.querySelector('iframe');
		if (iframe) {
		  iframe.src = '';
		  videoContainer.classList.remove('ready');
		  document.body.classList.remove('no-scrolling');
		}
	  }
	
	  // Event listener to close the modal
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
	
	  // Event listeners for video previews
	  videoWrappers.forEach(wrapper => {
		wrapper.addEventListener('click', function () {
		  if (videoContainer.classList.contains('ready')) {
			return;
		  }
	
		  const src = this.getAttribute('data-src');
		  videoContainer.classList.add('ready');
		  document.body.classList.add('no-scrolling');
		  modal.classList.add('show');
	
		  videoContainer.innerHTML = '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		});
	  });
	
}