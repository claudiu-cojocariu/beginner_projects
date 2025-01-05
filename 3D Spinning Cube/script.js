document.querySelector('.cube').addEventListener('mouseover', () => {
  document.querySelector('.cube').style.animation = 'spin 2s infinite linear';
});

document.querySelector('.cube').addEventListener('mouseout', () => {
  document.querySelector('.cube').style.animation = 'spin 5s infinite linear';
});