const portal = document.querySelector('.portal');
const details = document.querySelector('.details');

portal.addEventListener('animationend', () => {
  portal.style.opacity = '0'; // fade out the portal image
  setTimeout(() => { // wait for the fade-out animation to finish
    portal.classList.add('zoom-out');
    details.classList.remove('hidden');
  }, 1000);
});
