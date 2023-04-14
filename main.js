const logos = [];
for (let i = 0; i < 5; i++) {
  let logo = document.createElement('div');
  logo.classList.add('dvd-logo');
  document.body.appendChild(logo);
  logos.push(logo);

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
      dx = -dx;
    }
    if (y < 0 || y > maxY) {
      dy = -dy;
    }
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';
    requestAnimationFrame(animate);
  }

  animate();
}
