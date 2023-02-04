import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaPen, FaTrash } from "react-icons/fa";
import "./TodoInsert.css";

const TodoInsert = ({
  onInsert,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value); // 입력한 value를 집어넣고
    setValue(""); // 다시 input을 비워놓는다.
    onInsert();
  };

  useEffect(() => {
    if (selectedTodo) setValue(selectedTodo.text);
  }, [selectedTodo]);

  return (
    <div>
      <div className="bg" onClick={onInsert}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="type To-do list"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <FaPen
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <FaTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit" onClick={onSubmit}>
            <FaPlusCircle></FaPlusCircle>
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
