const keys = document.querySelectorAll('.key');

function playSound(e) {
  const attr = e.code ? e.code : this.getAttribute('data-key');
  document.querySelector(`[data-key="${attr}"]`).classList.add('play');
  document.querySelector(`audio[data-key="${attr}"]`).currentTime = 0;
  document.querySelector(`audio[data-key="${attr}"]`).play();
}

function stopPlay(e) {
  const attr = e.code ? e.code : this.getAttribute('data-key');
  document.querySelector(`[data-key="${attr}"]`).classList.remove('play');
}

keys.forEach((key) => {
  key.addEventListener('click', playSound);
  key.addEventListener('mouseout', stopPlay);
});
document.addEventListener('keydown', playSound);
document.addEventListener('keyup', stopPlay);
