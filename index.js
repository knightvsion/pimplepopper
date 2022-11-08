const whitehead = document.querySelectorAll(".whitehead");

function generatePimple(num) {
  const conatiner = document.querySelector(".container");
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.classList.add("pimple");
    img.classList.add("whitehead");
    img.src = "img/whitehead.png";
    pimpleClick(img);
    div.appendChild(img);
    randomPosition(div);
    conatiner.appendChild(div);
  }
}

function randomPosition(htmlElement) {
  let y = Math.floor(Math.random() * 100);
  let x = Math.floor(Math.random() * 100);
  htmlElement.style.transform = `translate(${x}%,${y}%)`;
}

function pimpleClick(element) {
  element.addEventListener("click", (e) => {
    e.target.src = "img/whitehead_popped.png";
  });
}

generatePimple(8);
