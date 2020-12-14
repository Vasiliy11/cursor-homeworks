const blockWrapper = document.querySelector('.block-wrapper');
const btn = document.querySelector('.create-blocks');
const intBtn = document.querySelector('.create-interval-blocks');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateBlocks() {
  blockWrapper.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('span');
    block.style.width = `50px`;
    block.style.height = `50px`;
    block.style.background = getRandomColor();
    blockWrapper.append(block);
  }
}

function generateBlocksInterval() {
  setInterval(generateBlocks, 1000);
}

btn.addEventListener('click', generateBlocks);
intBtn.addEventListener('click', generateBlocksInterval);
