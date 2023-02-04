import React, { useState } from "react";
import "./App.css";
import Template from "./component/Template";
import TodoList from "./component/TodoList";
import TodoItem from "./component/TodoItem";
import TodoInsert from "./component/TodoInsert";
import { FaPlusSquare } from "react-icons/fa";

let nextId = 4;
// 함수 안에 있으면 함수가 게속 리렌더링 될 때마다 4로 돌아가기 때문에
// 함수 밖에 선언
const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onInsert = () => {
    if (selectedTodo) setSelectedTodo(null);
    setInsertToggle((prev) => !prev); //이전 값의 블리언 값을 바꿔줌
  };

  const onInsertTodo = (text) => {
    if (text === "") return alert("할 일을 입력해주세요.");
    else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };

      setTodos((todos) => todos.concat(todo)); // push를 안하는 이유는 React는 변경되기 전 값을 기억해야하기 때문에 변경되기 전의 상태를 건들면 안된다.
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsert();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    console.log(id);
  };

  const onUpdate = (id, text) => {
    onInsert();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsert={onInsert}
        onChangeSelectedTodo={onChangeSelectedTodo}
      ></TodoList>
      <div className="add-todo-button" onClick={onInsert}>
        <FaPlusSquare />
      </div>
      {insertToggle && (
        <TodoInsert
          onInsert={onInsert}
          onInsertTodo={onInsertTodo}
          selectedTodo={selectedTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
      {/* TodoInsert에 bg가 생겼을 때 bg를 누르면 사라지게 하기위해 onInsert 함수 추가 */}
    </Template>
  );
};

export default App;
