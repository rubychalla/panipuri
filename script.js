const lines = [
    "Hey.",
    "Don’t rush.",
    "Some things are meant to be opened slowly.",
    "Go on."
];

let line = 0, char = 0;
const text = document.getElementById("typingText");
const btn = document.getElementById("enterBtn");

function type() {
    if (char < lines[line].length) {
        text.textContent += lines[line][char++];
        setTimeout(type, 70);
    } else {
        setTimeout(() => {
            text.textContent = "";
            char = 0;
            line = (line + 1) % lines.length;
            btn.style.transform = `scale(${1 + line * 0.12})`;
            type();
        }, 1000);
    }
}
type();

function goNext() {
    window.location.href = "surprise.html";
}
