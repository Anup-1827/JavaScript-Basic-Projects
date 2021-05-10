colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color_name = document.querySelector('.color-name');

btn.addEventListener('click', function() {
    hex = "#";
    for (let i = 0; i < 6; i++) {
        randomNumber = getRandomNumber();
        hex = hex + colors[randomNumber];
    }
    document.body.style.backgroundColor = hex;
    color_name.textContent = hex;
});

function getRandomNumber() {
    return (Math.floor(Math.random() * colors.length));
}