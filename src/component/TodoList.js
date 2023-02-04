import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onCheckToggle, onInsert, onChangeSelectedTodo }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsert={onInsert}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
}; // App에 작성된 TodoList 컴포넌트의 todos props를 받는다.
// todos props는 state인 todos를 받고 map을 통해 이를 재배열
// 객체 1 , 객체 2, 객체 3

export default TodoList;
