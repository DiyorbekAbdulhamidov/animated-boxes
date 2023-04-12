const dvd = document.querySelector('.dvdBox');
let topC = 0;
let bottomC = 0;

setInterval(() => {
    topC +=5
    bottomC +=5;

    dvd.style.top = `${topC}px`;
    dvd.style.left = `${bottomC}px`;

}, 40);
