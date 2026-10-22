document.addEventListener('DOMContentLoaded', function() {
	if (!('IntersectionObserver' in window)) return;
	
	const animSlide = document.querySelectorAll('[data-scroll]');
	const validSlide = [];
	animSlide.forEach(function(elemen) {
		const dataSlide = elemen.dataset.scroll;
		if (!['slide-left', 'slide-right', 'slide-up', 'slide-down', 'scale-in', 'scale-out', 'fade'].includes(dataSlide)) return;
		validSlide.push(elemen);
		
		const durSlide = elemen.dataset.duration || '0.5s';
		const easSlide = elemen.dataset.easing || 'ease-in-out';
		const strSlide = parseInt(elemen.dataset.start, 10) || 100;
		
		const moveSlide = strSlide * (
			window.innerWidth >= 1024 ? 1 :
			window.innerWidth >= 768 ? 2 / 3 :
			1/3
		);
		
		elemen.style.transition = 'none';
		
		if (dataSlide === 'slide-left') {
			elemen.style.transform = `translateX(-${moveSlide}px)`;
			elemen.style.opacity = '0';
		}
		else if (dataSlide === 'slide-right') {
			elemen.style.transform = `translateX(${moveSlide}px)`;
			elemen.style.opacity = '0';
		}
		else if (dataSlide === 'slide-up') {
			elemen.style.transform = `translateY(${moveSlide}px)`;
			elemen.style.opacity = '0';
		}
		else if (dataSlide === 'slide-down') {
			elemen.style.transform = `translateY(-${moveSlide}px)`;
			elemen.style.opacity = '0';
		}
		else if (dataSlide === 'scale-in') {
			elemen.style.transform = 'scale(0.5)';
			elemen.style.opacity = '0';
		}
		else if (dataSlide === 'scale-out') {
			elemen.style.transform = 'scale(1.5)';
			elemen.style.opacity = '0';
		}
		else if (dataSlide === 'fade') {
			elemen.style.opacity = '0';
		}
		
		void elemen.offsetWidth;
		
		elemen.style.transition = `
		transform ${durSlide} ${easSlide},
		opacity ${durSlide} ${easSlide}`;
	});
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const el = entry.target;
			const scrn = parseFloat(el.dataset.threshold) || 0.05;
			if (entry.intersectionRatio >= scrn) {
				el.style.transform = 'none';
				el.style.opacity = '1';
				observer.unobserve(el);
			}
		});
	},{
		threshold: [0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
		root: null,
		rootMargin: '0px'
	});

	validSlide.forEach((el) => {
		observer.observe(el);
	});
});