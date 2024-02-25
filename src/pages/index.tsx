import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList/TodoList";


interface Todo {
  task: string;
  id: string;
  compoleted: boolean;
}

export default function Home() {

  const [todos, setTodos] = useState(Todo[]);

  return (

    <Container>
      <h1 className={"text-center font-bold text-xl"}>Todo</h1>

      {/* <AddTask /> */}


      <input type="text" className={"border-2"} />
      <button className={"border-2"}>追加</button>
      <button className={"border-2"}>完了済タスクの削除</button>

      <TodoList todos={todos} />
    </Container>
  );
}
