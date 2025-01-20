import { useNavigate, useParams } from "react-router-dom";
import { IToDo } from "../models/todo-item";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ItemDescription = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const { id } = useParams(); // useParams достает динамически параметры
  const navigate = useNavigate();
  const [todo, setTodo] = useState<IToDo>();

  useEffect(() => {
    // const searchTodo = todos.find((todo) => todo.id === +id);
    const searchTodo = todoList.find((todo) => String(todo.id) === id);

    if (id) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todoList, id, navigate]);

  return <div className="container">{todo?.text}</div>;
};

export default ItemDescription;
