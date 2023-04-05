const scrollBtn = document.querySelector('.scroll-btn');
const divToScroll = document.querySelector('#12');

scrollBtn.addEventListener('click', () => {
  divToScroll.scrollIntoView({
    behavior: 'smooth'
  });
});