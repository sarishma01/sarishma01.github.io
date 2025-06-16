// Typing effect
function typeEffect(element, text, speed) {
    let i = 0;
    element.innerHTML = "";
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    typeEffect(
      document.getElementById("typing-text"),
      "Welcome to my personal website!",
      80
    );
  });
  
  // Email button
  function sendEmail() {
    window.location.href =
      "mailto:sarismamagar452@gmail.com?subject=Contact from Portfolio&body=Hello Sarishma!";
  }
  
  // Toggle background color + font color
  function toggleBackground() {
    document.body.classList.toggle("dark-mode");
  }
  