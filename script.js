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
  
  // Send email function
  function sendEmail() {
    window.location.href =
      "mailto:sarismamagar452@gmail.com?subject=Contact from Portfolio&body=Hello Sarishma!";
  }
  
  // Toggle dark/light mode
  let isDark = false;
  
  function toggleBackground() {
    const body = document.body;
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const buttons = document.querySelectorAll("button");
  
    if (!isDark) {
      body.style.backgroundColor = "#121212";
      body.style.color = "#f0f0f0";
      header.style.backgroundColor = "#1f1f1f";
      nav.style.backgroundColor = "#2c2c2c";
      footer.style.backgroundColor = "#1f1f1f";
  
      sections.forEach((sec) => {
        sec.style.backgroundColor = "#1e1e1e";
        sec.style.color = "#f0f0f0";
      });
  
      buttons.forEach((btn) => {
        btn.style.backgroundColor = "#333";
        btn.style.color = "#f0f0f0";
        btn.style.border = "1px solid #666";
      });
    } else {
      body.style.backgroundColor = "#f5f5f5";
      body.style.color = "#000";
      header.style.backgroundColor = "#333";
      nav.style.backgroundColor = "#444";
      footer.style.backgroundColor = "#333";
  
      sections.forEach((sec) => {
        sec.style.backgroundColor = "#fff";
        sec.style.color = "#000";
      });
  
      buttons.forEach((btn) => {
        btn.style.backgroundColor = "#e0e0e0";
        btn.style.color = "#000";
        btn.style.border = "1px solid #ccc";
      });
    }
  
    isDark = !isDark;
  }
  