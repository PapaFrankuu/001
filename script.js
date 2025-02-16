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
<style>
  #progress-bar {
      width: 0;
      height: 5px;
      background: #ff3d00;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      transition: width 0.4s;
  }
</style>

<div id="progress-bar"></div>

<script>
  document.onreadystatechange = function () {
      let progress = document.getElementById("progress-bar");
      if (document.readyState === "interactive") {
          progress.style.width = "50%";
      } else if (document.readyState === "complete") {
          progress.style.width = "100%";
          setTimeout(() => {
              progress.style.display = "none";
          }, 500);
      }
  };
</script>
