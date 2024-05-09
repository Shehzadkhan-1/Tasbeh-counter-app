let count = 0;

function incrementCounter() {
    count++;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    document.querySelector('.counter').textContent = count;
}
