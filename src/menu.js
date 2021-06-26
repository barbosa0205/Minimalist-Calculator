//Menu
const btnMenu = document.querySelector('#btn-menu');
const sidebar = document.querySelector('.sidebar');
const mainContainer = document.querySelector('.main-container')

let open = false;

const openMenu = () => {
	sidebar.className += ' sidebar-open';
	return (open = true);
};

const closeMenu = () => {
	sidebar.classList.remove('sidebar-open');
	return (open = false);
};

btnMenu.addEventListener('click', () => openMenu());
mainContainer.addEventListener('click', () => closeMenu())

