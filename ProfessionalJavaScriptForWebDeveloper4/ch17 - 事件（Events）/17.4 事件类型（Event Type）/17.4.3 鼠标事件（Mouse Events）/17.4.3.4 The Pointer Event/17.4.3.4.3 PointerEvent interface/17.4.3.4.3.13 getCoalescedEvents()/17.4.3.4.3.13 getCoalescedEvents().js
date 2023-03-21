/*
 * @Author: mangwu                                                             *
 * @File: 17.43.4.3.5 tangential pressure.js                                   *
 * @Date: 2023-03-19 19:30:12                                                  *
 * @LastModifiedDate: 2023-03-21 11:13:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { useRef, useEffect, useState } = React;
const { Table, Button, List, Typography } = antd;

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
    dataIndex: "isPrimary",
    key: "isPrimary",
    title: "isPrimary",
    render: (text) => String(text),
  },
];

function App() {
  const [listData, setListData] = useState([]);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const handlePointerClickDown = (e) => {
    setIsPointerDown(true);
    setListData([
      {
        itemTitle: "起始位置",
        content: `x:${e.clientX}, y: ${e.clientY}`,
      },
    ]);
  };
  const handlePointerClickUp = (e) => {
    setIsPointerDown(false);
    if (e.nativeEvent.getCoalescedEvents) {
      const coalescedEvents = e.nativeEvent.getCoalescedEvents();
      const newListData = [];
      for (let i = 0; i < coalescedEvents.length; i++) {
        const coalescedEvent = coalescedEvents[i];
        newListData.push({
          itemTitle: e.type,
          content:
            "Event " +
            i +
            " time: " +
            coalescedEvent.timeStamp +
            ", position: (" +
            coalescedEvent.clientX +
            ", " +
            coalescedEvent.clientY +
            ")",
        });
      }
      if (coalescedEvents.length === 0) {
        newListData.push({
          itemTitle: "coalescedEvents",
          content: `调用getCoalescedEvents()获取的数组为空数组`,
        });
      }
      newListData.push({
        itemTitle: "结束位置",
        content: `x:${e.clientX}, y: ${e.clientY}`,
      });
      setListData((state) => [...state, ...newListData]);
    } else {
      console.log("a");
      setListData((state) =>
        state.concat([
          {
            itemTitle: "兼容性",
            content: "浏览器不支持getCoalescedEvents",
          },
        ])
      );
    }
  };
  return (
    <div className={"container"}>
      <Button
        className="click"
        type="primary"
        onPointerDown={handlePointerClickDown}
        onPointerUp={handlePointerClickUp}
        size={"large"}
      >
        click me
      </Button>
      {/* <Table
        className={"my-ant-table"}
        dataSource={data}
        size={"large"}
        rowKey={"date"}
        columns={columns}
        scroll={{ x: "100%" }}
        pagination={{ pageSize: 5 }}
        width={500}
      /> */}
      <List
        header={<div>从pointerdown到pointerup之间触发的事件合并列表</div>}
        footer={<div>指针按键处于激活状态：{String(isPointerDown)}</div>}
        bordered
        dataSource={listData}
        rowKey={(item) => item.content}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[{item.itemTitle}]</Typography.Text>{" "}
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
