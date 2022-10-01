import React, { Component } from "react";
import { nanoid } from "nanoid";
import { PropTypes } from "prop-types";
export default class Header extends Component {
  // 針對接收的props進行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  // handleKeyUp 函式
  handleKeyUp = (event) => {
    // 結構賦值獲取keyCode、target
    const { keyCode, target } = event;
    // 假如 鍵盤編號不等於13就回傳空 => 結束這個函式
    if (keyCode !== 13) return;
    // 假如 輸入的字串為空 => 發出提示並結束這個函式
    if (target.value.trim() === "") {
      alert("輸入不可為空");
      return;
    }
    // 將資料回傳給App 是以todo 對象的方式回傳， nanoid()是可以生成隨機唯一的字串
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    // console.log(event.keyCode);
    // event.keyCode 可以得知鍵盤按鍵上的編號，迴車(Enter)為32
    // 最後將輸入框清空
    target.value = " ";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="請輸入代辦事項，按Enter確認"
        />
      </div>
    );
  }
}
