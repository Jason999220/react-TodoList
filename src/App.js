// 引入 React
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
// 渲染並暴露 class
export default class App extends Component {
  // 初始化狀態
  state = {
    todos: [
      { id: "001", name: "吃飯", done: true },
      { id: "002", name: "交女友", done: true },
      { id: "003", name: "學完React", done: false },
      { id: "004", name: "上班", done: false },
    ],
  };
  // 新增一個 addTodo的函示，接收Header的資料
  addTodo = (todoObj) => {
    // 獲取原todos
    const { todos } = this.state;
    // 追加新的 todo
    const newTodo = [todoObj, ...todos];
    // 更新todos狀態
    this.setState({ todos: newTodo });
  };
  // 由App遍歷檢查是否有相同id，並更新其done
  updateTodo = (id, done) => {
    // 先取得原先列表
    const { todos } = this.state;
    // 檢查是否有相同id，並處理
    const newTodos = todos.map((todoObj) => {
      // 假如有配上;
      if (todoObj.id === id) return { ...todoObj, done };
      // 假如沒匹配上
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  // 進行刪除一個todo，由App遍歷檢查是否有相同id
  deleteTodo = (id) => {
    // 取得原todoS
    const { todos } = this.state;
    // 刪除指定id的todo對象
    const newTodos = todos.filter((todoObj) => {
      // return 成立的事物，其餘過濾掉
      return todoObj.id !== id;
    });
    // 更新狀態
    this.setState({ todos: newTodos });
  };
  // 傳遞給Footer控制全選
  checkAllTodo = (done) => {
    // 取得原數據
    const { todos } = this.state;
    // 針對數據進行加工，只要點擊就把done均變為true
    const newtodos = todos.map((todoObj) => {
      // 但假如寫死為true，只要點擊變更為false時會在馬上變為true
      // return { ...todoObj, done: true };
      return { ...todoObj, done: done };
    });
    // 更新數據
    this.setState({ todos: newtodos });
  };
  // 清除已完成的List
  clearAllDone = () => {
    // 取得原數據
    const { todos } = this.state;
    // 清除done為true的
    const newtodos = todos.filter((todoObj) => {
      return todoObj.done !== true;
    });
    // 更新數據
    this.setState({ todos: newtodos });
  };
  // 初始、更新
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 子給父傳遞東西 => props的函式 */}
          <Header addTodo={this.addTodo} />
          {/* 父給子傳遞東西 => props */}
          {/* updateTodo 是要給item但要先經過List傳遞 */}
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
