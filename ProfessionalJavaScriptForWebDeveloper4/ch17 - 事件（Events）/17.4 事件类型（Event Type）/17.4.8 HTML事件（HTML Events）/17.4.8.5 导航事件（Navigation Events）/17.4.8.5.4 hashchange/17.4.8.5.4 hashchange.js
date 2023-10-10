const btn = document.querySelector("#btn");
const a = "a".charCodeAt();
const span = document.querySelector("span");
btn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 12 + 1);
  let hash = "";
  while (randomNum) {
    randomNum--;
    const randomChar = String.fromCharCode(a + Math.floor(Math.random() * 26));
    hash += randomChar;
  }
  location.hash = hash;
});

window.addEventListener("hashchange", (e) => {
  span.textContent = location.hash;
  alert(location.hash);
  console.log("hashchange");
});
