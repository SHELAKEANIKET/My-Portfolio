function reload(){
  window.location.href='#selfInfo';
}

function toggleOverflow() {
  const checkbox = document.getElementById('check');
  const body = document.body;

  if (checkbox.checked) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'scroll';
  }
}


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('check');
    checkbox.checked = false;
     document.body.style.overflow = 'scroll';
  });
});

//typewriter effect code
const words = ["Aniket", "Developer", "Engineer"];
let index = 0;
let wordIndex = 0;
let text = "";

function typewriterEffect() {
  if (index < words.length) {
    const word = words[index];

    if (wordIndex <= word.length) {
      text = word.substring(0, wordIndex);
      wordIndex++;
    } else {
      wordIndex = 0;
      index++;
      if (index >= words.length) {
        index = 0; 
      }
    }

    updateText(); 

    const delay = (wordIndex > 0) ? 100 : 2000; 
    setTimeout(typewriterEffect, delay);
  }
}

function updateText() {
  const output = text + "<span class='cursor'>|</span>";
  document.getElementById("text").innerHTML = output;
}

typewriterEffect();
