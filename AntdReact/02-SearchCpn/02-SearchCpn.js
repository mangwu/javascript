/*
 * @Author: mangwu                                                             *
 * @File: 02-SearchCpn.js                                                      *
 * @Date: 2023-03-15 14:24:30                                                  *
 * @LastModifiedDate: 2023-03-15 17:41:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function X() {
  return (
    <span
      className="ant-select-selection-item-remove"
      unselectable="on"
      aria-hidden="true"
    >
      <span role="img" aria-label="close" className="anticon anticon-close">
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="close"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
        </svg>
      </span>
    </span>
  );
}

const { useRef, useEffect, useState } = React;
const { Button, Input, Select, Popover } = antd;
const { Option } = Select;
const equalOptions = [
  {
    label: "=",
    value: "=",
  },
  { label: "!=", value: "!=" },
];
function App() {
  const textRef = useRef();

  const keysOptions = [
    { label: "author", value: "author" },
    { label: "label", value: "label" },
    { label: "branch", value: "branch" },
  ];
  const data = {
    author: [
      { label: "mangwu", value: "mangwu" },
      { label: "xu", value: "xu" },
      { label: "lee", value: "lee" },
      { label: "yong", value: "yong" },
    ],
    label: [
      { label: "bug", value: "bug" },
      { label: "feature", value: "feature" },
      { label: "hotfix", value: "hotfix" },
    ],
    branch: [
      { label: "featute-xgly", value: "featute-xgly" },
      { label: "develop", value: "develop" },
      { label: "primary", value: "primary" },
    ],
  };
  const [valueOptions, setValueOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const [mode, setMode] = useState(0);
  const handleInputSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.code === "Enter") {
      console.log(value);
      console.log(
        value.join(" ") + (searchValue ? "search=" + searchValue : "")
      );
    }
  };
  const handleInputChange = (value) => {
    console.log(value);
    setMode(value.length);
    setOptions(equalOptions);
    setValue(value);
  };
  const handleItemClick = (input) => {
    setMode((value.length + 1) % 3);
    setValue((state) => [...state, input]);
    if (value.length % 3 === 0) {
      setValueOptions(data[input]);
    }
    // setOptions(equalOptions);
    // setMode()
    setSearchValue("");
  };
  // useEffect(() => {
  //   const newOptions = options.filter((v) => )
  // },[searchValue])
  useEffect(() => {
    switch (mode) {
      case 0:
        setOptions(keysOptions);
        break;
      case 1:
        setOptions(equalOptions);
        break;
      case 2:
        setOptions(valueOptions);
      default:
        break;
    }
  }, [mode]);
  useEffect(() => {
    console.log(options);
  }, [options]);
  const handleXClick = (index) => {
    value.splice(index - 2, 3);
    const newValue = value.slice();
    console.log(newValue, index);
    setValue(newValue);
  };
  const content = () => {
    const filterArr = options.filter((v, i) => {
      if (!searchValue) {
        return true;
      }
      const index1 = v.value.indexOf(searchValue);
      const index2 = v.label.indexOf(searchValue);
      return index1 !== -1 || index2 !== -1;
    });
    return filterArr.length ? (
      <div className="option-item" key={mode}>
        {filterArr.map((v) => (
          <div key={v.value} onClick={() => handleItemClick(v.value)}>
            {v.label}
          </div>
        ))}
      </div>
    ) : (
      <div className="no-data">no-data</div>
    );
  };
  return (
    <div className="my-select">
      <Popover
        arrow={false}
        overlayClassName="options"
        trigger={"focus"}
        key={mode}
        content={content}
        placement="bottomLeft"
      >
        <div
          className="ant-select ant-select-lg ant-select-multiple ant-select-show-search"
          style={{ width: "180px" }}
        >
          <div className="ant-select-selector">
            <div className="ant-select-selection-overflow">
              {value.map((v, i) => {
                return (
                  <div
                    className="ant-select-selection-overflow-item"
                    key={v + i}
                  >
                    <span className="ant-select-selection-item" title="label">
                      <span className="ant-select-selection-item-content">
                        {v}
                      </span>
                      {i % 3 === 2 ? (
                        <span onClick={() => handleXClick(i)}>
                          <X />
                        </span>
                      ) : null}
                    </span>
                  </div>
                );
              })}

              <div className="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix">
                <div className="ant-select-selection-search">
                  <input
                    autoComplete="off"
                    type="search"
                    className="ant-select-selection-search-input"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-owns="rc_select_0_list"
                    aria-autocomplete="list"
                    aria-controls="rc_select_0_list"
                    aria-activedescendant="rc_select_0_list_-1"
                    value={searchValue}
                    id="rc_select_0"
                    aria-expanded="false"
                    readOnly=""
                    unselectable="on"
                    onChange={handleInputSearchChange}
                    onKeyPress={handleInputKeyDown}
                  />
                  <span
                    className="ant-select-selection-search-mirror"
                    aria-hidden="true"
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
