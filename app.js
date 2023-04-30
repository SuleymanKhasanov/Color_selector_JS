let cols = document.querySelectorAll(".colum");

function setRandomColors() {
  cols.forEach((col) => {
    let text = col.querySelector("h2");
    let button = col.querySelector(".lock");
    let color = chroma.random();
    col.style.background = color;
    text.textContent = color;
    setTextColor(text, color);
    setTextColor(button, color);
  });
}

function setTextColor(text, color) {
  let luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

setRandomColors();

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    setRandomColors();
  }
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;
  if (type === "lock") {
    const node = event.target.tagName === "I" ? event.target : event.target.chldren[0];

    node.classList.toggle("fa-lock");
    node.classList.toggle("fa-lock-open");
  }
});
