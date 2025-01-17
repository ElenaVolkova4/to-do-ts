import { IToDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";

const ToDoListItem = (props: {
  toDoItem: IToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></button>
        <button
          className={props.toDoItem.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></button>
      </div>
    </li>
  );
};

export default ToDoListItem;
