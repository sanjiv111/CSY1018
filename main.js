const hamburgermMenu = document.querySelector ('#navigation .nav_icon');
const navContent = document.querySelector('#nav_content');
const closeNavButton = document.querySelector('#nav_content .close_button');
const navLinks = document.querySelectorAll('#nav_content nav ul li a');



hamburgermMenu.addEventListener('click',()=> {
	navContent.classList.add('show');
	document.body.style.overflow="hidden"
})
closeNavButton.addEventListener('click',()=> {
	navContent.classList.remove('show');
	document.body.style.overflow="initial";
})
navLinks.forEach( link => {
	Link.addEventListener('click', ()=> {
		navContent.classList.remove('show');
	document.body.style.overflow="initial";

	})
})