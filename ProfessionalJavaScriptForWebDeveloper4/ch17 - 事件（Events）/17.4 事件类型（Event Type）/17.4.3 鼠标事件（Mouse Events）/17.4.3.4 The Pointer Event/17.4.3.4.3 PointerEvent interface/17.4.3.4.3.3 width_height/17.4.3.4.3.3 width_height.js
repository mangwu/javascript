/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.3.3 width_heigth.js                                         *
 * @Date: 2023-03-17 14:56:09                                                  *
 * @LastModifiedDate: 2023-03-17 16:22:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { useRef, useEffect, useState } = React;
const { Table, Button } = antd;

const columns = [
  {
    dataIndex: "type",
    key: "type",
    title: "类型",
    width: 45,
  },
  {
    dataIndex: "target",
    key: "target",
    title: "事件目标",
    width: 90,
  },
  {
    dataIndex: "currentTarget",
    key: "currentTarget",
    title: "当前事件目标",
    width: 135,
  },
  {
    dataIndex: "pointerId",
    key: "pointerId",
    title: "pointerId",
    width: 67,
  },
  {
    dataIndex: "width",
    key: "width",
    title: "width",
    width: 46,
  },
  {
    dataIndex: "height",
    key: "height",
    title: "height",
    width: 46,
  },
];

function App() {
  const [data, setData] = useState([]);
  const handlePointerDown = (e) => {
    const { type, currentTarget, pointerId, width, height } = e;
    setData((state) => [
      ...state,
      {
        type,
        target: e.target.classList[0],
        currentTarget: currentTarget.classList[0],
        pointerId,
        width: width.toFixed(2),
        height: height.toFixed(2),
        date: new Date().getTime(),
      },
    ]);
  };
  return (
    <div className={"container"}>
      <Button
        className="click"
        type="primary"
        onPointerDown={handlePointerDown}
        size={"large"}
      >
        click me
      </Button>
      <Table
        className={"my-ant-table"}
        dataSource={data}
        size={"large"}
        rowKey={"date"}
        columns={columns}
        scroll={{ x: "100%" }}
        pagination={{ pageSize: 5 }}
        width={500}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
