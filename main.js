const dvd = document.querySelector('.dvdBox');
const count = document.querySelector('.count')
let topC = 0;
let bottomC = 0;

function randomHex(){
    return '#' + Math.random().toString(16).substring(2,8)
}

setInterval(() => {
    topC ++;
    bottomC ++;

    dvd.style.top = `${topC}px`;
    dvd.style.left = `${bottomC}px`;

    if(dvd.style.top == '700px'){
        topC = 200;
        bottomC = 700;
        dvd.style.background = `${randomHex()}`
        count.textContent = +count.textContent + 1;
    }

}, 0.2);

