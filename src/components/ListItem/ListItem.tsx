import { Link } from "react-router-dom";
import { IToDo } from "../../models/todo-item";
import classes from "./ListItem.module.scss";

const ListItem = ({ todo }: { todo: IToDo }) => {
  return (
    <Link
      to={`/list/${todo.id}`}
      className={`${classes.link} ${
        todo.isDone ? classes.done : classes.notDone
      }`}
    >
      {todo.text}
    </Link>
  );
};

export default ListItem;
