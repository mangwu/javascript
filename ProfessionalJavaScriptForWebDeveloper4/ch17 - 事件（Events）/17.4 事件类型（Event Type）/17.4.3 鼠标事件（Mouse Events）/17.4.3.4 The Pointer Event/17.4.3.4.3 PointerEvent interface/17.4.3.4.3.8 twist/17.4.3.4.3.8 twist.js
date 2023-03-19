/*
 * @Author: mangwu                                                             *
 * @File: 17.43.4.3.5 tangential pressure.js                                   *
 * @Date: 2023-03-19 19:30:12                                                  *
 * @LastModifiedDate: 2023-03-20 01:13:48                                      *
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
    dataIndex: "twist",
    key: "twist",
    title: "twist",
  },
];

function App() {
  const [data, setData] = useState([]);
  const handlePointerClick = (e) => {
    const { type, currentTarget, pointerId, twist, buttons } = e;
    setData((state) => [
      ...state,
      {
        type,
        target: e.target.classList[0],
        currentTarget: currentTarget.classList[0],
        pointerId,
        twist,
        buttons,
        date: new Date().getTime(),
      },
    ]);
  };
  return (
    <div className={"container"}>
      <Button
        className="click"
        type="primary"
        onPointerDown={handlePointerClick}
        onPointerUp={handlePointerClick}
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
