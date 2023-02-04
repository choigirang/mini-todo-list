import React from "react";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle, onInsert, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BiCheckboxChecked
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <BiCheckbox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsert();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
// TodoList 컴포넌트에서 TodoItem 컴포넌트로
// todo props를 받았다.
// const {text} 는 구조분해할당으로 todo로 전달된
// App컴포넌트의 todos 객체 안의 text 키 값을 추출

export default TodoItem;
