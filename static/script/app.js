const content = ["Hello There!", "Ahoj!", "Halo!", "Hej med dig!", "Hei siellä!", "Ciao!", "Bonjour!", "Hola!", "Привіт!"];
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".row .cursor");
let charIndex = 0;
let typeContentIndex = 0;

const type = () => {
  if (charIndex < content[typeContentIndex].length) {
    cursor.classList.add("typing");
    typedText.textContent += content[typeContentIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, 2000);
  }
};

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.add("typing");
    typedText.textContent = content[typeContentIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 75);
  } else {
    cursor.classList.remove("typing");
    typeContentIndex++;
    if (typeContentIndex >= content.length) {
      typeContentIndex = 0;
    }
    setTimeout(type, 500);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 2000);
});
