window.addEventListener("pagehide", (e) => {
  alert("pagehide");
  console.log(e.persisted);
});


window.addEventListener("pageshow", (e) => {
  alert("pageshow");
  console.log(e.persisted);
});
