document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.tile img');

  function setOrientation(img) {
    const tile = img.closest('.tile');
    if (!tile) return;
    tile.classList.remove('tall', 'wide');
    if (img.naturalHeight > img.naturalWidth) tile.classList.add('tall');
    else tile.classList.add('wide');
  }

  imgs.forEach((img) => {
    if (img.complete) setOrientation(img);
    else img.addEventListener('load', () => setOrientation(img));
  });
});
