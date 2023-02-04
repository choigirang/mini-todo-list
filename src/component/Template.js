import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  // App 컴포넌트에 들어가 있는 컴포넌트를 children이라는 props로 받아올 수 있다.
  return (
    <div className="Template">
      <div className="title">오늘의 할 일 {`(${todoLength})`}</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
