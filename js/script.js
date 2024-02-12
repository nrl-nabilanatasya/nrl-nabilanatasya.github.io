$(document).ready(function() {
    // call to function change color
    changeColor();

    // call to function text animation
    textAnimation();
});

// function change color
function changeColor() {
    var colorSchemes = [
        { '--main-color-one': '#6a7d73', '--main-color-two': '#bfa07a', '--main-color-three': '#465454' },
        { '--main-color-one': '#5d576b', '--main-color-two': '#d496a7', '--main-color-three': '#f1dede' },
        { '--main-color-one': '#708c8e', '--main-color-two': '#bfa07a', '--main-color-three': '#4d5656' },

        // { '--main-color-one': '#606c88', '--main-color-two': '#bfbfbf', '--main-color-three': '#2c3e50' },
        // { '--main-color-one': '#35424a', '--main-color-two': '#bf5861', '--main-color-three': '#f2e9e4' },
        // { '--main-color-one': '#2b3b4a', '--main-color-two': '#8a6f8e', '--main-color-three': '#e2d4cb' },
        // { '--main-color-one': '#324554', '--main-color-two': '#d15a79', '--main-color-three': '#f0e5e5' },
        // { '--main-color-one': '#265873', '--main-color-two': '#a76c7e', '--main-color-three': '#f2e5db' },
        // // Add more color schemes as needed
        
        // { '--main-color-one': '#2c3e50', '--main-color-two': '#3498db', '--main-color-three': '#273746' },
        // { '--main-color-one': '#d35400', '--main-color-two': '#e74c3c', '--main-color-three': '#34495e' },
        // { '--main-color-one': '#4caf50', '--main-color-two': '#2c3e50', '--main-color-three': '#455a64' },
        
    ];

    var currentColorSchemeIndex = 0;
    var root = document.documentElement;

    $("#color").on("click", function() {
        var currentColorScheme = colorSchemes[currentColorSchemeIndex];

        // Update the values of the CSS variables
        Object.keys(currentColorScheme).forEach(function(key) {
            root.style.setProperty(key, currentColorScheme[key]);
        });

        // Increment the index and reset to 0 if it reaches the end
        currentColorSchemeIndex = (currentColorSchemeIndex + 1) === colorSchemes.length ? 0 : currentColorSchemeIndex + 1;
    });
}

function textAnimation() {
    "use strict";

    let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);
}