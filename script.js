const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let count = 0;
let tracker = 0;
function moveCardsLeft() {
    count = count - 402;
    tracker++;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 7) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
function moveCardsRight() {
    count = count + 402;
    tracker --;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 7) {
        next.removeAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
prev.addEventListener('click', () => {
    moveCardsRight();
});

next.addEventListener('click', () => {
    moveCardsLeft();
});
const mediaQuery = window.matchMedia('(max-width: 1000px)')
if (mediaQuery.matches){
    const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let count = 0;
let tracker = 0;
function moveCardsLeft() {
    count = count - 229;
    tracker++;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 9) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
function moveCardsRight() {
    count = count + 229;
    tracker --;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 9) {
        next.removeAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
prev.addEventListener('click', () => {
    moveCardsRight();
});

next.addEventListener('click', () => {
    moveCardsLeft();
});
}
