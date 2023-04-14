let random = Math.floor(Math.random() * 5) + 1;

function randomHex() {
  return '#' + Math.random().toString(16).substring(2, 8)
}

for (let i = 0; i < random; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  let fr = document.createDocumentFragment();
  fr.appendChild(box);
  document.body.appendChild(fr);

  let maxX = window.innerWidth - box.offsetWidth;
  let maxY = window.innerHeight - box.offsetHeight;

  let x = Math.floor(Math.random() * maxX);
  let y = Math.floor(Math.random() * maxY);

  let dx = 5;
  let dy = 5;

  function animate() {
    maxX = window.innerWidth - box.offsetWidth;
    maxY = window.innerHeight - box.offsetHeight;
    x += dx;
    y += dy;

    if (x < 0 || x > maxX) {
      box.style.background = randomHex();
      box.textContent = +box.textContent + 1;
      dx = -dx;
    }

    if (y < 0 || y > maxY) {
      box.textContent = +box.textContent + 1;
      box.style.background = randomHex()
      dy = -dy;
    }
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    requestAnimationFrame(animate);
  }

  animate();
}
