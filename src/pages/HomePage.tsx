import ListItem from "../components/ListItem/ListItem";
import { IToDo } from "../models/todo-item";

interface ComponentProps {
  todos: IToDo[];
}

const HomePage = ({ todos }: ComponentProps) => {
  return (
    <div className="container">
      {todos.map((todo: IToDo) => {
        return <ListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default HomePage;
