import React, { Component } from "react";
export default class Footer extends Component {
  // 設定全選框，由父節點取得回調
  // 要確保勾或不勾，利用當前節點查詢
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    // 接收App 傳的props
    const { todos } = this.props;
    // 已完成的個數 => 假如done值為true就加一
    // arr 可以用reduce => reduce(回調, 初始值)
    const doneCount = todos.reduce((pre, todoCurrent) => {
      // return pre + 1;
      return pre + (todoCurrent.done ? 1 : 0);
    }, 0);
    // 事件的總數
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/* 如果寫 checked的話就必須搭配 onChange */}
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
