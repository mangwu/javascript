/*
 * @Author: mangwu                                                             *
 * @File: 17.1.2 main.js                                                       *
 * @Date: 2023-02-05 02:37:57                                                  *
 * @LastModifiedDate: 2023-02-05 02:47:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { useRef } = React;

function App() {
  const ref = useRef();
  const handler = (e, who) => {
    const li = document.createElement("li");
    li.textContent = `触发点击事件的目标对象：${who}`;
    ref.current.appendChild(li);
    if (who === "clickme") {
      ref.current.appendChild(document.createElement("hr"));
    }
  };

  return (
    <div id="content" onClickCapture={(e) => handler(e, "content")}>
      <div onClickCapture={(e) => handler(e, "clickme")} id="clickme">
        Click Me
      </div>
      <ul ref={ref}></ul>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
