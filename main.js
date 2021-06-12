const hamburgermMenu = document.querySelector ('#nav_icon_section .nav_icon');
const navContent = document.querySelector('#nav_content_section');
const closeNavButton = document.querySelector('#nav_content_section .close_button');
const navLinks = document.querySelectorAll('#nav_content_section nav ul li a');



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