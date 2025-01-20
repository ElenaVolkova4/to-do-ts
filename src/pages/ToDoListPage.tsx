import { Bounce, ToastContainer, toast } from "react-toastify";

import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/ToDoList";
import { IToDo } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../features/todoList";

const ToDoListPage = () => {
  // все todos из стора
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  // методы по управлению todos из стора
  const dispatch = useDispatch();

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));

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
    dispatch(updateAction(toDoItem));

    // уведомление пользователя
    toast.info("Задача изменена", {
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
    dispatch(deleteAction(toDoItem));

    // уведомление пользователя
    toast.warn("Задача удалена", {
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

      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />

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
