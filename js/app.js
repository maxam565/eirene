const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "resources/dogsassy.jpg",
  "resources/dogsus.jpg",
  "resources/dogsad.jpg",
  "resources/deadinside.jpg",
  "resources/mebruhpri.jpg",
  "resources/bruhmestraw.jpg"
];

// to load the images faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "resources/dogsus.jpg";
    text.innerHTML = "You meant to press YES right?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "resources/dogsad.jpg";
    text.innerHTML = "Your hand must have slipped right?🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "resources/deadinside.jpg";
    text.innerHTML = "I'm gonna cry😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "resources/deadinside.jpg";
    text.innerHTML = "Pretty Please🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  if (count <= 5) {
    // First YES click
    vid.style.display = "block";
    gif.src = "resources/mebruhpri.jpg";
    text.innerHTML = "Knew it babe 😘";
    yes.innerHTML = 'I love you ❤️';
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
    count = 6; // Set count to indicate we're at the "I love you" stage
    setTimeout(() => {
      vid.style.display = "none";
    }, 9000);
  } else if (count == 6) {
    // Second click on "I love you" button
    gif.src = "resources/bruhmestraw.jpg";
    text.innerHTML = "I love you too! 💕";
    // Redirect to love matcher page after 1.5 seconds
    setTimeout(() => {
      window.location.href = "love-matcher.html";
    }, 1500);
  }
});