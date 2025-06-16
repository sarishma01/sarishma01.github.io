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

function sendEmail() {
    window.location.href = "mailto:sarismamagar452@gmail.com?subject=Contact from Portfolio&body=Hello Sarishma!";
}

let isDark = false;
function toggleBackground() {
    document.body.style.backgroundColor = isDark ? "#f5f5f5" : "#222";
    document.body.style.color = isDark ? "#000" : "#f5f5f5";
    isDark = !isDark;
}
