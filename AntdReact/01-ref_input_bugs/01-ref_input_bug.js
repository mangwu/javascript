/*
 * @Author: mangwu                                                             *
 * @File: 01-ref_input_bug.js                                                  *
 * @Date: 2022-08-01 10:58:06                                                  *
 * @LastModifiedDate: 2022-08-01 13:43:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { useRef, useEffect } = React;
const { Button, Input } = antd;

function App() {
  const textRef = useRef();
  const reset = () => {
    console.log(textRef.current);
    textRef.current.input.value = "";
  };
  return (
    <div>
      <Input ref={textRef} type="text" style={{ width: "100px" }} />
      <Button type="primary" onClick={reset}>
        重置
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
