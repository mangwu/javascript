const div = document.querySelector("div");

const observer = new MutationObserver((mutationRecords) =>
  console.log(mutationRecords)
);

observer.observe(div, { attributes: true });

div.className = "foo";
setTimeout(() => {
  observer.disconnect();
  div.className = "bar";
});
