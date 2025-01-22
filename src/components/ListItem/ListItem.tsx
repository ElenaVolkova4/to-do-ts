import { IToDo } from "../../models/todo-item";
import { Link } from "./ListItem.styled";

const ListItem = ({ todo }: { todo: IToDo }) => {
  return (
    <Link
      isDone={todo.isDone}
      to={`/list/${todo.id}`}
      // className={`${classes.link} ${
      //   todo.isDone ? classes.done : classes.notDone
      // }`}
    >
      {todo.text}
    </Link>
  );
};

export default ListItem;
