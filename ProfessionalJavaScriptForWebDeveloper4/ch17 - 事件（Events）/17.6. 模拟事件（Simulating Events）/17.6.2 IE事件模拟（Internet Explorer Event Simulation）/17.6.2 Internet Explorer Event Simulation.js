var btn = document.getElementById("btn");
var event = document.createEventObject(); // ①
event.detail = "dog"; // ②
btn.fireEvent("onanimalfound", event); // ③
document.body.onanimalfound = function (evt) {
  // ④
  console.log(evt.detail);
};
