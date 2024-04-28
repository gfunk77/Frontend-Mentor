import '@fortawesome/fontawesome-free/css/all.css';

const cardFooter = document.querySelector('.card-footer');
const info = document.querySelector('.info');
const icons = document.querySelector('.icons');
const shareIcon = document.querySelectorAll('.share-icon');

function toggleClasses() {
  cardFooter.classList.toggle('active');
  info.classList.toggle('hidden');
  icons.classList.toggle('hidden');
}
shareIcon.forEach((icon) => {
  icon.addEventListener('click', toggleClasses);
});
