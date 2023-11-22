const btn = document.querySelector('#myBtn').addEventListener('click', openModal);
const modal = document.querySelector('#myModal');
const cross = modal.querySelector('.close');

function openModal() {
	modal.style.display = 'block';

	attachEvents()
}

function attachEvents() {
	cross.addEventListener('click', handleCross);
	document.addEventListener('keydown', handleEscape);
	modal.addEventListener('click', handleOutClick);
}

function handleCross() {
	modal.style.display = 'none';

	detachEvents()
}

function handleEscape(event) {
	if (event.key === 'Escape') {
		modal.style.display = 'none';

		detachEvents()
	}
}

function handleOutClick(event) {
	if (event.target === modal) {
		modal.style.display = 'none';

		detachEvents()
	}
}

function detachEvents() {
	cross.removeEventListener('click', handleCross);
	document.removeEventListener('keydown', handleEscape);
	modal.addEventListener('click', handleOutClick);
}