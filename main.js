let random = Math.floor(Math.random() * 5) + 1;


function randomHex() {
  return '#' + Math.random().toString(16).substring(2, 8)
}

for (let i = 0; i < random; i++) {
  let logo = document.createElement('div');
  logo.className = 'dvd-logo';
  let frag = document.createDocumentfragagment();
  frag.appendChild(logo);
  document.body.appendChild(frag);

  let maxX = window.innerWidth - logo.offsetWidth;
  let maxY = window.innerHeight - logo.offsetHeight;

  let x = Math.floor(Math.random() * maxX);
  let y = Math.floor(Math.random() * maxY);

  let dx = 5;
  let dy = 5;

  function animate() {
    maxX = window.innerWidth - logo.offsetWidth;
    maxY = window.innerHeight - logo.offsetHeight;
    x += dx;
    y += dy;
    if (x < 0 || x > maxX) {
      logo.style.background = randomHex();
      logo.textContent = +logo.textContent + 1;
      dx = -dx;
    }
    if (y < 0 || y > maxY) {
      logo.textContent = +logo.textContent + 1;
      logo.style.background = randomHex()
      dy = -dy;
    }
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';
    requestAnimationfragame(animate);
  }

  animate();
}
