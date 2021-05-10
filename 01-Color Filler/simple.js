const colors = ["red", "green", "blue", "yellow", "brown"];

const btn = document.getElementById("btn");
const color_name = document.querySelector(".color-name");

btn.addEventListener("click", function() {
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color_name.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return (Math.floor(Math.random() * colors.length));
}