const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
function setLog() {
  const value = localStorage.getItem("storage");
  if (value !== null) {
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
  }
}
setLog();
btn.addEventListener("click", (e) => {
  localStorage.setItem("storage", input.value);
});
window.addEventListener("storage", setLog);


