const contentBtn = document.querySelector('.content__accordion');

contentBtn.addEventListener('click', () => {
  contentBtn.classList.toggle('content__accordion--active');
});
