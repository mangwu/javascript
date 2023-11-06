function handleTouchEvent(event) {
  // 只针对一个触摸点
  if (event.touches.length === 1) {
    let output = document.querySelector("#output");
    const { clientX, clientY } = event.touches[0];
    console.log(event.cancelable, event.type);
    switch (event.type) {
      case "touchstart":
        output.innerHTML += `<br/>Touch start:(${clientX}, ${clientY})`;
        break;
      case "touchmove":
        event.preventDefault(); // 阻止滚动
        output.innerHTML += `<br/>Touch moved:(${clientX}, ${clientY})`;
        break;
      case "touchend":
        output.innerHTML += `<br/>Touch ended:(${clientX}, ${clientY})`;
        break;
      case "touchcancel":
        output.innerHTML += `<br/>Touch canceled:(${clientX}, ${clientY})`;
        break;
    }
  }
}

document.addEventListener("touchstart", handleTouchEvent);
document.addEventListener("touchmove", handleTouchEvent, { passive: false });
document.addEventListener("touchend", handleTouchEvent);
document.addEventListener("touchcancel", handleTouchEvent);
