import { useSelector } from "react-redux";
import ListItem from "../components/ListItem/ListItem";
import { IToDo } from "../models/todo-item";
import { RootState } from "../store";

// interface ComponentProps {
//   todos: IToDo[];
// }

// const ViewList = ({ todos }: ComponentProps) => {
const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className="container">
      {todoList.map((todo: IToDo) => {
        return <ListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ViewList;
