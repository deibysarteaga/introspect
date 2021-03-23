(function() {
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
		
		const menuHamburguesa = document.querySelector('.menu-hamburguesa i');

		const navegacion = document.querySelector('.menu-movil .navegacion');

		const menu = document.querySelector('.menu-movil .navegacion ul');

		const x = document.querySelector('.x');

		const submit = document.querySelector('.submit');

		const formulario = document.querySelector('.formulario');

		menuHamburguesa.addEventListener('click', () => {
			setTimeout(() => {
				navegacion.style.display = "block";
				menuHamburguesa.style.display = "none";
				setTimeout(() => {
					navegacion.style.opacity = ".98";	
				}, 1)
			}, .1)
		})

		x.addEventListener('click', () => {
			setTimeout(() => {
				navegacion.style.opacity = "0";
				setTimeout(() => {
					navegacion.style.display = "none";
					setTimeout(() => {
						menuHamburguesa.style.display = "block";
					}, .1)
				}, 500)
			}, .1)
		})

		submit.addEventListener('click', e => {
			e.preventDefault()
			formulario.reset()
		})
	
	}
	)
})();