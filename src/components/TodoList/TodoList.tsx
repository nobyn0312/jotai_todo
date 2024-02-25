import React, { useState } from "react";

const TodoList = () => {

  //   const initialState = [
  //     {
  //         task: 'Learn vue.js',
  //         isCompleted: false
  //     },
  //     {
  //         task: 'Learn React Hook',
  //         isCompleted: false
  //     },
  //     {
  //         task: 'Learn Gatsby.js',
  //         isCompleted: false
  //     },
  // ]



  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </>
  )
};

export default TodoList;
