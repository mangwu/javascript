if (DeviceMotionEvent) {
  window.addEventListener("devicemotion", (e) => {
    console.log(e.accelerationIncludingGravity);
  });
}
