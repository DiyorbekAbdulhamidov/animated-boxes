let random = Math.floor(Math.random() * 5) + 1;


function randomHex() {
  return '#' + Math.random().toString(16).substring(2, 8)
}

for (let i = 0; i < random; i++) {
  let logo = document.createElement('div');
  logo.classList.add('dvd-logo');
  let fr = document.createDocumentFragment();
  fr.appendChild(logo);
  document.body.appendChild(fr);

  let maxX = window.innerWidth - logo.offsetWidth;
  let maxY = window.innerHeight - logo.offsetHeight;

  let x = Math.floor(Math.random() * maxX);
  let y = Math.floor(Math.random() * maxY);

  let dx = 7;
  let dy = 7;

  function animate() {
    maxX = window.innerWidth - logo.offsetWidth;
    maxY = window.innerHeight - logo.offsetHeight;
    x += dx;
    y += dy;
    if (x < 0 || x > maxX) {
      logo.style.background = randomHex()
      dx = -dx;
    }
    if (y < 0 || y > maxY) {
      logo.style.background = randomHex()
      dy = -dy;
    }
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';
    requestAnimationFrame(animate);
  }

  animate();
}
