import { useNavigate, useParams } from "react-router-dom";
import { IToDo } from "../models/todo-item";
import { useEffect, useState } from "react";

interface ComponentProps {
  todos: IToDo[];
}

const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams(); // useParams достает динамически параметры
  const navigate = useNavigate();
  const [todo, setTodo] = useState<IToDo>();

  useEffect(() => {
    // const searchTodo = todos.find((todo) => todo.id === +id);
    const searchTodo = todos.find((todo) => String(todo.id) === id);

    if (id) {
      console.log(searchTodo);
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todos, id, navigate]);

  return <div className="container">{todo?.text}</div>;
};

export default ItemDescription;
