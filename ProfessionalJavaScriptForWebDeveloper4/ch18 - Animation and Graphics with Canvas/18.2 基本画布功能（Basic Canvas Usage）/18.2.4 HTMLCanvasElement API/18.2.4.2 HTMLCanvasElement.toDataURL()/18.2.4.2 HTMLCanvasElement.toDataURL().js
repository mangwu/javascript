const canvas1 = document.querySelector("canvas#canvas1");

var fullQuality = canvas1.toDataURL("image/jpeg", 1.0);
var mediumQuality = canvas1.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas1.toDataURL("image/jpeg", 0.1);
console.log(fullQuality, fullQuality.length);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSU...AA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AP/B//9k= 1035
console.log(mediumQuality, mediumQuality.length);
console.log(lowQuality, lowQuality.length);
const res = atob(lowQuality.slice(23, lowQuality.length));
console.log(res[0], res[1], res[2], res[3], res[4], res[5]);

