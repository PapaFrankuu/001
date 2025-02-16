// Function to change background color
function changeBackgroundColor() {
    const colors = ["#f4f4f4", "#d1c4e9", "#ffccbc", "#c8e6c9", "#bbdefb"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to show an alert
function greetUser() {
    alert("Welcome, Stranger have fun with that Button");
}

// Wait for the page to load, then greet the user
window.onload = function () {
    greetUser();
};
