import React, { Component } from "react";
export default class Item extends Component {
  // 設定初始狀態
  state = {
    mouse: false,
  };

  // set handleMouse
  handleMouse = (flag) => {
    // console.log(flag); 假如這樣的話會直接調用
    return () => {
      // 因為有需要才在調用此函式，所以要在return內在寫回調函式
      // console.log(flag);
      this.setState({ mouse: flag });
    };
  };

  // 檢查是否完成，取得check box 的boolean
  // 子傳爺 => Item => List => App
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 刪除一個todo的回調
  handleDelete = (id) => {
    // console.log(id); // 取得需刪除的編號
    // confirm 返回真、假，假如為真則執行，反之不執行
    if (window.confirm("確定刪除嗎？")) {
      this.props.deleteTodo(id);
    }
  };
  // 初始、更新
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ background: mouse ? "#ddd" : "White" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => {
            this.handleDelete(id);
          }}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
