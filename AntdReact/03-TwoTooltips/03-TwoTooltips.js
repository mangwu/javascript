const { useState, useRef, useEffect } = React;

const { Tooltip } = antd;

function App() {
  const ref = useRef(null);
  const [hasHello, setHasHello] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    console.log(ref.current);
    console.log(hasHello);
    if (ref.current) {
      setHasHello(true);
    }
  }, [ref && ref.current]);
  const handleMouseEenter = () => {
    setVisible1(true);
    setVisible2(true);
  };
  const handleMouseLeave = () => {
    setVisible1(false);
    setVisible2(false);
  };
  return (
    <React.Fragment>
      <div
        className="hello"
        style={{ position: "relative" }}
        ref={ref}
        onMouseEnter={handleMouseEenter}
        onMouseLeave={handleMouseLeave}
      >
        你好
      </div>
      {hasHello ? (
        <React.Fragment>
          <Tooltip
            getPopupContainer={() => ref.current}
            title="Hello, world1"
            placement="top"
            visible={visible1}
          />
          <Tooltip
            getPopupContainer={() => ref.current}
            title="Hello, world2"
            placement="bottom"
            visible={visible2}
          />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
