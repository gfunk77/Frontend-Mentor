import '@fortawesome/fontawesome-free/css/all.css';

const cardFooter = document.querySelector('.card-footer');
const info = document.querySelector('.info');
const icons = document.querySelector('.icons');
const shareIcon = document.querySelectorAll('.share-icon');
const tooltip = document.querySelector('.tooltip');

function toggleClasses() {
  cardFooter.classList.toggle('active');
  info.classList.toggle('hidden');
  icons.classList.toggle('hidden');
}
let timeoutId;
function handleTooltip(event) {
  if (event.type === 'mouseover') {
    clearTimeout(timeoutId);
    tooltip.style.display = 'flex';
  } else if (event.type === 'mouseout') {
    timeoutId = setTimeout(() => {
      tooltip.style.display = 'none';
    }, 2000);
  }
}

function checkScreenSize() {
  shareIcon.forEach((icon) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      icon.removeEventListener('click', toggleClasses);
      icon.addEventListener('mouseover', handleTooltip);
      icon.addEventListener('mouseout', handleTooltip);
    } else {
      icon.addEventListener('click', toggleClasses);
      shareIcon[0].classList.remove('tooltip');
      icon.removeEventListener('mouseover', handleTooltip);
      icon.removeEventListener('mouseout', handleTooltip);
    }
  });
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);
