import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/ToDoList";
import { IToDo } from "../models/todo-item";

const ToDoListPage = () => {
  const [todos, setTodos] = useState<IToDo[]>([
    {
      id: 0,
      text: "Первая задача",
      isDone: false,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: true,
    },
  ]);

  const createNewToDo = (text: string) => {
    const newToDo: IToDo = {
      id: todos.length + 1,
      text: text,
      isDone: false,
    };
    // return todos.push(newToDo);
    setTodos([...todos, newToDo]);

    // уведомление пользователя
    toast.success("Задача создана", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const updateToDo = (toDoItem: IToDo) => {
    const newToDos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(newToDos);

    // уведомление пользователя
    toast.success("Задача изменена", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const deleteToDo = (toDoItem: IToDo) => {
    const newToDos = todos.filter((todo) => todo.id !== toDoItem.id);

    setTodos(newToDos);

    // уведомление пользователя
    toast.success("Задача удалена", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />

      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default ToDoListPage;
